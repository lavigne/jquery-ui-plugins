# Filtering Grid Data #
The grid comes with built-in [text](#Built-in_text_filters.md) and [drop-down list](#Drop-down_list_filters.md) filters for filtering [text](#Built-in_text_filters.md), [numbers](#Numeric_filter.md) and [dates](#Date_filter.md). You can also easily implement a [custom filter](#Custom_filter.md) if one of the pre-defined types doesn't suit your needs. All of these filters have been tested with very large data sets (over 50,000 rows) and they perform extremely well. Filters are defined as part of the [column definition](GridColumnConfiguration.md) using the [filter](GridColumnConfiguration#filter.md) attribute. These filters render a filter field in the column header where the user enters data and rows are dynamically filtered out as the filter value changes. **It is important** to note that rows are filtered out based on column values (i.e. the row object's attribute values), not necessarily what is displayed in the column since the value displayed can be different than the actual row attribute value based on the formatter that is assigned to the column.

## Built-in text filters ##
There are four built-in text filters. These filters render a text field at the top of the column and filter out rows as the user types in the text field by matching column values with what is typed in the filter. The rules regarding what rows are filtered out depend on the type of filter declared on the column definition.  Valid filter types are "contains", "doesNotContain", "startsWith" and "endsWith". To use one of these filters simply assign the desired filter type string to the column's filter option.

### Examples: ###
#### Contains ####
```
var cols = [
  {
    id : 'project',
    name : 'Project Name',
    field : 'project',	
    filter: 'contains'
  },
  // ... continue with other column definitions
]
```

#### Starts With ####
```
var cols = [
  {
    id : 'project',
    name : 'Project Name',
    field : 'project',	
    filter: 'startsWith'
  },
  // ... continue with other column definitions
]
```

#### Ends With ####
```
var cols = [
  {
    id : 'project',
    name : 'Project Name',
    field : 'project',	
    filter: 'endsWith'
  },
  // ... continue with other column definitions
]
```

#### Does not contain ####
```
var cols = [
  {
    id : 'project',
    name : 'Project Name',
    field : 'project',	
    filter: 'doesNotContain'
  },
  // ... continue with other column definitions
]
```


---

## Drop-down list filters ##
### Simple string array drop-down list filter ###
The simplest way to create a drop-down list filter is to assign an array of strings to a column's filter option. This will render a drop down list filter at the top of the column that filters rows using the exact values displayed in the list. When a value is selected from the drop down list filter, if the column value for a row doesn't match the selected filter value, the row will be filtered out.

### Example: ###
```
// Basic drop-down filter created from an array, matches item property exactly with value displayed in filter list
var cols = [
  {
    id : 'onBudget',
    name : 'On Budget',
    field : 'onBudget',		
    filter: ['true', 'false']
  },
  // ... continue with other column definitions
]
```

### Object array drop-down list filter ###
Assigning an object array to a column's filter option allows you to create a drop-down list filter that decouples the values displayed in the filter list from the actual values used to filter the data.  For example, perhaps the values for a column contain boolean values of true and false but you'd like the drop-down filter list to display the values of "Yes" and "No", filtering out false values when "Yes" is selected and filtering out true values when "No" is selected. Each object in the filter array represents an option in the drop-down list filter and requires two properties, "name" and "value".  The "name" property is the display value for the option and the "value" property is the option's value.

### Example: ###
```
cols = [
  {
    id: 'onSchedule',
    name: 'On Schedule',
    field: 'onSchedule',
    formatter: {'type': 'checkbox', 'checkedValue': 'sure', 'notCheckedValue': 'noway'},
    filter: [
      {'name': 'Yes', 'value': 'sure'},
      {'name': 'No', 'value': 'noway'}
    ]	
  },
  // ... continue with other column definitions
]
```

### Drop-down list filter for columns backed by object attributes ###
If a column's data is an object attribute of the row (as opposed to a simple attribute value like a string), you can define a list filter using an object that identifies what attribute on the column's value object should be used for filtering. The filter definition requires `type`, `options` and `dataItemAttribute` properties. For example, if a grid has a "status" column that's represented by an object with the attributes "displayName" and "code", we can define a drop-down list filter that will filter rows using the code attribute of the status.

### Example: ###
```
// in the following example each row's status attribute is an object 
// containing code and displayName attributes, we create a drop down
// list filter that will filter on the code attribute.
cols = [
  {
    id : 'status',
    name : 'Status',
    field : 'status',			
    formatter: function (rowNum, cellNum, value, columnDef, row) {
      return value.displayName;
    },
    filter: {
      'type': 'list', 
      'options': [
        {'name': 'Active', 'value': 'ACTIVE'},
        {'name': 'Inactive', 'value': 'INACTIVE'}
      ],
      'dataItemAttribute': 'code'
    }
  },
  // ... continue with other column definitions
]
```


---


## Numeric filter ##
Setting a column's filter option to the string "numeric" assigns a numeric filter to the column. This will render a text field filter at the top of the column as well as a filter icon. The text field will filter on exact numeric matches. Clicking the filter icon brings up a numeric filter dialog that allows the user to filter by entering simple numeric expressions such as "greater than 50 and less than 100". After entering a numeric filter to apply in the dialog a "remove filter" icon is rendered next to the filter that will clear the filter.

### Example: ###
```
cols = [
  {
    id : 'percentComplete',
    name : '% Complete',
    field : 'percentComplete',
    filter: 'numeric'
  },
  // ... continue with other column definitions
]
```


---


## Date filter ##
Setting a column's filter option to the string "date" assigns a date filter to the column. This will render a drop-down list filter at the top of the column as well as a filter icon. The drop-down list filter allows the user to quickly select from a list of common date values such as "today", "tomorrow", "last month", etc. Clicking the filter icon brings up a date filter dialog that allows the user to do more elaborate date filtering by entering specific dates or date ranges. After entering a date filter to apply in the dialog a "remove filter" icon is rendered next to the filter that will clear the filter. **IMPORTANT**: To use date filtering, editing or sorting you must set the dateFormat option on the column. Date formats are specified using the formats defined by the date.js library <a href='http://code.google.com/p/datejs/wiki/FormatSpecifiers'>here</a>.

### Example: ###
```
cols = [
  {
    id : 'start',
    name : 'Start',
    field : 'start',
    sort: 'date',
    dateFormat: 'MM/dd/yyyy',
    filter: 'date'
  },
  // ... continue with other column definitions
]
```


---


## Custom filter ##
To create a custom filter on a column, assign an object to the column's filter option that has an "impl" attribute containing a callback function to do the filtering.  This will render a text field at the top of the column where the user can type a filter value. The filter impl function is called to filter rows  as the user types in the text field. The filter impl function receives two parameters, the filter value and the column value for the row it is currently evaluating. The filter impl function should return true if the row being evaluated should be displayed and false if it should be filtered out.

### Example: ###
```
cols = [
  {
    id : 'duration',
    name : 'Duration',
    field : 'duration',
    filter: {				
      impl: function(filterValue, itemValue) {
        return Number(itemValue.replace('Approximately', '').replace('days', '').trim()) > Number(filterValue);
      }	
    }
  },
  // ... continue with other column definitions
]
```