/*
 * jQuery UI Grid 0.0.9
 *
 * Copyright 2012, Chad LaVigne
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php) 
 *
 * http://code.google.com/p/jquery-ui-plugins/wiki/Grid
 *
 * Depends:
 *  jquery 1.8.2
 *	jquery.ui.core.1.8.16.js
 *	jquery.ui.widget.1.8.16.js
 *	jquery.event.drag-2.0.js 	
 *	slick.core.2.0.2.js
 *	slick.grid.2.0.2.js
 *	slick.dataview.2.0.2.js
 */
;(function($, undefined) {
	$.widget("uiplugins.grid", {
		options: {
			rowKey: "id",
			data: [],
			columns: [], // sorting defaults to true so that we get text & number sorting for free, if you specify a sort function we use that for compare, if you don't want sorting you have to opt out with sort: false
			filter: null, // can be 'startsWith', 'endsWith', 'contains', 'doesNotContain', an array of values for a drop down list or an object with an impl property that is a function
			// to do custom filtering, the function receives filterValue and itemValue parameters and "this" refers to the filter object, it returns true if the value should be shown, false otherwise
			// if filter is an array or a custom filter object has an options array, a drop down list will be rendered
			// options for drop downs can either be a simple string array, in which case the value displayed for an option is the same as the option's value OR it can be an array of objects 
			// containing name & value attributes - the name is what will be displayed in the dropdown list, the value is the value that will be used for filtering when the option is selected
			filterDefault: null, // default value selected for filter
			// columns can have an editor which can be a string for pre-defined types or a function that gets an object param with the following attributes:
				/*
				 * cancelChanges: function cancelEditAndSetFocus() {
					column: Object
					commitChanges: function commitEditAndSetFocus() {
					container: HTMLDivElement
					grid: SlickGrid
					gridPosition: Object
					item: Object
					position: Object
					defaultValue: undefined
				 */
			enableCellNavigation: true,
			enableColumnReorder: false,
			showHeaderRow: false
		},		
		_create: function() {
			var self = this,
				opts = this.options,
				dataView = this.dataView = new Slick.Data.DataView();	
			this.element.addClass('ui-grid');
			this._initColumns();
			opts.showHeaderRow = this.filters ? true : false;
			var grid = this.grid = new Slick.Grid(this.element, this.dataView, opts.columns, opts);
			
			if(this.filters) {
				this._renderFilters();
				
				$(this.grid.getHeaderRow()).on("change keyup", "input, select", function(e) {
					var columnId = $(this).data('columnId');
					if (!columnId) {
						return; // this check shouldn't be required but there's some occasional issues with the delegate that mandates it
					}
		            self.filters[columnId].value = $.trim($('#ui-grid-filter-' + columnId).val());				
					self.dataView.refresh();
					grid.invalidate();
				});	
			}
			grid.onSort.subscribe(function(e, args) {
	            sortcol = args.sortCol.field;	
	            // using native sort with comparer
	            // preferred method but can be very slow in IE with huge datasets      
	            self.dataView.sort(self.sortFunctions[args.sortCol.id], args.sortAsc);	           
	            grid.invalidate();
	        });			
						
			grid.onColumnsReordered.subscribe(function() {
				self._renderFilters();
			});
		
			grid.onColumnsResized.subscribe(function() {
				self._renderFilters();
			});
			
			dataView.beginUpdate();
			dataView.setItems(opts.data, opts.rowKey);
			dataView.endUpdate();
			grid.invalidate();
		},
		_initColumns: function() {
			var sortFunctions = {};
			var filters = {};
			var hasFilters = false;
			var columns = this.options.columns;
			
			for(var i = 0; i < columns.length; i++) {
				var col = columns[i];
				
				if(col.sort !== false) {
					col.sortable = true;
					
					if(typeof col.sort === "function") {
						sortFunctions[col.id] = col.sort;
					} else {
						sortFunctions[col.id] = this._compare;
					}
				}		
				
				if(col.filter) {
					hasFilters = true;					
					// if the filter is an object, it's a custom filter and we expect an impl attribute that's a function that will do the filtering
					// if the custom filter has an options attribute, we render a list and it's value is used in the custom filter otherwise we do a text field
					if(col.filter.impl) {
						filters[col.id] = $.extend(col.filter, {"type": "custom", "value": col.filterDefaultValue});						
					} else {
						var isList = $.isArray(col.filter);
						var type = isList ? 'list' : col.filter;
						var options = isList ? col.filter : null;
						filters[col.id] = {"type": type, "value": col.filterDefault, "options": options};
					}					
				}
				
				if(col.editor) {
					// if it's not a custom function apply the correct built-in editor
					if(typeof col.editor !== 'function') {
						var editorType = col.editor;
						
						switch(col.editor) {
							case 'dropdown':
								break;
							default:
								col.editor = this._textEdit;
								col.dataType = editorType;
								break;
						}								
					}
				}
			}
			
			this.sortFunctions = sortFunctions;
			
			if(hasFilters) {				
				this.filters = filters;
				var self = this;			
				this.dataView.setFilter(function(item) {
					return self._filter(item);
				});
			}			
		},	
		_renderFilters: function() {
			var self = this;
			var grid = this.grid;
			var columns = grid.getColumns();
			
			for(var i = 0; i < columns.length; i++) {
				var column = columns[i];
				var filter = self.filters[column.id];
				
                if(filter) {
                    var header = grid.getHeaderRowColumn(column.id);
                    $(header).empty();

                    var id = 'ui-grid-filter-' + column.id;
                    var value = filter.value ? filter.value : '';
                    
                    if(filter.options) {
                    	self._renderDropDownFilter(id, header, column, filter.options);
                    } else {
                    	$('<input id="' + id + '" type="text" class="ui-grid-filter" value="' + value + '">')
                    		.appendTo(header)
                    		.data("columnId", column.id)
                    		.width($(header).width() - 4)
                    		.height($(header).height() - 12);
                    }                    		          
                }
			}
		},
		_renderDropDownFilter: function(id, header, column, options) {
			var html = '<select id="' + id + '" class="ui-grid-filter">';
			html += '<option value=""></option>';
			var filterValue = this.filters[column.id].value;
			
			for(var i = 0; i < options.length; i++) {
				var option = options[i];
				var value = option.value ? option.value : option;
				var name = option.name ? option.name : option;				
				html += '<option value="' + value + '"' + (value === filterValue ? 'selected' : '') + '>' + name + '</option>';								
			}			
            html += '</select>';
            $(html).appendTo(header)
            	.data("columnId", column.id)
            	.width($(header).width() - 4)
                .val(filterValue);
		},
		_filter: function(item) {		
			var grid = this.grid;
            var filters = this.filters;
            
			if (item && filters) {
				var result = true;
            
	            for (var columnId in filters) {
	            	var filter = filters[columnId];
	            		              
	            	if(filter && filter.value) {
	                    var columns = grid.getColumns();
	                    var column = columns[grid.getColumnIndex(columnId)];
	                    
	                    if (column == null || column == undefined){
	                    	//column is in the filter list, but is not visible, no need to filter
	                    	continue;
	                    }
	                    
	                    var itemVal = item[column.field] + '';
	                    
	                    if(itemVal) {
	                    	switch(filter.type) {
		                    	case 'startsWith':
		                    		result =  itemVal.toLowerCase().startsWith(filter.value);
		                    		break;
		                    	case 'endsWith':
		                    		result =  itemVal.toLowerCase().endsWith(filter.value);
		                    		break;
		                    	case 'contains':
		                    		result =  itemVal.toLowerCase().indexOf(filter.value) > -1;
		                    		break;
		                    	case 'doesNotContain':
		                    		result =  itemVal.toLowerCase().indexOf(filter.value) === -1;
		                    		break;
		                    	case 'list':
		                    		result = itemVal === filter.value;
		                    		break;
		                    	case 'custom':
		                    		result = filter.impl.call(filter, filter.value, itemVal);
	                    	}	                    	                   
	                    }
	
	                    if (!result) {
	                        return result;
	                    }                
	                }
	            }
			}
            
            return true;        
		},		
		_textEdit: function(args) {			
			var $input;
			var defaultValue;
		
		    this.init = function () {
		    	var $cell = $(args.container);
		    	var $paddingTop = $cell.padding('top');
		    	$input = $('<input type="text" class="editor-text"/>')
					.appendTo(args.container)
					.bind('keydown.nav', function (e) {
						if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
							e.stopImmediatePropagation();
						}
					})
					.width($cell.width() + $cell.padding('right') - ($.browser.msie || $.browser.mozilla ? 2 : 1))
					.height($cell.height() - $paddingTop - $cell.padding('bottom'))
					.css({'position': 'relative', 'top': -$paddingTop, 'left': -$cell.padding('left')})
					.focus()
					.select();
		    	
		    	switch(args.column.dataType) {
		    		case 'integer':
		    			$input.textinput({'filter': 'digits'});
		    			break;
		    		case 'float':
		    			$input.textinput({'filter': 'numeric'});
		    			break;
		    	}
		    };
		
		    this.destroy = function () {
		    	$input.remove();
		    };
		
		    this.focus = function () {
		    	$input.focus();
		    };
		
		    this.getValue = function () {
		    	return $input.val();
		    };
		
		    this.setValue = function (val) {
		    	$input.val(val);
		    };
		
		    this.loadValue = function (item) {
				defaultValue = item[args.column.field] || '';
				$input.val(defaultValue);
				$input[0].defaultValue = defaultValue;
				$input.select();
		    };
		
		    this.serializeValue = function () {
		    	return $input.val();
		    };
		
		    this.applyValue = function (item, state) {
		    	item[args.column.field] = state;
		    };
		
		    this.isValueChanged = function () {
		    	return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
		    };
		
		    this.validate = function () {
		    	if (args.column.validator) {
		    		var validationResults = args.column.validator($input.val());
		    		if (!validationResults.valid) {
		    			return validationResults;
		    		}
		    	}
		
		    	return {
		    		valid: true,
		    		msg: null
		    	};
		    };
		
		    this.init();
		},
		_compare: function(row1, row2) {			
			var val = row1[sortcol], val2 = row2[sortcol];			
			return (val == val2 ? 0 : (val > val2 ? 1 : -1));
		},
		getSelectedItems: function() {
			return this.grid.getSelectionModel().getSelectedItemIds();
		},
		setSelectedItems: function() {
			
		},
		disable: function() {
			$.Widget.prototype.disable.call(this);			
			this._trigger("disable");
		},
		enable: function() {
			$.Widget.prototype.enable.call(this);			
			this._trigger("enable");
		},		
		destroy: function() {
			this.grid.onColumnsReordered.unsubscribe();
			this.grid.onColumnsResized.unsubscribe();
			$.Widget.prototype.destroy.call(this);		
		}
	});
})(jQuery);