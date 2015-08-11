# Grid API #
`*` Denotes options, methods & events that are specific to the jQuery UI Plugin Grid (i.e. not part of Slick Grid). Some simply delegate to underlying Slick Grid functionality but are exposed via the jQuery plugin so they can initialized/called like any other jQuery UI plugin option/method/event.

<table cellspacing='10px'>
<tr>
<blockquote><td><h3><a href='#Options.md'>Options</a></h3></td>
<td><h3><a href='#Methods.md'>Methods</a></h3></td>
<td><h3><a href='#Events.md'>Events</a></h3></td>
</tr>
<tr>
<td><a href='#asyncEditorLoadDelay.md'>asyncEditorLoadDelay</a></td>
<td><a href='#addCellCssClass(rowKey,_columnName,_cssClass).md'>addCellCssClass *</a></td>
<td><a href='#disable().md'>disable *</a></td>
</tr>
<tr>
<td><a href='#asyncEditorLoading.md'>asyncEditorLoading</a></td>
<td><a href='#addCellCssStyles(key,_hash).md'>addCellCssStyles</a></td>
<td><a href='#enable().md'>enable *</a></td>
</tr>
<tr>
<td><a href='#asyncPostRender.md'>asyncPostRender</a></td>
<td><a href='#autosizeColumns().md'>autosizeColumns</a></td>
<td><a href='#onActiveCellChanged().md'>onActiveCellChanged</a></td>
</tr>
<tr>
<td><a href='#asyncPostRenderDelay.md'>asyncPostRenderDelay</a></td>
<td><a href='#cancelCurrentEdit().md'>cancelCurrentEdit *</a></td>
<td><a href='#onActiveCellPositionChanged().md'>onActiveCellPositionChanged</a></td>
</tr>
<tr>
<td><a href='#autoEdit.md'>autoEdit</a></td>
<td><a href='#canCellBeActive(rowIndex,_columnIndex).md'>canCellBeActive</a></td>
<td><a href='#onAddNewRow().md'>onAddNewRow</a></td>
</tr>
<tr>
<td><a href='#autoHeight.md'>autoHeight</a></td>
<td><a href='#canCellBeSelected(rowIndex,_columnIndex).md'>canCellBeSelected</a></td>
<td><a href='#onBeforeCellEditorDestroy().md'>onBeforeCellEditorDestroy</a></td>
</tr>
<tr>
<td><a href='#calendarImage.md'>calendarImage</a></td>
<td><a href='#clearCellCssClass(rowKey,_columnName).md'>clearCellCssClass *</a></td>
<td><a href='#onBeforeDestroy().md'>onBeforeDestroy</a></td>
</tr>
<tr>
<td><a href='#cellFlashingCssClass.md'>cellFlashingCssClass</a></td>
<td><a href='#clearChangedItems().md'>clearChangedItems *</a></td>
<td><a href='#onBeforeEditCell(event,_data).md'>onBeforeEditCell</a></td>
</tr>
<tr>
<td><a href='#columns.md'>columns</a></td>
<td><a href='#clearItemChanges(rowKey).md'>clearItemChanges *</a></td>
<td><a href='#onBeforeHeaderCellDestroy().md'>onBeforeHeaderCellDestroy</a></td>
</tr>
<tr>
<td><a href='#data.md'>data</a></td>
<td><a href='#destroy().md'>destroy</a></td>
<td><a href='#onBeforeHeaderRowCellDestroy().md'>onBeforeHeaderRowCellDestroy</a></td>
</tr>
<tr>
<td><a href='#dataItemColumnValueExtractor.md'>dataItemColumnValueExtractor</a></td>
<td><a href='#disable().md'>disable *</a></td>
<td><a href='#onCellChange().md'>onCellChange</a></td>
</tr>
<tr>
<td><a href='#defaultColumnWidth.md'>defaultColumnWidth</a></td>
<td><a href='#editActiveCell().md'>editActiveCell</a></td>
<td><a href='#onCellCssStylesChanged().md'>onCellCssStylesChanged</a></td>
</tr>
<tr>
<td><a href='#defaultFormatter.md'>defaultFormatter</a></td>
<td><a href='#enable().md'>enable *</a></td>
<td><a href='#onClick().md'>onClick</a></td>
</tr>
<tr>
<td><a href='#editable.md'>editable</a></td>
<td><a href='#flashCell(rowIndex,_columnIndex,_speed).md'>flashCell</a></td>
<td><a href='#onColumnsReordered().md'>onColumnsReordered</a></td>
</tr>
<tr>
<td><a href='#editorFactory.md'>editorFactory</a></td>
<td><a href='#focus().md'>focus</a></td>
<td><a href='#onColumnsResized().md'>onColumnsResized</a></td>
</tr>
<tr>
<td><a href='#editorLock.md'>editorLock</a></td>
<td><a href='#getActiveCell().md'>getActiveCell</a></td>
<td><a href='#onContextMenu().md'>onContextMenu</a></td>
</tr>
<tr>
<td><a href='#enableAddRow.md'>enableAddRow</a></td>
<td><a href='#getActiveCellNode().md'>getActiveCellNode</a></td>
<td><a href='#onDblClick().md'>onDblClick</a></td>
</tr>
<tr>
<td><a href='#enableAsyncPostRender.md'>enableAsyncPostRender</a></td>
<td><a href='#getActiveCellPosition().md'>getActiveCellPosition</a></td>
<td><a href='#onDrag().md'>onDrag</a></td>
</tr>
<tr>
<td><a href='#enableCellNavigation.md'>enableCellNavigation</a></td>
<td><a href='#getCanvasNode().md'>getCanvasNode</a></td>
<td><a href='#onDragEnd().md'>onDragEnd</a></td>
</tr>
<tr>
<td><a href='#enableColumnReorder.md'>enableColumnReorder</a></td>
<td><a href='#getCellCssClass(rowKey,_columnName).md'>getCellCssClass *</a></td>
<td><a href='#onDragInit().md'>onDragInit</a></td>
</tr>
<tr>
<td><a href='#enableTextSelectionOnCells.md'>enableTextSelectionOnCells</a></td>
<td><a href='#getCellCssStyles(key).md'>getCellCssStyles</a></td>
<td><a href='#onDragStart().md'>onDragStart</a></td>
</tr>
<tr>
<td><a href='#explicitInitialization.md'>explicitInitialization</a></td>
<td><a href='#getCellEditor().md'>getCellEditor</a></td>
<td><a href='#onHeaderCellRendered().md'>onHeaderCellRendered</a></td>
</tr>
<tr>
<td><a href='#forceFitColumns.md'>forceFitColumns</a></td>
<td><a href='#getCellFromEvent(event).md'>getCellFromEvent</a></td>
<td><a href='#onHeaderClick().md'>onHeaderClick</a></td>
</tr>
<tr>
<td><a href='#forceSyncScrolling.md'>forceSyncScrolling</a></td>
<td><a href='#getCellFromPoint(x,_y).md'>getCellFromPoint</a></td>
<td><a href='#onHeaderContextMenu().md'>onHeaderContextMenu</a></td>
</tr>
<tr>
<td><a href='#formatterFactory.md'>formatterFactory</a></td>
<td><a href='#getCellNode(rowIndex,_columnIndex).md'>getCellNode</a></td>
<td><a href='#onHeaderMouseEnter().md'>onHeaderMouseEnter</a></td>
</tr>
<tr>
<td><a href='#fullWidthRows.md'>fullWidthRows</a></td>
<td><a href='#getCellNodeBox().md'>getCellNodeBox</a></td>
<td><a href='#onHeaderMouseLeave().md'>onHeaderMouseLeave</a></td>
</tr>
<tr>
<td><a href='#headerRowHeight.md'>headerRowHeight</a></td>
<td><a href='#getChangedItems().md'>getChangedItems *</a></td>
<td><a href='#onHeaderRowCellRendered().md'>onHeaderRowCellRendered</a></td>
</tr>
<tr>
<td><a href='#leaveSpaceForNewRows.md'>leaveSpaceForNewRows</a></td>
<td><a href='#getChanges().md'>getChanges *</a></td>
<td><a href='#onKeyDown().md'>onKeyDown</a></td>
</tr>
<tr>
<td><a href='#multiColumnSort.md'>multiColumnSort</a></td>
<td><a href='#getColumnIndex(columnName).md'>getColumnIndex</a></td>
<td><a href='#onMouseEnter().md'>onMouseEnter</a></td>
</tr>
<tr>
<td><a href='#multiSelect.md'>multiSelect</a></td>
<td><a href='#getColumns().md'>getColumns</a></td>
<td><a href='#onMouseLeave().md'>onMouseLeave</a></td>
</tr>
<tr>
<td><a href='#rowHeight.md'>rowHeight</a></td>
<td><a href='#getData().md'>getData *</a></td>
<td><a href='#onScroll().md'>onScroll</a></td>
</tr>
<tr>
<td><a href='#rowKey.md'>rowKey</a></td>
<td><a href='#getDataItem(rowIndex).md'>getDataItem</a></td>
<td><a href='#onSelectedRowsChanged().md'>onSelectedRowsChanged</a></td>
</tr>
<tr>
<td><a href='#selectedCellCssClass.md'>selectedCellCssClass</a></td>
<td><a href='#getDataLength().md'>getDataLength</a></td>
<td><a href='#onSort().md'>onSort</a></td>
</tr>
<tr>
<td><a href='#selectionModel.md'>selectionModel</a></td>
<td><a href='#getDataView().md'>getDataView *</a></td>
<td><a href='#onValidationError().md'>onValidationError</a></td>
</tr>
<tr>
<td><a href='#showHeaderRow.md'>showHeaderRow</a></td>
<td><a href='#getEditController().md'>getEditController</a></td>
<td><a href='#onViewportChanged().md'>onViewportChanged</a></td>
</tr>
<tr>
<td><a href='#showTopPanel.md'>showTopPanel</a></td>
<td><a href='#getEditorLock().md'>getEditorLock</a></td>
<td></td>
</tr>
<tr>
<td><a href='#topPanelHeight.md'>topPanelHeight</a></td>
<td><a href='#getGridPosition().md'>getGridPosition</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getHeaderRow().md'>getHeaderRow</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getHeaderRowColumn().md'>getHeaderRowColumn</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getItem(rowKey).md'>getItem *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getItems(rowKeys).md'>getItems *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getOptions().md'>getOptions</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getOriginalValue(rowKey,_columnName).md'>getOriginalValue *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getRenderedRange().md'>getRenderedRange</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getSelectedRows().md'>getSelectedRows</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getSelectionModel().md'>getSelectionModel</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getSlickGrid().md'>getSlickGrid *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getSortColumns().md'>getSortColumns</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getTopPanel().md'>getTopPanel</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#getViewport().md'>getViewport</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#gotoCell(rowIndex,_cellIndex,_forceEdit).md'>gotoCell</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#init().md'>init</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#invalidate().md'>invalidate</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#invalidateAllRows().md'>invalidateAllRows</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#invalidateRow(rowIndex).md'>invalidateRow</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#invalidateRows(rowIndicies).md'>invalidateRows</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#isItemChanged(rowKey).md'>isItemChanged *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#markItemChanged(rowKey,_columnName,_originalValue).md'>markItemChanged *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#navigateDown().md'>navigateDown</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#navigateLeft().md'>navigateLeft</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#navigateNext().md'>navigateNext</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#navigatePrev().md'>navigatePrev</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#navigateRight().md'>navigateRight</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#navigateUp().md'>navigateUp</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#registerPlugin(plugin).md'>registerPlugin</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#removeCellCssClass(rowKey,_columnName,_classToRemove).md'>removeCellCssClass *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#removeCellCssStyles(key).md'>removeCellCssStyles</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#removeRowCssClass(rowKey,_classToRemove).md'>removeRowCssClass *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#render().md'>render</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#replaceItem(rowKey,_newItem).md'>replaceItem *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#resetActiveCell().md'>resetActiveCell</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#resizeCanvas().md'>resizeCanvas</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#saveCurrentEdit().md'>saveCurrentEdit *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#scrollCellIntoView(rowIndex,_columnIndex).md'>scrollCellIntoView</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#scrollRowIntoView(rowIndex,_doPaging).md'>scrollRowIntoView</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#scrollRowToTop(rowIndex).md'>scrollRowToTop</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setActiveCell(rowIndex,_columnIndex).md'>setActiveCell</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setCellCssClass(rowKey,_columnName,_cssClass).md'>setCellCssClass *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setCellCssClasses(cssData).md'>setCellCssClasses *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setCellCssStyles(key,_hash).md'>setCellCssStyles</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setColumns(columns).md'>setColumns</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setData(data).md'>setData</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setHeaderRowVisibility(visible).md'>setHeaderRowVisibility</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setItem(rowKey,_updatedItem).md'>setItem *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setOptions().md'>setOptions</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setRowCssClass(rowKey,_cssClass).md'>setRowCssClass *</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setSelectedRows(rowIndicies).md'>setSelectedRows</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setSelectionModel(selectionModel).md'>setSelectionModel</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setSortColumn(columnId,_ascending).md'>setSortColumn</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setSortColumns(columns).md'>setSortColumns</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#setTopPanelVisibility(visible).md'>setTopPanelVisibility</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#unregisterPlugin().md'>unregisterPlugin</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#updateCell().md'>updateCell</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#updateColumnHeader().md'>updateColumnHeader</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#updateRow().md'>updateRow</a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href='#updateRowCount().md'>updateRowCount</a></td>
<td></td>
</tr>
</table>
<h2>Options</h2>
<h4>asyncEditorLoadDelay</h4>
Delay after which cell editor is loaded. Ignored unless <a href='#asyncEditorLoading.md'>asyncEditorLoading</a> is true.</blockquote>

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 100


---


#### asyncEditorLoading ####
Makes cell editors load asynchronously after a small delay. This greatly increases keyboard navigation speed.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### asyncPostRender ####
A callback function that is fired after the cell DOM node has been rendered. This function receives the cell DOM element, rowNumber, data item and column object as parameters. The enableAsyncPostRender option must be set to true for the asyncPostRender function to be called.

**Type:** [Function](http://api.jquery.com/Types/#Function)

**Default:** null

**Example:**

Set during initialization:
```
// define asyncPostRender function on column definition
var cols = [{
  id : 'onBudget',
  name : 'On Budget',
  field : 'onBudget',
  asyncPostRender: function(cellElement, rowNumber, item, column) {
    if(!item.onBudget) {
      $(cellElement).addClass('error');
    }
  }
}];

// set enableAsyncPostRender & asyncPostRenderDelay grid options
$('#myGrid').grid({
  data: myData,
  columns: cols,
  rowKey: 'name',
  enableAsyncPostRender: true, // this must be set to true or the asyncPostRender function won't fire
  asyncPostRenderDelay: 0 // setting this to 0 makes the asyncPostRender function fire immediately after the cell is rendered
});
```


---


#### asyncPostRenderDelay ####
If [enableAsyncPostRender](#enableAsyncPostRender.md) is set to true, this is the delay in milliseconds after which each column's [asyncPostRender](GridColumnConfiguration#asyncPostRender.md) function is called.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 50

**Example:**

Set during initialization:
```
$('#myGrid').grid({
  data: myData,
  columns: columns,
  rowKey: 'name,'
  enableAsyncPostRender: true,
  asyncPostRenderDelay: 5, // call each column's asyncPostRender function 5 milliseconds after the cell is rendered 
});
```


---


#### autoEdit ####
When set to false cells will not automatically go into edit mode when they receive focus.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true


---


#### autoHeight ####
If true and the DOM element the grid is attached to doesn't specify a height, the grid vertically resizes to fit all rows rather than making the grid scrollable. This option has no effect if a static height is defined on the DOM element the grid is attached to. By default autoHeight is set to false and the grid's height is determined by the DOM element the grid is attached to, so if the grid contains more rows than can be displayed the grid becomes scrollable.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### calendarImage ####
The location of the calendar icon to be used for [editable date fields](GridEditing#Date_Editor.md) and [date filters](GridFiltering#Date_filter.md).

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ![http://jquery-ui-plugins.googlecode.com/svn/trunk/examples/images/calendar.png](http://jquery-ui-plugins.googlecode.com/svn/trunk/examples/images/calendar.png)


---


#### cellFlashingCssClass ####
A CSS class to apply to flashing cells via flashCell().

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** flashing


---


#### columns ####
The grid column definitions. See GridColumnConfiguration for details.

**Type:** [Array](http://api.jquery.com/Types/#Array)

**Default:**


---


#### data ####
The data used to populate the grid.

**Type:** [Array](http://api.jquery.com/Types/#Array)

**Default:**


---


#### dataItemColumnValueExtractor ####
A custom function that can be used to modify the cell value before it's passed to the formatter. In the example below the `values` field on the row object contains an array and the custom `dataItemColumnValueExtractor` returns one of the values in the array based on an index field on the column so each value in the `values` array is displayed in a different column.

**Type:** [Function](http://api.jquery.com/Types/#Function)

**Default:** null

**Example:**

Set during initialization:
```
var columns = [
  {id: 'name', name: 'Name', field: 'name'},
  {id: 'field1', name: 'Field1', field: 'values', fieldIdx: 0},
  {id: 'field2', name: 'Field2', field: 'values', fieldIdx: 1},
  {id: 'field3', name: 'Field3', field: 'values', fieldIdx: 2}
];

// Get the item column value using a custom 'fieldIdx' column param
function getItemColumnValue(item, column) {
  var values = item[column.field];
  if (column.fieldIdx !== undefined) {
	return values && values[column.fieldIdx];
  } else {
	return values;
  }
}

$('#myGrid').grid({
  data: myData,
  columns: columns,
  rowKey: 'name',
  dataItemColumnValueExtractor: getItemColumnValue
});
```


---


#### defaultColumnWidth ####
Default width of columns. If forceFitColumns is set to true, this option has no effect.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 80


---


#### defaultFormatter ####
The function used to render cells that are in a column that doesn't have a formatter specified.

**Type:** [Function](http://api.jquery.com/Types/#Function)

**Default:** A function that displays the field's value as text.


---


#### editable ####
Boolean value indicating whether the grid cells can be edited. See [grid editing](GridEditing.md) for more details on making the grid editable.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### editorFactory ####
An object that implements a getEditor(columnDefinition) function that returns the editor for a given column. See [Custom\_Editors](https://github.com/mleibman/SlickGrid/wiki/Writing-custom-cell-editors).

**Type:** [Object](http://api.jquery.com/Types/#Object)

**Default:** null


---


#### editorLock ####
A Slick.EditorLock instance to use for controlling concurrent data edits.

**Type:** [Object](http://api.jquery.com/Types/#Object)

**Default:** Slick.GlobalEditorLock


---


#### enableAddRow ####
If true, a blank row will be displayed at the bottom - typing values in that row will add a new one. Must subscribe to onAddNewRow to save values.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### enableAsyncPostRender ####
If true, async post rendering will occur and asyncPostRender delegates on columns will be called.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### enableCellNavigation ####
If true, grid cells can be navigated using the arrow keys.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true


---


#### enableColumnReorder ####
If true, grid columns can be re-ordered using drag and drop. Column re-ordering requires jquery.event.drag-2.0.js and jquery.event.drop-2.0.js.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true


---


#### enableTextSelectionOnCells ####
When set to false, text selection is disabled in grid cells except in input and textarea elements. This option is IE-specific because it depends on the selectstart event which will only fire in IE.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### explicitInitialization ####
Normally [SlickGrid](https://github.com/mleibman/SlickGrid/wiki) is initialized when it's created. Use this option to defer initialization and call the init() method manually. This is useful in cases where the grid is created before the DOM element it's attached is inserted into the DOM. See [Explicit Initialization Example](http://mleibman.github.com/SlickGrid/examples/example-explicit-initialization.html) for more details.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### forceFitColumns ####
Force column sizes to fit into the container (preventing horizontal scrolling). Effectively sets column width to be 1/Number of Columns which on small containers may not be desirable.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### forceSyncScrolling ####
When set to true the grid will continuously re-render as the user scrolls so the view stays in sync with the scroll position. If this value is set to false the grid will re-render every 50 milliseconds which can cause the view to be blank if the user is quickly scrolling a large data set.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### formatterFactory ####
An object that implements a `getFormatter(columnDefinition)` function that returns the formatter for a given column.

**Type:** [Object](http://api.jquery.com/Types/#Object)

**Default:** null

**Example:**

Set during initialization:
```
var myFormatterFactory = {
  getFormatter: function(column) {
    switch(column.field) {
      case 'onSchedule':
        // custom formatter shows a check mark image when onSchedule is truthy
        return function (rowNum, cellNum, value, columnDef, row) {
          return value ? '<img src="images/tick.png"/>' : '';
        };
        break;
      case 'cost':
        // custom formatter that puts an asertisk on values > 5000
        return function (rowNum, cellNum, value, columnDef, row) {
          return Number(value) > 5000 ? '*' + value : value;
        }
    }
  }
};

$('#myGrid').grid({
  data: myData,
  columns: columns,
  rowKey: 'name'
  formatterFactory: myFormatterFactory
});
```


---


#### fullWidthRows ####
Will expand the table row divs to the full width of the container, table cell divs will remain aligned to the left.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### headerRowHeight ####
Height of the secondary header row, this is the row below the column headers where the filters are rendered.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 25


---


#### leaveSpaceForNewRows ####
When set to true the grid is rendered with empty space at the bottom where new rows can be added. This value is ignored if autoHeight is set to true.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### multiColumnSort ####
When true, multi-column sorting is enabled by holding the shift key.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### multiSelect ####
When set to true and selectionModel is set to "row", allows the user to select more than one row at a time by click on a row while holding down the shift or ctrl key. Holding down the shift key allows the user to select a range of rows while the holding down the ctrl key is used to select specific rows one at a time.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true


---


#### rowHeight ####
Height in pixels of the grids rows.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 25


---


#### rowKey ####
The property on each row object that can be used to uniquely identify the row.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** id


---


#### selectedCellCssClass ####
A CSS class to apply to cells highlighted via setHighlightedCells().

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** selected


---


#### selectionModel ####
A string or object identifying the type of selection to be used in the grid. A string value of "row" or "cell" can be used to specify the built-in RowSelectionModel or CellSelectionModel. To use a custom selection model create an object that implements init, destroy and onSelectedRangesChanged functions. For more information on handling selection see the [SlickGrid documenation on handling selection](https://github.com/mleibman/SlickGrid/wiki/Handling-selection)

**Type:** [String](http://api.jquery.com/Types/#String) or [Object](http://api.jquery.com/Types/#Object)

**Default:** null


---


#### showHeaderRow ####
Should the secondary header row be displayed, this is the row below the column headers where the filters are rendered. If any column has an inline filter this value is automatically set to true.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false


---


#### showTopPanel ####
When set to true, a third header row is displayed in addition to the column headers row and the inline filter row. The top panel row is useful for displaying a header row with custom conent.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false

**Example:**

Set during initialization:
```
var grid = $('#myGrid').grid({
  data: myData,
  columns: columns,
  rowKey: 'name',
  showTopPanel: true
});

$('#myCustomHeaderElement').appendTo(grid.getTopPanel()).show();

```


---


#### topPanelHeight ####
If showTopPanel is set to true, sets the height of the top panel, i.e. the 3rd header row that is below the column header row and filter row header.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 25


---


## Methods ##
#### addCellCssClass(rowKey, columnName, cssClass) ####
Add the specified cssClass to the cell at rowKey and columnName. Note that this method only adds the specified class to the list of classes applied to the cell. To set the cell's class attribute to a new value (thus removing any classes previously set on the cell) use [setCellCssClasses](#setCellCssClasses(cssData).md).

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



  * **cssClass**
> Type: [String](http://api.jquery.com/Types/#String)



> The list of CSS classes to apply to the specified cell.


---


#### addCellCssStyles(key, hash) ####
A Slick grid method that adds css style to cells by row index and column name. To add CSS style by row key and column use [addCellCssClass](#addCellCssClass(rowKey,_columnName,_cssClass).md). This is the add-only sibling to `setCellCssStyles(key, hash)`. It will throw an exception if you try to set the same `key` twice without calling `removeCellCssStyles()`. Use `setColumnCssStyles()` instead if you don't want that.

  * **key**
> Type: [String](http://api.jquery.com/Types/#String)



> A key that can be used to access the hash of styles later, to modify or remove it, for example.

  * **hash**
> Type: [Object](http://api.jquery.com/Types/#Object)



> An object that identifies by row index and column name, what styles to apply.

**Example:**

```
$('#myGrid').grid('addCellCssStyles', 'myKey',
  {
    2: {
      title: 'error',
      percentComplete: 'warn'
    },
    9: {
      title: 'blue warn',
      start: 'error'
    }
  }
);

```


---


#### autosizeColumns() ####
Automatically resize the columns to fill the entire width of the grid so there is no horizontal scrolling and no extra horizontal space. Essentially this method sets each column width to grid.width/grid.column.count.

**Example:**

```
$('#myGrid').grid('autosizeColumns');
```


---


#### cancelCurrentEdit() ####
If there is a cell in edit mode, revert the cell's value and take it out of edit mode.

**Example:**

```
$('myGrid').grid('cancelCurrentEdit');
```


---


#### canCellBeActive(rowIndex, columnIndex) ####
Returns a boolean indicating if the cell at `row` and `column` can be active.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **columnIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



**Returns:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Example:**

```
$('#myGrid').grid('canCellBeSelected', 5, 3);
```


---


#### canCellBeSelected(rowIndex, columnIndex) ####
Returns a boolean indicating if the cell at `row` and `column` can be selected.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **columnIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



**Returns:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Example:**

```
$('#myGrid').grid('canCellBeSelected', 5, 3);
```


---


#### clearCellCssClass(rowKey, columnName) ####
Remove all CSS classes from the cell at `rowKey` and `columnName`.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



**Example:**

```
$('#myGrid').grid('clearCellCssClass', '1234', 'price');
```


---


#### clearChangedItems() ####
When the grid is editable, changes made to the data are tracked and can be retrieved using the [getChangedItems](#getChangedItems.md) and [getChanges](#getChanges.md) methods. Changed cells also have the ui-changed-cell class added to them so CSS style can be applied to changed cells. This method removes the ui-changed-cell class from changed cells and clears all change tracking data, making the visible data the new "original" state.

**Example:**

```
$('#myGrid').grid('clearChangedItems');
```


---


#### clearItemChanges(rowKey) ####
When the grid is editable, changes made to the data are tracked and can be retrieved using the [getChangedItems](#getChangedItems.md) and [getChanges](#getChanges.md) methods. Changed cells also have the ui-changed-cell class added to them so CSS style can be applied to changed cells. This method removes the ui-changed-cell class and clears all change tracking data from the row at `rowKey`, making the visible data the new "original" state.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



**Example:**

```
$('#myGrid').grid('clearItemChanges', 'row1234');
```


---


#### destroy() ####
Destroy the grid, removing all functionality added by the grid plug in.

**Example:**

```
$('#myGrid').grid('destroy');
```


---


#### disable() ####
Disables the grid

**Example:**

```
$('#myGrid').grid('disable');
```


---


#### editActiveCell() ####
Put the currently active cell (the one that has focus) into edit mode. This method is really only useful when the [autoEdit](#autoEdit.md) property is set to false, when [autoEdit](#autoEdit.md) is true, cells automatically go into edit mode when they are receive focus on.

**Example:**

```
$('#myGrid').grid('editActiveCell');
```


---


#### enable() ####
Enables the grid

**Example:**

```
$('#myGrid').grid('enable');
```


---


#### flashCell(rowIndex, columnIndex, speed) ####
Apply and remove [cellFlashingCssClass](#cellFlashingCssClass.md) on the cell at `rowIndex` and `columnIndex` at a rate of once every `speed` milliseconds. The [cellFlashingCssClass](#cellFlashingCssClass.md) is applied and removed twice, creating a flashing effect. Currently the number of times to flash the cell is not configurable.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **columnIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **speed**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



> The speed at which to toggle [cellFlashingCssClass](#cellFlashingCssClass.md) in milliseconds

**Example:**

```
$('#myGrid').grid('flashCell', 3, 2);
```


---


#### focus() ####
Set focus on the grid.

**Example:**

```
$('#myGrid').grid('focus');
```


---


#### getActiveCell() ####
Get the active cell, i.e. the one that currently has focus. This method returns an object containing `row` and `cell` properties identifying the row and column indices of the currently active cell.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
$('#myGrid').grid('getActiveCell');
```


---


#### getActiveCellNode() ####
Get the DOM element of the active cell, i.e. the one that currently has focus.

**Returns:** [Element](http://api.jquery.com/Types/#Element)

**Example:**

```
$('#myGrid').grid('getActiveCellNode');
```


---


#### getActiveCellPosition() ####
Get the position coordinates of the active cell, i.e. the one that currently has focus. This method returns an object with the bottom, height, left, right, top, visible and width properties of the active cell's DOM element. Please note that in the version of SlickGrid currently used by this plug in, this method will throw an exception if it is called when there is no active cell.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
$('#myGrid').grid('getActiveCellPosition');
```


---


#### getCanvasNode() ####
Get the DOM element of the grid canvas.

**Returns:** [Element](http://api.jquery.com/Types/#Element)

**Example:**

```
$('#myGrid').grid('getCanvasNode');
```


---


#### getCellCssClass(rowKey, columnName) ####
Get the list of css classes that have been applied to the cell at `rowKey` and `columnName` via [addCellCssClass](#addCellCssClass(rowKey,_columnName,_cssClass).md), [setCellCssClass](#setCellCssClass(rowKey,_columnName,_cssClass).md) or [setCellCssClasses](#setCellCssClasses(cssData).md).

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



**Returns:** [String](http://api.jquery.com/Types/#String)

**Example:**

```
var classList = $('#myGrid').grid('getCellCssClass', 'item1234', 'cost');
```


---


#### getCellCssStyles(key) ####
Get the CSS style hash represented by `key`. The object returned is a list of styles applied to cells by row index and column name. See [addCellCssStyles](#addCellCssStyles(key,_hash).md) and [setCellCssStyles](#setCellCssStyles(key,_hash).md) for details.

  * **key**
> Type: [String](http://api.jquery.com/Types/#String)



> The key identifying a set of CSS styles applied using [addCellCssStyles](#addCellCssStyles(key,_hash).md) or [setCellCssStyles](#setCellCssStyles(key,_hash).md).

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var styleHash = $('#myGrid').grid('getCellCssStyles', 'styleHashKey');
```


---


#### getCellEditor() ####
Get the cell editor of the cell currently being edited, if any. The returned object is an editor that follows the SlickGrid editor interface outlined [here](https://github.com/mleibman/SlickGrid/wiki/Writing-custom-cell-editors).

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var cellEditor = $('#myGrid').grid('getCellEditor');
```


---


#### getCellFromEvent(event) ####
Get the cell closest to the target of the given `event`. The returned cell object has two properties, row and cell which are the row and column index of the cell closest to the event.

  * **event**
> Type: [Event](http://api.jquery.com/Types/#Event)



> The `event` for which to get the cell.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var cell = $('#myGrid').grid('getCellFromEvent', event);
```


---


#### getCellFromPoint(x, y) ####
Get the cell closest to the given `x`, `y` coordinate. This method returns an object with `row` and `cell` properties identifying the row and column index of the cell closest to `x`, `y`. This method always retuns an object and appears to have some issues, especially if the point provided is outside the grid coordinates. For example, passing in 0, 0 returns {row: 0, cell: -1}. If the x coordinate is beyond the edge of the grid, the cell index predictably returns the index of the last column, however if the y coordinate is beyond the bottom edge of the grid the row index returned will be a number that is higher than the row count.

  * **x**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **y**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
$('#myGrid').grid('getCellFromPoint', 100, 150);
```


---


#### getCellNode(rowIndex, columnIndex) ####
Get the DOM element of the cell at `rowIndex` and `columnIndex`.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **columnIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



**Returns:** [Element](http://api.jquery.com/Types/#Element)

**Example:**

```
$('#myGrid').grid('getCellNode', 20, 5);
```


---


#### getCellNodeBox() ####
Get the box coordinates of the cell at `rowIndex` and `columnIndex`. This method returns an object with the `top`, `left`, `bottom` and `right` properties of the cell.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
$('#myGrid').grid('getCellNodeBox', 20, 5);
```


---


#### getChangedItems() ####
Get row objects with cells that have been edited and changed. This method only returns rows that have cells with a value that is different than their original value, that is, if a cell value has been changed and then reverted back to it's original value, the cell is not considered "changed". To clear all tracked changes and make the current state of the grid the "original" state, use [clearChangedItems](#clearChangedItems().md).

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var changedItems = $('#myGrid').grid('getChangedItems');
```


---


#### getChanges() ####
Get a list of changed cell values. This method returns an Array of objects with two properties, the first property is named whatever was specified as the [rowKey](#rowKey.md) for the grid and the second property is an Array of change objects named "changes". The change objects have `field`, `newValue` and `oldValue` properties identifying what changed on each field for the row.

**Returns:** [Array](http://api.jquery.com/Types/#Array)

**Example:**

```
var changes = $('#myGrid').grid('getChanges');
// below is an example of what the returned changes array might look like
[
  {
    employeeNumber: '1234',
    changes: [
      {field: 'name', newValue: 'Tom', oldValue: 'Thomas'},
      {field: 'title', newValue: 'Sr. Developer', oldValue: 'Jr. Developer'}
    ]
  },
  {
    employeeNumber: '5678',
    changes: [
      {field: 'name', newValue: 'Dave', oldValue: 'David'}
    ]
  }
]

```


---


#### getColumnIndex(columnName) ####
Get the column index of `columnName`.

  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



**Returns:** [Integer](http://api.jquery.com/Types/#Integer)

**Example:**

```
var firstNameIndex = $('#myGrid').grid('getColumnIndex', 'firstName');
```


---


#### getColumns() ####
Get the columns Array

**Returns:** [Array](http://api.jquery.com/Types/#Array)

**Example:**

```
var columns = $('#myGrid').grid('getColumns');
```


---


#### getData() ####
Get the array of data displayed in the grid in it's current state.

**Returns:** [Array](http://api.jquery.com/Types/#Array)

**Example:**

```
var data = $('#myGrid').grid('getData');
```


---


#### getDataItem(rowIndex) ####
Get the row item at `rowIndex`.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var fifthRow = $('#myGrid').grid('getDataItem', 5);
```


---


#### getDataLength() ####
Get the number of rows in the grid.

**Returns:** [Integer](http://api.jquery.com/Types/#Integer)

**Example:**

```
var rowCount = $('#myGrid').grid('getDataLength');
```


---


#### getDataView() ####
Get the DataView object used by SlickGrid to render the grid.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var dataView = $('#myGrid').grid('getDataView');
```


---


#### getEditController() ####
Get the edit controller, which is an object responsible for managing cell edits. In general it is recommended to call the [saveCurrentEdit](#saveCurrentEdit().md) and [cancelCurrentEdit](#cancelCurrentEdit().md) methods instead of calling methods on the edit controller directly as those methods check for an edit lock before delegating to the underlying edit controller.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

<ul>

<li><b>cancelCurrentEdit</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>commitCurrentEdit</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

</ul>

**Example:**

```
var editController = $('#myGrid').grid('getEditController');
```


---


#### getEditorLock() ####
Get the Slick.EditorLock object that manages concurrent cell edits. In general it is recommended to call the [saveCurrentEdit](#saveCurrentEdit().md) and [cancelCurrentEdit](#cancelCurrentEdit().md) methods instead of calling methods on the editor lock directly as those methods check for an edit lock and then delegate to the underlying edit controller.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

<ul>

<li><b>activate</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>cancelCurrentEdit</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>commitCurrentEdit</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>deactivate</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>isActive</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

</ul>

**Example:**

```
var editorLock = $('#myGrid').grid('getEditorLock');
```


---


#### getGridPosition() ####
Get an object containing position information about the grid.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

<ul>

<li><b>bottom</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

<li><b>height</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

<li><b>left</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

<li><b>right</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

<li><b>top</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

<li><b>visible</b></li>
Type: <a href='http://api.jquery.com/Types/#Boolean'>Boolean</a>

<li><b>width</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

</ul>

**Example:**

```
var position = $('#myGrid').grid('getGridPosition');
```


---


#### getHeaderRow() ####
Get the secondary header row DOM element. This is the header row where filters are rendered, below the column name headers.

**Returns:** [Element](http://api.jquery.com/Types/#Element)

**Example:**

```
var headerRow = $('#myGrid').grid('getHeaderRow');
```


---


#### getHeaderRowColumn() ####
Get the secondary header row column DOM element for the columns specified by `columnId`. The secondary header row is the header row where filters are rendered, below the column name headers.

**Returns:** [Element](http://api.jquery.com/Types/#Element)

**Example:**

```
var headerRowColumn = $('#myGrid').grid('getHeaderRowColumn', 'lastName');
```


---


#### getItem(rowKey) ####
Get the item (row object) for the row specified by `rowKey`.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var item = $('#myGrid').grid('getItem', 'row1234');
```


---


#### getItems(rowKeys) ####
Get the items (row objects) for the rows specified by `rowKeys`.

  * **rowKeys**
> Type: [Array](http://api.jquery.com/Types/#Array)



> An array of rowKey strings

**Returns:** [Array](http://api.jquery.com/Types/#Array)

**Example:**

```
var items = $('#myGrid').grid('getItems', ['row1234', 'row5678']);
```


---


#### getOptions() ####
Get the grid options.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var options = $('#myGrid').grid('getOptions');
```


---


#### getOriginalValue(rowKey, columnName) ####
Get the original value of the cell at `rowKey`, `columnName`. This is the value that was in the cell when the grid was initialized unless [clearChangedItems](#clearChangedItems().md) or [clearItemChanges](#clearItemChanges(rowKey).md) has been called to clear change tracking data, in which case the value returned will be the value of the cell the last time [clearChangedItems](#clearChangedItems().md) or [clearItemChanges](#clearItemChanges(rowKey).md) was called.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



**Returns:** [or String Object or String](http://api.jquery.com/Types/#Object)

**Example:**

```
var originalValue = $('#myGrid').grid('getOriginalValue', '1234', 'projectName');
```


---


#### getRenderedRange() ####
Get a range object defining the currently rendered portion of the grid which includes the viewable portion of the grid (viewport) as well as a small buffer of content that is rendered just outside the bounds of the viewport.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

<ul>

<li><b>bottom</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The index of last row that is currently rendered.<br>
<br>
<li><b>leftPx</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The location of the leftmost pixel that is currently rendered.<br>
<br>
<li><b>rightPx</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The location of the rightmost pixel that is currently rendered.<br>
<br>
<li><b>top</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The index of top row that is currently rendered.<br>
<br>
</ul>

**Example:**

```
var renderedRange = $('#myGrid').grid('getRenderedRange');
```


---


#### getSelectedRows() ####
Gets an array containing the row indicies of the currently selected rows

**Returns:** [Array](http://api.jquery.com/Types/#Array)

**Example:**

```
var selectedRows = $('#myGrid').grid('getSelectedRows');
```


---


#### getSelectionModel() ####
Get the selection model used by the grid. The returned object is a Slick.SelectionModel following the interface defined <a href='https://github.com/mleibman/SlickGrid/wiki/Handling-selection'>here</a>.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

<ul>

<li><b>destroy</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>init</b></li>
Type: <a href='http://api.jquery.com/Types/#Function'>Function</a>

<li><b>onSelectedRangesChanged</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

</ul>

**Example:**

```
var selectionModel = $grid.grid('getSelectionModel');
```


---


#### getSlickGrid() ####
Get the underlying <a href='https://github.com/mleibman/SlickGrid'>SlickGrid</a> object backing the grid.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
var slickGrid = $grid.grid('getSlickGrid')
```


---


#### getSortColumns() ####
Get the list of columns that the grid is currently sorted by. The array returned contains column objects containing `columnId` and `sortAsc` attributes.

**Returns:** [Array](http://api.jquery.com/Types/#Array)

<ul>

<li><b>columnId</b></li>
Type: <a href='http://api.jquery.com/Types/#String'>String</a>

<li><b>sortAsc</b></li>
Type: <a href='http://api.jquery.com/Types/#Boolean'>Boolean</a>

</ul>

**Example:**

```
var sortColumns = $grid.grid('getSortColumns');
```


---


#### getTopPanel() ####
Get the top panel DOM element, which is a third header row that is displayed below the column headers and inline filter row. The top panel row is only diplayed if [showTopPanel](#showTopPanel.md) is set to true.

**Returns:** [Element](http://api.jquery.com/Types/#Element)

**Example:**

```
var topPanel = $grid.grid('getTopPanel');
```


---


#### getViewport() ####
Get a range object defining the portion of the grid that is currently in view.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

<ul>

<li><b>bottom</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The index of last row that is currently in view.<br>
<br>
<li><b>leftPx</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The location of the leftmost pixel that is currently in view.<br>
<br>
<li><b>rightPx</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The location of the rightmost pixel that is currently in view.<br>
<br>
<li><b>top</b></li>
Type: <a href='http://api.jquery.com/Types/#Number'>Number</a>

The index of top row that is currently in view.<br>
<br>
</ul>

**Example:**

```
var viewport = $('#myGrid').grid('viewport');
```


---


#### gotoCell(rowIndex, cellIndex, forceEdit) ####
Select the cell at `rowIndex` and `cellIndex`. If `forceEdit` is true, the cell will be put into edit mode.  Note that if the [autoEdit](#autoEdit.md) option is set to true (which is the default), the cell will go into edit mode even if false is passed for `forceEdit`.

  * **rowIndex**
> Type: [String](http://api.jquery.com/Types/#String)



  * **cellIndex**
> Type: [String](http://api.jquery.com/Types/#String)



  * **forceEdit**
> Type: [Boolean](http://api.jquery.com/Types/#Boolean)



**Example:**

```
var selectedCell = $('#myGrid').grid('gotoCell', 2, 3, true);
```


---


#### init() ####
Initialize the grid, this method is called internally by SlickGrid when the grid is created and subsequent calls are ignored. It is documented here only for completeness because it is exposed as part of SlickGrid's public API.


---


#### invalidate() ####
Invalidate all cached row data and re-render the entire grid. Call this method to render changes that have been made to grid data.

**Example:**

```
var $grid = $('#myGrid');
var data = $grid.grid('getData');
data[2].project = 'New Project Name';
$grid.grid('invalidate');
```


---


#### invalidateAllRows() ####
Invalidate all cached row data. Unlike [invalidate](#invalidate.md), this method does not re-render the grid so a separate call must be made to [render](#render.md) for changes in grid data to be reflected in the view.

**Example:**

```
var $grid = $('#myGrid');
var data = $grid.grid('getData');
data[2].project = 'New Project Name';
$grid.grid('invalidateAllRows');
$grid.grid('render'); // need this for the data update to be reflected in the view
```


---


#### invalidateRow(rowIndex) ####
Invalidate cached row data for the row at `rowIndex`. Unlike [invalidate](#invalidate.md), this method does not re-render the grid so a separate call must be made to [render](#render.md) for changes in grid data to be reflected in the view.

  * **rowIndex**
> Type: [String](http://api.jquery.com/Types/#String)



**Example:**

```
var $grid = $('#myGrid');
var data = $grid.grid('getData');
data[2].project = 'New Project Name';
$grid.grid('invalidateRow', 2);
$grid.grid('render'); // need this for the data update to be reflected in the view
```


---


#### invalidateRows(rowIndicies) ####
Invalidate cached row data for the rows specified by the `rowIndicies` parameter. Unlike [invalidate](#invalidate.md), this method does not re-render the grid so a separate call must be made to [render](#render.md) for changes in grid data to be reflected in the view.

  * **rowIndicies**
> Type: [Array](http://api.jquery.com/Types/#Array)



> An array of row indicies specifying which rows to invalidate (remove from cache).

**Example:**

```
var $grid = $('#myGrid');
var data = $grid.grid('getData');
data[2].project = 'New Project Name';
data[4].project = 'Another New Project Name';
$grid.grid('invalidateRows', [2, 4]);
$grid.grid('render'); // need this for the data update to be reflected in the view
```


---


#### isItemChanged(rowKey) ####
Check if the row at `rowKey` has been changed.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



**Returns:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Example:**

```
var isChanged = $('#myGrid').grid('isItemChanged', 'myrowkey');
```


---


#### markItemChanged(rowKey, columnName, originalValue) ####
Mark the cell at `rowKey` and `columnName` as "changed", which means the cell will have the ui-changed-cell class added to it and it will be returned by the [getChangedItems](#getChangedItems.md) and [getChanges](#getChanges.md) methods.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



  * **originalValue**
> Type: [String](http://api.jquery.com/Types/#String)



> The value to be stored as the "original" value of the cell, i.e. the value before the change occurred. This value is tracked and can be retrieved later by calling the [getChanges](#getChanges.md) method which will return an array of objects containing a rowKey and an array of changes made to each row by field.

**Example:**

```
$('#myGrid').grid('markItemChanged', 'myrowkey', 'firstName', 'Johnny');
```


---


#### navigateDown() ####
Move focus to the cell below the currently active cell. If the currently active cell is in the bottom row, focus doesn't change. If there is no active cell this method has no effect.

**Example:**

```
$('#myGrid').grid('navigateDown');
```


---


#### navigateLeft() ####
Move focus to the cell to the left of the currently active cell. If the currently active cell is in the leftmost column, focus doesn't change. If there is no active cell this method has no effect.

**Example:**

```
$('#myGrid').grid('navigateLeft');
```


---


#### navigateNext() ####
Move focus from the currently active cell to the "next" cell. This method traverses the grid from left to right, top to bottom, so "next" means focus is moved to the cell to the right of the currently active cell or if the currently active cell is in the rightmost column, focus is moved to the leftmost cell in the row below the currently active cell. If focus is on the rightmost cell of the bottom row or there is no active cell this method has no effect.

**Example:**

```
$('#myGrid').grid('navigateNext');
```


---


#### navigatePrev() ####
Move focus from the currently active cell to the "previous" cell. This method traverses the grid from right to left, bottom to top, so "previous" means focus is moved to the cell to the left of the currently active cell or if the currently active cell is in the leftmost column, focus is moved to the rightmost cell in the row above the currently active cell. If focus is on the leftmost cell of the top row or there is no active cell this method has no effect.

**Example:**

```
$('#myGrid').grid('navigatePrev');
```


---


#### navigateRight() ####
Move focus to the cell to the right of the currently active cell. If the currently active cell is in the righttmost column, focus doesn't change. If there is no active cell this method has no effect.

**Example:**

```
$('#myGrid').grid('navigateRight');
```


---


#### navigateUp() ####
Move focus to the cell above of the currently active cell. If the currently active cell is in the top row, focus doesn't change. If there is no active cell this method has no effect.

**Example:**

```
$('#myGrid').grid('navigateUp');
```


---


#### registerPlugin(plugin) ####
Register a plugin with the underlying SlickGrid. In this context, a plugin is an object that must implement `init` and `destroy` methods. Calling this method executes the plugin's `init` method passing it the SlickGrid object as a parameter. See SlickGrid's <a href='https://github.com/mleibman/SlickGrid/blob/master/plugins/slick.autotooltips.js'>auto tooltip plugin</a> for a simple example.

  * **plugin**
> Type: [Object](http://api.jquery.com/Types/#Object)



**Example:**

```
$('#myGrid').grid('registerPlugin', new Slick.AutoTooltips());
```


---


#### removeCellCssClass(rowKey, columnName, classToRemove) ####
Remove the CSS class specified by `classToRemove` from the cell at `rowKey`, `columnName`.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



  * **classToRemove**
> Type: [String](http://api.jquery.com/Types/#String)



**Example:**

```
$('#myGrid').grid('removeCellCssClass', 'row1234', 'First Name', 'highlight');
```


---


#### removeCellCssStyles(key) ####
Remove CSS styles from specific grid cells that were set using [setCellCssStyles(key, hash)](#setCellCssStyles(key,_hash).md). See the <a href='https://github.com/mleibman/SlickGrid/wiki/API-Reference'>SlickGrid Cell API</a> and [setCellCssStyles(key, hash)](#setCellCssStyles(key,_hash).md) for details.

  * **key**
> Type: [String](http://api.jquery.com/Types/#String)



> The name of the set of styles to remove, as specified when the styles were applied using [setCellCssStyles(key, hash)](#setCellCssStyles(key,_hash).md).

**Example:**

```
$('#myGrid').grid('removeCellCssStyles', 'highlight');
```


---


#### removeRowCssClass(rowKey, classToRemove) ####
Remove the CSS class or classes represented by `classToRemove` from the row at `rowKey`.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **classToRemove**
> Type: [String](http://api.jquery.com/Types/#String)



**Example:**

```
$('#myGrid').grid('removeRowCssClass', 'row1234', 'error warn');
```


---


#### render() ####
Render the grid. It is important to note that SlickGrid caches row data and this method doesn't invalidate the row cache, so if data that is currently in view has been updated since it was rendered, calling this method will not update the view. To re-render rows that are in view and assure they reflect the most current state of the data, call [invalidate](#invalidate().md).

**Example:**

```
$('#myGrid').grid('render');
```


---


#### replaceItem(rowKey, newItem) ####
Replace the item at `rowKey` with `newItem`. The difference between this method and [setItem](#setItem.md) is that this method allows the new item to have a different rowKey than the item being replaced. If you don't need to update the item's rowKey, using [setItem](#setItem.md) is more efficient.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **newItem**
> Type: [Object](http://api.jquery.com/Types/#Object)



**Example:**

```
$('#myGrid').grid('replaceItem', 'ItemId1234', myNewItemObject);
```


---


#### resetActiveCell() ####
Remove focus from the currently active cell. If no cell is currently selected this method has no effect.

**Example:**

```
$('#myGrid').grid('resetActiveCell');
```


---


#### resizeCanvas() ####
Resize the grid viewport based on the grid DOM element's current dimensions and re-render the grid. This can be useful if the DOM element the grid is attached to has changed dimensions because it will adjust scrolling correctly as well as update column widths if the [forceFitColumns](#forceFitColumns.md) option is set to true.

**Example:**

```
$('#myGrid').grid('resizeCanvas');
```


---


#### saveCurrentEdit() ####
If there is a cell in edit mode, save the current state of the cell and take the cell out of edit mode.

**Example:**

```
$('#myGrid').grid('saveCurrentEdit');
```


---


#### scrollCellIntoView(rowIndex, columnIndex) ####
Scroll the cell at `rowIndex`, `columnIndex` into view. Note that if column at `columnIndex` is already in view this method does nothing. Also, according to the [SlickGrid documentation](https://github.com/mleibman/SlickGrid/wiki/Slick.Grid#wiki-scrollCellIntoView) this method should scroll both horizontally and vertically but it appears there is a bug in SlickGrid because currently this method only scrolls the column into view and does not scroll vertically to bring the row into view. A workaround for that bug is to use the [scrollRowIntoView](#scrollRowIntoView(rowIndex,_doPaging).md) method to bring the desired row into view.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **columnIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)




---


#### scrollRowIntoView(rowIndex, doPaging) ####
Scroll the row at `rowIndex` into view.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **doPaging**
> Type: [Boolean](http://api.jquery.com/Types/#Boolean)



> Default value is false. If false the grid will scroll so the indicated row is at the top of the view. If true, the grid will scroll so the indicated row is at the bottom of the view.


---


#### scrollRowToTop(rowIndex) ####
Scroll the row at `rowIndex` into view, placing the row at the top of the view.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)




---


#### setActiveCell(rowIndex, columnIndex) ####
Set the active cell to the cell at `rowIndex`, `columnIndex`.

  * **rowIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)



  * **columnIndex**
> Type: [Integer](http://api.jquery.com/Types/#Integer)




---


#### setCellCssClass(rowKey, columnName, cssClass) ####
Set the css class of the cell at rowKey and columnName to cssClass, thus removing any class set on the cell previously by setCellCssClass, addCellCssClass or setCellCssClasses.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **columnName**
> Type: [String](http://api.jquery.com/Types/#String)



  * **cssClass**
> Type: [String](http://api.jquery.com/Types/#String)



> The list of CSS classes to apply to the specified cell.


---


#### setCellCssClasses(cssData) ####
Method to set CSS classes on several cells in one call. The cssData parameter is an array of objects containing, by row, a list of CSS classes to apply to columns.

  * **cssData**
> Type: [Array](http://api.jquery.com/Types/#Array)



> An array of objects identifying, by row and column, a list of classes to apply to specific cells.

**Example:**

```
var cssClasses = [
  {
    rowKey: 'row1234',
    cellClasses: {'column1': 'error', 'column3': 'warning anotherClass'}
  },
  {
    rowKey: 'row4567',
    cellClasses: {'column1': 'warning'}
  }
];

$('#myGrid').grid('setCellCssClasses', cssClasses);
```


---


#### setCellCssStyles(key, hash) ####
Sets CSS classes on specific grid cells by row index and column name. If you're looking for a way to apply CSS by row key and column name see [setCellCssClass](#setCellCssClass(rowKey,_columnName,_cssClass).md), [setCellCssClasses](#setCellCssClasses(cssData).md) and [addCellCssClass](#addCellCssClass(rowKey,_columnName,_cssClass).md). The `key` parameter is a name given to the set of styles so it can be referenced later to modify or remove it. The `hash` parameter is an object containing CSS classes to apply to cells by row index and column name. See the example below or <a href='https://github.com/mleibman/SlickGrid/wiki/API-Reference'>the SlickGrid API</a> for more details.

  * **key**
> Type: [String](http://api.jquery.com/Types/#String)



> A name given to the set of styles that can be referenced later to update the styles applied by calling setCellCssStyles again, or removed by calling [removeCellCssStyles](#removeCellCssStyles(key).md).

  * **hash**
> Type: [Object](http://api.jquery.com/Types/#Object)



> An object with row index attribute keys that point to objects containing column name keys and CSS class values identifying which classes to apply to each column in the row.

**Example:**

```
var styleHash = {
0: { // row at index 0
  project: 'error warn', // apply the error and warn classes to the 'project' column
  cost: 'error' // apply the 'error' class to the 'cost' column
},
4: {
  duration: 'warn',
  cost: 'error'
  }
};

$('#myGrid').grid('setCellCssStyles', 'highlight', styleHash);

```


---


#### setColumns(columns) ####
Set the columns array on the grid to the columns specified by `columns`.

  * **columns**
> Type: [Array](http://api.jquery.com/Types/#Array)



**Example:**

```
var columns = $('#myGrid').grid('getColumns');
columns[0].name = 'Changed Title';
$grid.grid('setColumns', columns);
```


---


#### setData(data) ####
Set the grid data to the values in the data parameter. When calling this method either render or invalidate must also be called to render the new data.

  * **data**
> Type: [Array](http://api.jquery.com/Types/#Array)



**Example:**

```
$('#myGrid').grid('setData', getData());
```


---


#### setHeaderRowVisibility(visible) ####
Show or hide the header row which is actually the second header row that displays the inline filters. This method updates the showHeaderRow option.

  * **visible**
> Type: [Boolean](http://api.jquery.com/Types/#Boolean)



**Example:**

```
$('#myGrid').grid('setHeaderRowVisibility', false);
```


---


#### setItem(rowKey, updatedItem) ####
Update the item (i.e. row) with the id of `rowKey` to `item`. The difference between this method and [replaceItem](#replaceItem.md) is that you cannot change the item's rowKey when calling setItem. If you don't need to change the item's rowKey using setItem is more efficient that replaceItem.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **updatedItem**
> Type: [Object](http://api.jquery.com/Types/#Object)



**Example:**

```
$('#myGrid').grid('setItem', 'ItemId1234', myNewItemObject);
```


---


#### setOptions() ####

---


#### setRowCssClass(rowKey, cssClass) ####
Set the css class of the row at rowKey to the list of classes specified by cssClass.

  * **rowKey**
> Type: [String](http://api.jquery.com/Types/#String)



  * **cssClass**
> Type: [String](http://api.jquery.com/Types/#String)



**Example:**

```
$('#myGrid').grid('setRowCssClass', 'Project 5', 'error');
```


---


#### setSelectedRows(rowIndicies) ####
Set the selected rows to the rows specified by rowIndicies.

  * **rowIndicies**
> Type: [Array](http://api.jquery.com/Types/#Array)



**Example:**

```
$('#myGrid').grid('setSelectedRows', [2, 5, 7]);
```


---


#### setSelectionModel(selectionModel) ####
Set the selection model for the grid. The selectionModel parameter can be either a string or an object identifying the type of selection used by the grid. To use the built-in RowSelectionModel or CellSelectionModel implementation, enter a string value of "row" or "cell". To use a custom selection model pass an object that implements the Slick.SelectionModel interface as defined <a href='https://github.com/mleibman/SlickGrid/wiki/Handling-selection'>here</a>.

  * **selectionModel**
> Type: [String](http://api.jquery.com/Types/#String) or [Object](http://api.jquery.com/Types/#Object)

**Example:**

```
$('#myGrid').grid('setSelectionModel', 'row');
```


---


#### setSortColumn(columnId, ascending) ####
This method updates the sort icon on the column identified by columnId to the up/down arrow icon based on the value of the ascending parameter. This method does not actually sort the data.

  * **columnId**
> Type: [String](http://api.jquery.com/Types/#String)



  * **ascending**
> Type: [Boolean](http://api.jquery.com/Types/#Boolean)



**Example:**

```
$('#myGrid').grid('setSortColumn', 'projectName', true);
```


---


#### setSortColumns(columns) ####
This method updates the sort icon on multiple columns at once by passing in an array of objects with columnId and sortAsc parameters. This method does not actually sort the data.

  * **columns**
> Type: [Array](http://api.jquery.com/Types/#Array)



> An array of objects with columnId and sortAsc attributes.

**Example:**

```
$('#myGrid').grid('setSortColumns', [{columnId: 'project', sortAsc: true}, {columnId: 'start', sortAsc: false}]);
```


---


#### setTopPanelVisibility(visible) ####
Show or hide the top panel, which is a third header row that is rendered below the column header and inline filter rows.

  * **visible**
> Type: [Boolean](http://api.jquery.com/Types/#Boolean)



> Set to true to show the top panel, false to hide it.

**Example:**

```
$('#myGrid').grid('setTopPanelVisibility', false);
```


---


#### unregisterPlugin() ####

---


#### updateCell() ####

---


#### updateColumnHeader() ####

---


#### updateRow() ####

---


#### updateRowCount() ####

---


## Events ##
#### disable(event, data) ####
Triggered when the grid is disabled.

<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### enable(event, data) ####
Triggered when the grid is enabled

<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onActiveCellChanged(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onActiveCellPositionChanged(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onAddNewRow(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onBeforeCellEditorDestroy(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onBeforeDestroy(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onBeforeEditCell(event, data) ####
Triggered before a cell is edited, return false to prevent editing.

<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Slick.EventData'>Slick.EventData</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

<ul>

<li><b>cell</b></li>
Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a>

The column index.<br>
<br>
<li><b>column</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The column object.<br>
<br>
<li><b>grid</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The slick grid object.<br>
<br>
<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The row object.<br>
<br>
<li><b>row</b></li>
Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a>

The row index.<br>
<br>
</ul>

</ul>

**Example:**
```
$('#myGrid').grid({
  data: myData,
  columns: cols,
  rowKey: 'id',
  editable: true,
  onBeforeEditCell: function(event, data) {
    // only allow edits when the value of the price column is greater than 50
    return data.item.price > 50;
  }
});
```

---


#### onBeforeHeaderCellDestroy(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onBeforeHeaderRowCellDestroy(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onCellChange(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onCellCssStylesChanged(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onClick(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onColumnsReordered(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onColumnsResized(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onContextMenu(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onDblClick(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onDrag(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onDragEnd(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onDragInit(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onDragStart(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onHeaderCellRendered(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onHeaderClick(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onHeaderContextMenu(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onHeaderMouseEnter(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onHeaderMouseLeave(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onHeaderRowCellRendered(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onKeyDown(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onMouseEnter(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onMouseLeave(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onScroll(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onSelectedRowsChanged(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onSort(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onValidationError(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---


#### onViewportChanged(event, data) ####
<ul>
<li><b>event</b></li>
Type: Slick.EventData<br>
<br>
<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>


---
