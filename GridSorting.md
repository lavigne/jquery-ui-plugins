# Sorting Grid Data #
Sorting grid data is accomplished by setting the [sort](GridColumnConfiguration#sort.md) option on the grid [column configuration](GridColumnConfiguration.md). When sorting is enabled, columns can be sorted by clicking on the column header. The [sort](GridColumnConfiguration#sort.md) option value can be set to a String, Boolean or Function identifying the type of sorting used by the column. Using a boolean value toggles the default text sorting on/off. By default all columns use a text sort so you must specify `sort: false` to turn off sorting. A string value can be used to specifiy one of the build-in sort functions 'numeric' or 'date'. Finally a custom function can be provided that will receive two row objects to compare and return a numeric result.

## Default Text Sort ##
Basic text sorting is turned on by default for all columns unless explicitly turned off by setting a [column's sort option](GridColumnConfiguration#sort.md) to `false`.

### Examples: ###
#### Turn Column Sorting Off ####
```
var cols = [
  {
    id : 'project',
    name : 'Project Name',
    field : 'project',	
    sort: false // project column name will not be sortable
  },
  // ... continue with other column definitions
]
```

#### Numeric Sorting ####
To specify that a column should be sorted numerically either set the [sort](GridColumnConfiguration#sort.md) or [dataType](GridColumnConfiguration#dataType.md) option to 'numeric' or 'integer'.

```
var cols = [
  {
    id : 'durationInDays',
    name : 'Duration In Days',
    field : 'durationInDays',	
    sort: 'numeric'
  },
  // ... continue with other column definitions
]
```

OR
```
var cols = [
  {
    id : 'durationInDays',
    name : 'Duration In Days',
    field : 'durationInDays',	
    dataType: 'numeric'
  },
  // ... continue with other column definitions
]
```

#### Date Sorting ####
To specify that a column should be sorted as a date set the [sort](GridColumnConfiguration#sort.md) option to 'date' and provide a date format string for the [dateFormat](GridColumnConfiguration#dateFormat.md) option. Date formats follow the <a href='http://code.google.com/p/datejs/wiki/FormatSpecifiers'>date.js library's formatting</a>.

```
var cols = [
  {
    id : 'start',
    name : 'Start',
    field : 'start',	
    sort: 'date',
    dateFormat: 'MM/dd/yyyy'
  },
  // ... continue with other column definitions
]
```

#### Custom Sorting ####
Custom sorting can be configured by providing a sort function as the value for a column's [sort](GridColumnConfiguration#sort.md) option. Sort functions receive two row objects to compare as parameters and must return either a positive number, zero or a negative number indicating if the first parameters was greater than, equal to or less than the second parameter respectively. The following example demonstrates a very simple (and non-realistic) example of a custom sort function that sorts an alpha-numeric column in numeric order.  The "Task" column is assumed to contain values with the word "task" followed by a number. The sort
function strips the string "task" from each row's task value and returns the result of a numeric comparison of the remaining value, thus sorting the "Task" column in numeric order.

```
var cols = [
  {
    id: 'task',
    name: 'Task',
    field: 'task',
    sort: function(row1, row2) {
      var val = Number(row1['task'].substring(4));
      var val2 = Number(row2['task'].substring(4));				
      return (val == val2 ? 0 : (val > val2 ? 1 : -1));	
    }
  },
  // ... continue with other column definitions
]
```