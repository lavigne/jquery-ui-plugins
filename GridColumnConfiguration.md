# Grid Column Configuration #
A large part of the grid's functionality is configured by defining attributes on the column objects provided to the grid at initialization. The following example demonstrates a fairly extensive column configuration using sorting, filtering and in-line editing. For a complete list of column attributes see the [Column Attribute API](#Column_Attributes.md).

# Example #
```
// a list of options for a column with a drop down list filter & editor
var methodologyOptions = [
  {'name': 'None', 'value': ''}, 
  {'name': 'Extreme Programming', 'value': 'extreme programming'}, 
  {'name': 'Scrum', 'value': 'scrum'},
  {'name': 'Waterfall', 'value': 'waterfall'}
];

// initialize columns array to provide to grid
var cols = [{
  id : 'project',
  name : 'Project Name',
  field : 'project',
  // custom sort function that parses the number and then sorts based on that
  sort: function(row1, row2) {
    var val = Number(row1['project'].substring(7));
    var val2 = Number(row2['project'].substring(7));
    return (val == val2 ? 0 : (val > val2 ? 1 : -1));	
  },			
  editor: 'text',
  filter: 'contains',
  toolTip: 'This is the Project Name column'
}, 
{
  id : 'duration',
  name : 'Duration',
  field : 'duration',
  filter: {				
    'impl': function(filterValue, itemValue) {
      return Number(itemValue.replace('Approximately', '').replace('days', '').trim()) > Number(filterValue);
    }				
  },
  editor: 'text'
}, 		
{
  id : 'cost',
  focusable: false,
  name : 'Cost',
  field : 'cost',
  filter: 'numeric',
  editor: 'numeric',
  formatter: 'currency'
}, 
{
  id : 'percentComplete',
  name : '% Complete',
  field : 'percentComplete',
  filter: 'numeric',
  editor: 'numeric',
  dataType: 'numeric' // used for sorting string data that's numeric
}, 
{
  id : 'start',
  name : 'Start',
  field : 'start',
  editor: 'date',
  sort: 'date',
  dateFormat: 'MM/dd/yyyy',
  filter: 'date'
}, 
{
  id : 'finish',
  name : 'Finish',
  field : 'finish',
  editor: 'date',
  sort: 'date',
  filter: 'date',
  dateFormat: 'MM/dd/yyyy'
}, 
{
  id: 'onSchedule',
  name: 'On Schedule',
  field: 'onSchedule',
  cssClass: 'centered',
  formatter: {'type': 'checkbox', 'checkedValue': 'sure', 'notCheckedValue': 'noway'},
  filter: [
    {'name': 'Yes', 'value': 'sure'},
    {'name': 'No', 'value': 'noway'}
  ]			
},
{
  id : 'onBudget',
  name : 'On Budget',
  field : 'onBudget',
  cssClass: 'centered',
  filter: ['true', 'false'], // simple string array filter example,
  editor: ['true', 'false']
},
{
  id : 'fullyFunded',
  name : 'Fully Funded',
  field : 'fullyFunded',
  formatter: formatCheckMark,	
  // object array filter example
  filter: [
    {'name': 'Yes', 'value': 'true'}, 
    {'name': 'No', 'value': 'false'}
  ],			
  cssClass: 'centered',
  selectable: false
},
{
  id : 'methodology',
  name : 'Methodology',
  field : 'methodology',			
  formatter: 'properCase',
  filter: methodologyOptions,
  cssClass: 'centered',
  editor: methodologyOptions
}];
```

## Column Attributes ##
  * [asyncPostRender](#asyncPostRender.md)
  * [cssClass](#cssClass.md)
  * [dataType](#dataType.md)
  * [dateFormat](#dateFormat.md)
  * [editor](#editor.md)
  * [editorOptions](#editorOptions.md)
  * [enableCellNavigation](#enableCellNavigation.md)
  * [field](#field.md)
  * [filter](#filter.md)
  * [filterDefault](#filterDefault.md)
  * [focusable](#focusable.md)
  * [formatter](#formatter.md)
  * [headerCssClass](#headerCssClass.md)
  * [id](#id.md)
  * [minWidth](#minWidth.md)
  * [maxWidth](#maxWidth.md)
  * [name](#name.md)
  * [rerenderOnResize](#rerenderOnResize.md)
  * [resizable](#resizable.md)
  * [selectable](#selectable.md)
  * [sort](#sort.md)
  * [toolTip](#toolTip.md)
  * [width](#width.md)

---

## Column Attributes API ##
#### asyncPostRender ####
A callback function that is fired after the cell DOM element has been rendered. This function receives the cell DOM element, rowNumber, data item and column object as parameters. The [enableAsyncPostRender](GridAPI#enableAsyncPostRender.md) grid option must be set to true for the asyncPostRender function to be called.

**Type:** [Function](http://api.jquery.com/Types/#Function)

**Default:** null

**Example**
```
$('#myGrid').grid({
  data: myData,
  // this must be true for asyncPostRender function to be called
  enableAsyncPostRender: true,
  asyncPostRenderDelay: 0,
  columns: [
    {
      id: 'onBudget',
      name: 'On Budget',
      field: 'onBudet',
      asyncPostRender: function(cellElement, rowNumber, item, column) {				
        if(!item.onBudget) {
          $(cellElement).addClass('warn');
        }
      }
    }
  ]
});
```

---

#### cssClass ####
CSS class applied to the column.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',		
      cssClass: 'myClass'
    }
  ]
});
```

---

#### dataType ####
A string used to identify a column's data type. Currently this attribute is only
used to distinguish between different types of numeric data for sorting and editing.
Valid values are "numeric" and "integer". This is useful for identifying string data that
you would like sorted numerically. For editable data, columns marked as "numeric" will only
allow numbers and decimal points to be entered and "integer" columns will only allow whole numbers.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id : 'percentComplete',
      name : '% Complete',
      field : 'percentComplete',
      filter: 'numeric',
      editor: 'numeric',
      dataType: 'numeric'
    }
  ]
});
```

---

#### dateFormat ####
A string identifying the date format for columns containing date data. The grid uses the
<a href='http://code.google.com/p/datejs/wiki/FormatSpecifiers'>date.js library's formatting</a>.
Please note that this attribute must be provided for sorting or filtering to work correctly on date columns.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'start',
      name: 'Start',
      field: 'start',
      editor: 'date',
      sort: 'date',
      dateFormat: 'MM/dd/yyyy',
      filter: 'date'
    }
  ]
});
```

---

#### editor ####
The editor for cell edits. This can be a String representing one of the [pre-defined editors](#Build-In_Editors.md), an Array
identifying a list of values for a drop-down editor, or a function defining a [custom editor](#Custom_Editors.md). For examples
of each type of editor see the [Editing](#Editing.md) section.

**Type:** [String](http://api.jquery.com/Types/#String) OR [Array](http://api.jquery.com/Types/#Array) OR [Function](http://api.jquery.com/Types/#Function)

**Default:** null

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',		
      editor: 'text'
    }
  ]
});
```

---

#### editorOptions ####
A callback function that will be called to retrieve the list of options
displayed for a drop down list cell editor. This is useful in cases where providing a static array of options via the editor option isn't sufficient because you need to display a different list of options based on some other criteria. The function receives the item and column of the item being edited as arguments. The function must return either an array of strings or an array of objects with "name" and "value" attributes. In the case of an object array, the name attribute is what is display in the drop down list and the value attribute is the option's value.

**Type:** [Function](http://api.jquery.com/Types/#Function)

**Default:** null

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'shipping',
      name: 'Shipping',
      field: 'shipping',		
      editor: 'list',
      editorOptions: function(item, column) {
    	var options = [];
    	
        // available shipping options are item specific
    	for(var option in item.shippingOptions) {
          options.push({'name': item.shippingOptions[option], 'value': option});
    	}
    	
    	return options;
      }
    }
  ]
});
```

---

#### field ####
Required, the property on the data object that is used to get the value displayed in the column cells.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title'
    }
  ]
});
```

---

#### filter ####
A string, array or function identifying a filter to be rendered in the column header. A string can be used to
specify one of the built-in filters, a list of strings or name/value pair objects can be used to specify a drop down
list filter or a function can be used to specify a custom filter. For examples of each type of filter see the
[Filtering](GridFiltering.md) section.

**Type:** [String](http://api.jquery.com/Types/#String), [Array](http://api.jquery.com/Types/#Array) OR [Function](http://api.jquery.com/Types/#Function)

**Default:** null

**Example**
This example demonstrates using an object array of name/value pairs to create a drop down filter filter.
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      filter: [
        {'name': 'Yes', 'value': 'true'},
        {'name': 'No', 'value': 'false'}
      ], 
    }
  ]
});
```

---

#### filterDefault ####
Default filter value selected when the grid is rendered.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'currentCustomer',
      name: 'Current Customer',
      field: 'currentCustomer',
      filter: ["true", "false"], // simple string array filter
      filterDefault: "true" // default to only showing current customers
    }
  ]
});
```

---

#### focusable ####
Boolean value indicating whether cells in this column can obtain focus. When the enableCellNavigation property
is set to true, cells in columns for which focusable is set to false will be skipped overwhen tabbing through columns.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name : 'Title',
      field : 'title',
	  focusable: false
    }
  ]
});
```

---

#### formatter ####
A string or function identifying what formatter should be used to render cell content for the column. A string can
be used to specify one of the built-in types of "checkbox", "currency" or "properCase". A custom formatter can be specified
by using a custom callback function that will receive rowNum, cellNum, value, columnDef and row parameters.

**Type:** [String](http://api.jquery.com/Types/#String) OR [Function](http://api.jquery.com/Types/#Function)

**Default:** true

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'onSchedule',
      name: 'On Schedule',
      field: 'onSchedule',
	  formatter: function (rowNum, cellNum, value, columnDef, row) {
	    return value ? '<img src="images/tick.png"/>' : '';
	  }
    }
  ]
});
```

---

#### headerCssClass ####
CSS class applied to the column header.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      headerCssClass: 'myHeaderClass'
    }
  ]
});
```

---

#### id ####
A unique identifier for the column within the grid. Note that id is often the
same as field, but having a different value for id can be useful for displaying
the same data differently in multiple columns, using different [formatters](#Formatting_Column_Data.md).

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title1',
      name: 'Title',
      field: 'title'
    },
	{
      id: 'title2',
      name: 'Title',
      field: 'title',
	  formatter: formatTitleFunction	  
    }
  ]
});
```

---

#### minWidth ####
Minimum width of the column.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** 30

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      minWidth: 50
    }
  ]
});
```

---

#### maxWidth ####
Maximum width of the column.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** null

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      maxWidth: 200
    }
  ]
});
```

---

#### name ####
Text displayed in the column header label.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
    }
  ]
});
```

---

#### rerenderOnResize ####
Boolean value indicating whether the column should be re-rendered when it's resized.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** false

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      rerenderOnResize: true
    }
  ]
});
```

---

#### resizable ####
Boolean value indicating whether the column can be resized.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      resizable: false
    }
  ]
});
```

---

#### selectable ####
Boolean value indicating whether the column can be selected.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      selectable: false
    }
  ]
});
```

---

#### sort ####
String, Boolean or Function identifying the type of sorting used by the column. Using a boolean value toggles
the default text sorting on/off. By default all columns use a text sort so you must specify sort: false to
turn off sorting. A string value can be used to specifiy one of the build-in sort functions 'numeric' or 'date'.
Finally a custom function can be provided that will receive two row objects to compare and return a numeric
result.

**Type:** [String](http://api.jquery.com/Types/#String), [Boolean](http://api.jquery.com/Types/#Boolean) OR [Function](http://api.jquery.com/Types/#Function)

**Default:** true

**Example**
This example demonstrates a very simple (and non-realistic) example of a custom sort that sorts an alpha-numeric column
in numeric order.  The "Task" column is assumed to contain values with the word "task" follwed by a number. The sort
function strips the string "task" from each row's task value and returns the result of a numeric comparison of the
remaining value, thus sorting the "Task" column in numeric order.
```
$('#myGrid').grid({
  columns: [
    {
      id: 'task',
      name: 'Task',
      field: 'task',
      sort: function(row1, row2) {
        var val = Number(row1['task'].substring(4));
        var val2 = Number(row2['task'].substring(4));				
        return (val == val2 ? 0 : (val > val2 ? 1 : -1));	
      },
    }
  ]
});
```

---

#### toolTip ####
A string to be displayed as a tool tip when the cursor hovers over the column header.

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** ''

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      toolTip: 'This is the title column'
    }
  ]
});
```

---

#### width ####
Width of the column.

**Type:** [Integer](http://api.jquery.com/Types/#Integer)

**Default:** null

**Example**
```
$('#myGrid').grid({
  columns: [
    {
      id: 'title',
      name: 'Title',
      field: 'title',
      width: 75
    }
  ]
});
```

---
