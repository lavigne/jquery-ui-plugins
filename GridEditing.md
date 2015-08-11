# Editing Grid Data #
The grid comes with built-in text, numeric, integer, drop-down list and date editors. If one of the pre-defined types doesn't suit your needs, you can easily implement a custom editor. Editors are configured by specifying a column's [editor](GridColumnConfiguration#editor.md) attribute as part of the column configuration. By default the grid's [autoEdit](GridAPI#autoEdit.md) option is set to `true`, which means cells will be made editable when they receive focus, i.e. if they are clicked on or tabbed to. Setting the [autoEdit](GridAPI#autoEdit.md) option to `false` means cells will only become editable when the are double clicked.

### Examples: ###
#### Basic Text Editor ####
The basic text editor will render a input field on a cell when it's clicked.
```
var cols = [
  {
    id : 'project',
    name : 'Project Name',
    field : 'project',	
    editor: 'text'
  },
  // ... continue with other column definitions
]
```

#### Numeric Only Text Editor ####
The numeric editor will render an input field that only allows numbers (including floating point numbers) when a cell is clicked.
```
var cols = [
  {
    id : 'recordCount',
    name : 'Record Count',
    field : 'recordCount',	
    editor: 'numeric'
  },
  // ... continue with other column definitions
]
```

#### Integer Only Text Editor ####
The integer editor will render an input field that only allows integers when a cell is clicked.
```
var cols = [
  {
    id : 'recordCount',
    name : 'Record Count',
    field : 'recordCount',	
    editor: 'integer'
  },
  // ... continue with other column definitions
]
```

#### Date Editor ####
For date columns, the date editor will render a calendar icon next to the cell when it's clicked on and show a small calendar dialog from which the user can select a date. The calendar icon that is display can be changed by setting the [calendarImage](GridAPI#calendarImage.md) grid option.
```
var cols = [
  {
    id : 'start',
    name : 'Start',
    field : 'start',
    editor: 'date'		
  },
  // ... continue with other column definitions
]
```

#### Simple Array Drop-Down List Editor ####
A simple array can be used to create a drop-down list editor when the values displayed in the drop down list options are the same as the value of the drop-down list options, i.e. the HTML options will look like this `<option value="myValue">myValue</option>`.
```
var cols = [
  {
    id : 'onBudget',
    name : 'On Budget',
    field : 'onBudget',		
    editor: ['true', 'false']
  },
  // ... continue with other column definitions
]
```

#### Object Array Drop-Down List Editor ####
An object array can be used to create a drop-down list editor where the values displayed in the drop down list options are not the same as the value of the drop-down list options, i.e. the HTML options will look like this `<option value="ACTUAL_VALUE">Display Value</option>`. The objects in the array must have `name` and `value` properties where `name` is the value that will be displayed by the option and `value` is the actual value assigned to the option. You can also specify an optional `disabled` property to specify that an option cannot be selected.
```
var cols = [
  {
    id : 'methodology',
    name : 'Methodology',
    field : 'methodology',		
    editor: [
      {'name': 'None', 'value': ''}, 
      {'name': 'Extreme Programming', 'value': 'extreme programming'}, 
      {'name': 'Scrum', 'value': 'scrum'},
      {'name': 'Waterfall', 'value': 'waterfall', 'disabled': true} // not allowed to select "Waterfall"
    ]
  },
  // ... continue with other column definitions
]
```

#### Custom Editor ####
To create a custom editor, define a function that follows the SlickGrid [editor interface](https://github.com/mleibman/SlickGrid/wiki/Writing-custom-cell-editors) and assign the function to the column's editor property. As an example, the following is a custom editor that renders a slider control using the [jQuery UI slider widget](http://api.jqueryui.com/slider/).

```
function PercentSliderEditor(args) {
  var $input = null;
  var defaultValue = null;
			
  this.init = function () {
    var $cell = $(args.container);
    var paddingTop = $cell.padding('top');
    $input = $('<div class="ui-grid-editor"/>').slider({
      min: 0, 
      max: 100,
      slide: function(event, ui) {
        $input.attr('title', ui.value);
      }
    })
    .appendTo(args.container)
    .bind('keydown.nav', function (e) {
      if (e.keyCode === $.ui.keyCode.LEFT || e.keyCode === $.ui.keyCode.RIGHT) {
        e.stopImmediatePropagation();
      }
    })
    .css('margin-top', '4px');
  };
			
  this.destroy = function () {				
    $input.remove();
  };
		
  this.focus = function () {
    $input.focus();
  };
			
  this.isValueChanged = function () {
    return $.uiplugins.grid.prototype._trackChange.call(this, $input, defaultValue, args);				
  };
			
  this.loadValue = function (item) {
    defaultValue = item[args.column.field] || '';
    $input.slider('value', defaultValue);
    $input[0].defaultValue = defaultValue;
    $input.attr('title', defaultValue);
    $input.select();
  };		    
		
  this.serializeValue = function () {
    return $input.slider('value');
  };
		
  this.applyValue = function (item, state) {
    item[args.column.field] = state;
  };						

  this.validate = function () {
    if(args.column.validator) {
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
}
```

Then simply assign the function to the column's editor property:

```
var cols = [
  {
    id : 'percentComplete',
    name : '% Complete',
    field : 'percentComplete',		
    editor: PercentSliderEditor
  },
  // ... continue with other column definitions
]
```