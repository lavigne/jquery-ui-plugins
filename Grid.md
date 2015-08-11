# Summary #
A jQuery UI grid widget that wraps the extremely scalable [SlickGrid](https://github.com/mleibman/SlickGrid/wiki) and
exposes options, methods and events to make accomplishing common tasks such as sorting, [filtering](GridFiltering.md) and [in-line editing](GridEditing.md) simple
using familiar jQuery UI syntax.

# Dependencies #
Various features of this plugin rely on other libraries in order to work. For convenience, the download includes a jquery-ui-plugins.min.js file that bundles all of the plugins and their dependencies together. However, using this file may result in namespace collisions if your project is already using a different version of one of the included dependencies. In that case, you'll have to resolve the issue of which dependencies/versions to include, keeping in mind that using a version other than the one included with the download may cause issues. The following is a list of libraries used by the grid, including the version used in testing.

  * [jquery-1.7.1.js](http://code.jquery.com/jquery-1.7.1.js)
  * [jquery-ui.js-1.8.16](http://code.jquery.com/ui/1.8.16/jquery-ui.js)
  * jquery.event.drag-2.0.js - Used in column re-ordering.
  * jquery.event.drop-2.0.js - Used in column re-ordering.
  * [date.js](http://code.google.com/p/datejs/downloads/list) - Used for sorting, filtering and editing on date columns.
  * slick.core.js - Version 2.1 core SlickGrid classes.
  * slick.grid.js - Version 2.1 SlickGrid classes.
  * slick.dataview.js - Version 2.1 SlickGrid data view classes.
  * slick.rowselectionmodel.js - Version 2.1 SlickGrid row selection model implementation, used in row selection.
  * slick.cellselectionmodel.js - Version 2.1 SlickGrid cell selection model implementation, used in cell selection.
  * slick.cellrangeselector.js - Version 2.1 SlickGrid cell selection model implementation, used in cell selection.
  * slick.cellrangedecorator.js - Version 2.1 SlickGrid cell selection model implementation, used in cell selection.
  * jquery-ui-plugins-textinput.js - Used in filtering and editing of numeric fields.

# Example #
The following is a fairly extensive example that illustrates how to use various features of the grid. For a complete list of options, methods and events provided see the **[Grid API documentation](GridAPI.md)**.
<img src='https://jquery-ui-plugins.googlecode.com/svn/trunk/examples/images/grid.png'>

<pre><code>&lt;!DOCTYPE HTML&gt;<br>
&lt;html&gt;<br>
&lt;head&gt;<br>
&lt;meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"&gt;<br>
&lt;title&gt;Basic grid&lt;/title&gt;	<br>
  &lt;link rel="stylesheet" href="../css/slick-grid.css" type="text/css" /&gt;<br>
  &lt;link rel="stylesheet" href="../css/jquery-ui-plugins-grid.css" type="text/css" /&gt;	<br>
  &lt;link rel="stylesheet" href="http://code.jquery.com/ui/1.8.16/themes/redmond/jquery-ui.css"&gt;<br>
<br>
  &lt;style type="text/css"&gt;		<br>
    .ui-changed-cell {<br>
      background-color: #fccf70;<br>
    }					<br>
    .error {<br>
      background: #ff0000 !important;<br>
    }	<br>
    .centered {<br>
      text-align: center;<br>
    }<br>
  &lt;/style&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
  &lt;div id="myGrid" style="width: 575px; height: 500px;"&gt;&lt;/div&gt;	<br>
<br>
  &lt;script src="http://code.jquery.com/jquery-1.7.1.js"&gt;&lt;/script&gt;<br>
  &lt;script src="http://code.jquery.com/ui/1.8.16/jquery-ui.js"&gt;&lt;/script&gt;	<br>
  &lt;script src="../js/jquery-ui-plugins-0.0.12.js"&gt;&lt;/script&gt;	<br>
  &lt;script&gt;				  <br>
  		<br>
  var cols = [{<br>
    id : 'project',<br>
    name : 'Project Name',<br>
    field : 'project',<br>
    // custom sort function that parses the number and then sorts based on that<br>
    sort: function(row1, row2) {<br>
      var val = Number(row1['project'].substring(7));<br>
      var val2 = Number(row2['project'].substring(7));<br>
      return (val == val2 ? 0 : (val &gt; val2 ? 1 : -1));	<br>
    },			<br>
    editor: 'text',<br>
    filter: 'contains',<br>
    toolTip: 'This is the Project Name column'<br>
  }, 		<br>
  {<br>
    id : 'cost',<br>
    focusable: false,<br>
    name : 'Cost',<br>
    field : 'cost',<br>
    filter: 'numeric',<br>
    editor: 'numeric',<br>
    formatter: 'currency'<br>
  }, <br>
  {<br>
    id : 'percentComplete',<br>
    name : '% Complete',<br>
    field : 'percentComplete',<br>
    filter: 'numeric',<br>
    editor: 'numeric',<br>
    dataType: 'numeric'<br>
  }, <br>
  {<br>
    id : 'start',<br>
    name : 'Start',<br>
    field : 'start',<br>
    editor: 'date',<br>
    sort: 'date',<br>
    dateFormat: 'MM/dd/yyyy',<br>
    filter: 'date'<br>
  }, <br>
  {<br>
    id: 'onSchedule',<br>
    name: 'On Time',<br>
    field: 'onSchedule',<br>
    cssClass: 'centered',<br>
    formatter: {'type': 'checkbox', 'checkedValue': 'sure', 'notCheckedValue': 'noway'},<br>
    filter: [<br>
      {'name': 'Yes', 'value': 'sure'},<br>
      {'name': 'No', 'value': 'noway'}<br>
    ]<br>
  },<br>
  {<br>
    id : 'onBudget',<br>
    name : 'On Budget',<br>
    field : 'onBudget',<br>
    cssClass: 'centered',<br>
    filter: ['true', 'false'], // simple string array filter example,<br>
    editor: ['true', 'false']<br>
  },<br>
  {<br>
    id : 'fullyFunded',<br>
    name : 'Fully Funded',<br>
    field : 'fullyFunded',<br>
    formatter: formatCheckMark,	<br>
    // object array filter example<br>
    filter: [<br>
      {'name': 'Yes', 'value': 'true'}, <br>
      {'name': 'No', 'value': 'false'}<br>
    ],			<br>
    cssClass: 'centered',<br>
    selectable: false<br>
  }];		<br>
<br>
  // create some data to load the grid<br>
  $(function() {<br>
    var myData = [];			<br>
    var year = 10;			<br>
			<br>
    for ( var i = 0; i &lt; 5000; i++) {<br>
      var random = Math.random();<br>
      var day = (Math.round(Math.random() * 29) + '').padLeft(2, '0');<br>
        myData[i] = {<br>
          project : 'Project ' + i,          <br>
          cost: ((random + 1) * 3000000)/4,<br>
          percentComplete : Math.round(random * 100) + '',<br>
          start : '11/08/20' + year,<br>
          onBudget : (i % 5 != 0),<br>
          fullyFunded: (i % 7 == 0),<br>
          onSchedule: (i % 2 == 0 ? 'noway' : 'sure')<br>
        };<br>
			<br>
        year = year == 99 ? 10 : ++year;<br>
    }<br>
<br>
    var $grid = $('#myGrid').grid({<br>
      'data': myData,<br>
      'columns': cols,<br>
      'rowKey': 'project',<br>
      'forceFitColumns': true,<br>
      'editable': true,<br>
      'enableColumnReorder': true<br>
    });						<br>
  });<br>
  	<br>
  // example of a custom format function <br>
  function formatCheckMark(rowNum, cellNum, value, columnDef, row) {<br>
    var image = '';<br>
		<br>
    if(value) {<br>
      image = '&lt;img src="images/tick.png"/&gt;';<br>
    }<br>
		<br>
    return image;<br>
  }<br>
&lt;/script&gt;<br>
&lt;/body&gt;<br>
&lt;/html&gt;<br>
</code></pre>

For a complete list of options, methods and events provided see the <b><a href='GridAPI.md'>Grid API documentation</a></b>