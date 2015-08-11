# Summary #
A JQuery UI based groupbox widget for moving items between two lists. Items can be selected by clicking on them, dragging the mouse to select multiple items or using Shift + Click to select a range of items. In addition to using the arrow buttons to move items from one list to the other, users can also double click on an item to quickly move it.

# Example #
As you can see from this screenshot, the widget is styled using jQuery UI themes. In this case the [Aristo](https://github.com/taitems/Aristo-jQuery-UI-Theme) theme was used.

<img src='https://jquery-ui-plugins.googlecode.com/svn/trunk/examples/images/groupbox.png'>

<pre><code>&lt;!doctype html&gt;<br>
&lt;html lang="en"&gt;<br>
&lt;head&gt;<br>
  &lt;meta charset="utf-8"&gt;<br>
  &lt;title&gt;Groupbox Example&lt;/title&gt;<br>
  &lt;link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/redmond/jquery-ui.css"&gt;<br>
  &lt;link rel="stylesheet" href="css/jquery-ui-plugins.min.css" type="text/css"/&gt;<br>
  &lt;script src="http://code.jquery.com/jquery-1.8.2.js"&gt;&lt;/script&gt;<br>
  &lt;script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"&gt;&lt;/script&gt;<br>
  &lt;script type="text/javascript" src="js/jquery-ui-plugins.min.js"&gt;&lt;/script&gt;	<br>
&lt;/head&gt;<br>
&lt;body&gt;		<br>
  &lt;div id="myGroupbox"&gt;&lt;/div&gt;<br>
  &lt;script type="text/javascript"&gt;		<br>
		<br>
    $(function() {				<br>
      var animals = [{"id": 1, "name": "Ape"},<br>
	{"id": 2, "name": "Bear"},			<br>
	{"id": 5, "name": "Elephant"},<br>
	{"id": 7, "name": "Gorilla"},<br>
	{"id": 9, "name": "Koala"},<br>
	{"id": 10, "name": "Llama"},<br>
	{"id": 11, "name": "Mouse"},<br>
	{"id": 12, "name": "Ostrich"},<br>
	{"id": 13, "name": "Panda"},<br>
	{"id": 14, "name": "Rhinoceros"},<br>
	{"id": 15, "name": "Tiger"}];<br>
			<br>
      var pets = [{"id": 3, "name": "Cat"}, <br>
	{"id": 4, "name": "Dog"}, <br>
	{"id": 6, "name": "Ferret"}, <br>
	{"id": 8, "name": "Hamster"}];									<br>
			<br>
      $('#myGroupbox').groupbox({				<br>
	"labelList1": "Animals",<br>
	"itemsList1": animals,<br>
        "labelList2": "Good Pets",<br>
	"itemsList2": pets<br>
      });							<br>
    });<br>
  &lt;/script&gt;<br>
&lt;/body&gt;<br>
&lt;/html&gt;<br>
<br>
</code></pre>

<h1>Groupbox API</h1>

<table cellspacing='10px'>
<tr>
<blockquote><td><h3><a href='#Options.md'>Options</a></h3></td>
<td><h3><a href='#Methods.md'>Methods</a></h3></td>
<td><h3><a href='#Events.md'>Events</a></h3></td>
</tr>
<tr>
<td><a href='#buttonSize.md'>buttonSize</a></td>
<td><a href='#addItem(listNumber,_item).md'>addItem</a></td>
<td><a href='#afterAdd(event,_data).md'>afterAdd</a></td>
</tr>
<tr>
<td><a href='#buttonStyle.md'>buttonStyle</a></td>
<td><a href='#destroy().md'>destroy</a></td>
<td><a href='#afterMove(event,_data).md'>afterMove</a></td>
</tr>
<tr>
<td><a href='#cssClassList1.md'>cssClassList1</a></td>
<td><a href='#disable().md'>disable</a></td>
<td><a href='#afterRemove(event,_data).md'>afterRemove</a></td>
</tr>
<tr>
<td><a href='#cssClassList2.md'>cssClassList2</a></td>
<td><a href='#enable().md'>enable</a></td>
<td><a href='#beforeAdd(event,_data).md'>beforeAdd</a></td>
</tr>
<tr>
<td><a href='#height.md'>height</a></td>
<td><a href='#getItems(listNumber).md'>getItems</a></td>
<td><a href='#beforeMove(event,_data).md'>beforeMove</a></td>
</tr>
<tr>
<td><a href='#idAttr.md'>idAttr</a></td>
<td><a href='#getSelected(listNumber).md'>getSelected</a></td>
<td><a href='#beforeRemove(event,_data).md'>beforeRemove</a></td>
</tr>
<tr>
<td><a href='#itemsList1.md'>itemsList1</a></td>
<td><a href='#option().md'>option</a></td>
<td><a href='#create(event,_data).md'>create</a></td>
</tr>
<tr>
<td><a href='#itemsList2.md'>itemsList2</a></td>
<td><a href='#removeItem(listNumber,_item).md'>removeItem</a></td>
<td><a href='#disable(event,_data).md'>disable</a></td>
</tr>
<tr>
<td><a href='#itemSize.md'>itemSize</a></td>
<td><a href='#setItems(listNumber,_items).md'>setItems</a></td>
<td><a href='#enable(event,_data).md'>enable</a></td>
</tr>
<tr>
<td><a href='#itemStyle.md'>itemStyle</a></td>
<td><a href='#setSelected(listNumber,_items,_clearSelections).md'>setSelected</a></td>
<td></td>
</tr>
<tr>
<td><a href='#labelAttr.md'>labelAttr</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href='#labelList1.md'>labelList1</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href='#labelList2.md'>labelList2</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href='#selectable.md'>selectable</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href='#width.md'>width</a></td>
<td></td>
<td></td>
</tr>
</table></blockquote>

<hr />

<h2>Options</h2>
<h4>buttonSize</h4>
The size of the buttons used to move items from one list to the other on the groupbox control. Valid values are xsmall, small, medium, large and xlarge. This is a convenience option that makes setting the button size simple, a custom size can be achieved by setting CSS padding via the <a href='#buttonStyle.md'>buttonStyle</a> option.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "medium"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'buttonSize': 'large',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myGroupbox').groupbox('option', 'buttonSize', 'xsmall');<br>
</code></pre>
<hr />

<h4>buttonStyle</h4>
CSS style to be applied to the buttons used to move items from one list to the other on the groupbox control.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Default:</b> {}<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'buttonStyle': {"border": "2px solid green", "font-weight": "bold"},<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myGroupbox').groupbox('option', 'buttonStyle',  {"border": "2px solid green", "font-weight": "bold"});<br>
</code></pre>
<hr />

<h4>cssClassList1</h4>
List of CSS classes to be applied to list #1.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'cssClassList1': 'myCustomCssClass anotherClass',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'cssClassList1',  'myCustomCssClass anotherClass');<br>
</code></pre>
<hr />

<h4>cssClassList2</h4>
List of CSS classes to be applied to list #2.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'cssClassList2': 'myCustomCssClass anotherClass',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'cssClassList2',  'myCustomCssClass anotherClass');<br>
</code></pre>
<hr />
<h4>height</h4>
The height of each list in the groupbox control.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "500"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'height': '200',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'height',  '200');<br>
</code></pre>
<hr />

<h4>idAttr</h4>
Name of the attribute on the list item objects that will be used as a unique id for each item. This value of this attribute must be unique for each list item across both lists.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "id"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'idAttr': 'key',<br>
  'itemsList1': [{"key": 1, "name": "Cat"}, {"key": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"key": 3, "name": "Lion"}, {"key": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'idAttr',  'key');<br>
</code></pre>
<hr />

<h4>itemsList1</h4>
List of items to populate list #1 with.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Array'>Array</a>

<b>Default:</b> <a href='.md'>.md</a>

<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'itemsList1',  [{"id": 3, "name": "Moose"}, {"id": 4, "name": "Elk"}]);<br>
</code></pre>

OR via setItems method after initialization:<br>
<pre><code>$('#myGroupbox').groupbox('setItems', 1,  [{"id": 3, "name": "Moose"}, {"id": 4, "name": "Elk"}]);<br>
</code></pre>
<hr />

<h4>itemsList2</h4>
List of items to populate list #2 with.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Array'>Array</a>

<b>Default:</b> <a href='.md'>.md</a>

<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'itemsList2',  [{"id": 3, "name": "Moose"}, {"id": 4, "name": "Elk"}]);<br>
</code></pre>

OR via setItems method after initialization:<br>
<pre><code>$('#myGroupbox').groupbox('setItems', 2,  [{"id": 3, "name": "Moose"}, {"id": 4, "name": "Elk"}]);<br>
</code></pre>
<hr />

<h4>itemSize</h4>
The size of the list items in the groupbox control. Valid values are xsmall, small, medium, large and xlarge. This is a convenience option that makes setting the item size simple, a custom size can be achieved by setting CSS padding via the <a href='#itemStyle.md'>itemStyle</a> option.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "medium"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'itemSize': 'large',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'itemSize',  'large');<br>
</code></pre>
<hr />

<h4>itemStyle</h4>
CSS style to be applied to the list item elements.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Default:</b> {}<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'itemStyle': {"border": "2px solid blue", "font-weight": "bold"},<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'itemStyle',   {"border": "2px solid blue", "font-weight": "bold"});<br>
</code></pre>
<hr />

<h4>labelAttr</h4>
Name of the attribute on the list item objects containing the value that will be displayed for each item.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "name"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'labelAttr': 'label',<br>
  'itemsList1': [{"id": 1, "label": "Cat"}, {"id": 2, "label": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "label": "Lion"}, {"id": 4, "label": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'labelAttr',  'label');<br>
</code></pre>
<hr />

<h4>labelList1</h4>
Label displayed as the heading for list #1.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "From"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'labelList1': 'Animals',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'labelList1',  'Animals');<br>
</code></pre>
<hr />

<h4>labelList2</h4>
Label displayed as the heading for list #2.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "To"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'labelList2': 'Good Pets',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'labelList2',  'Good Pets');<br>
</code></pre>
<hr />

<h4>selectable</h4>
Boolean value indicating if the list items should be made selectable, meaning the user can drag with their mouse to select multiple items.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Boolean'>Boolean</a>

<b>Default:</b> true<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'selectable': false,<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'selectable',  false);<br>
</code></pre>
<hr />

<h4>width</h4>
The width of each list in the groupbox control.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "300"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myGroupbox').groupbox({<br>
  'width': '100',<br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],               <br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}]<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<br>
<pre><code>$('#myGroupbox').groupbox('option', 'width',  100);<br>
</code></pre>
<hr />

<h2>Methods</h2>
<h4>addItem(listNumber, item)</h4>
Add an item to the specified list. One thing to note is that it is assumed that all items have unique ids. If an item is added to a list and an item with that id already exists, the new item will be added and both items will reference the data of the new item.<br>
<br>
<ul><li><b>listNumber</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>Number indicating which list to add the item to (1 or 2).</blockquote>

<ul><li><b>item</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
The item to be added.</blockquote>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('addItem', 1, {"id": "1234", "name": "New Item"});<br>
</code></pre>
<hr />

<h4>destroy()</h4>
Removes the groupbox functionality completely. This will return the element back to its pre-init state.<br>
<br>
<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('destroy');<br>
</code></pre>
<hr />

<h4>disable()</h4>
Disables the groupbox.<br>
<br>
<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('disable');<br>
</code></pre>
<hr />

<h4>enable()</h4>
Enables the groupbox.<br>
<br>
<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('enable');<br>
</code></pre>
<hr />

<h4>getItems(listNumber)</h4>
Get all of the items currently contained in the list specified by <code>listNumber</code>.<br>
<br>
<ul><li><b>listNumber</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>Number indicating from which list the items should be retrieved (1 or 2).</blockquote>

<b>Returns:</b> <a href='http://api.jquery.com/Types/#Array'>Array</a>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('getItems', 1);<br>
</code></pre>
<hr />
<h4>getSelected(listNumber)</h4>
Get the list of items currently selected in the list specified by listNumber.<br>
<br>
<ul><li><b>listNumber</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>Number indicating from which list the items should be retrieved (1 or 2).</blockquote>

<b>Returns:</b> <a href='http://api.jquery.com/Types/#Array'>Array</a>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('getSelected', 1);<br>
</code></pre>
<hr />
<h4>option()</h4>
Gets an object containing key/value pairs representing the groupbox's current options hash.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Example:</b>
<pre><code>var options = $('#myGroupbox').groupbox('option');<br>
</code></pre>
<hr />
<h4>option(optionName)</h4>
Gets the value currently associated with the option specified by optionName.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Example:</b>
<pre><code>var groupboxHeight = $('#myGroupbox').groupbox('option', 'height');<br>
</code></pre>
<hr />
<h4>option(optionName, value)</h4>
Sets the value of the option specified by optionName.<br>
<br>
<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('option', 'height', 400);<br>
</code></pre>
<hr />
<h4>removeItem(listNumber, item)</h4>
Remove an item from the specified list.<br>
<br>
<ul><li><b>listNumber</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>Number indicating from which list the item should be removed (1 or 2).</blockquote>

<ul><li><b>item</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#String'>String</a> OR <a href='http://api.jquery.com/Types/#Object'>Object</a></blockquote>

<blockquote>The item to remove, this parameter can be either an item ID or an item object.</blockquote>

<b>Example:</b>
<pre><code>// remove by item id<br>
$('#myGroupbox').groupbox('removeItem', '456');<br>
<br>
// remove item object<br>
$('#myGroupbox').groupbox('removeItem', {"id": "456", "name": "Wombat"});<br>
</code></pre>
<hr />
<h4>setItems(listNumber, items)</h4>
Replace the current contents of the list specified by <code>listNumber</code> with the list of objects in the <code>items</code> array.<br>
<br>
<ul><li><b>listNumber</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>Number indicating for which list the items are being set(1 or 2).</blockquote>

<ul><li><b>items</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Array'>Array</a></blockquote>

<blockquote>The list of item objects.</blockquote>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox('setItems', 2,  [{"id": 3, "name": "Moose"}, {"id": 4, "name": "Elk"}]);<br>
</code></pre>
<hr />
<h4>setSelected(listNumber, items, clearSelections)</h4>
Set the selected <code>items</code> in <code>listNumber</code>. This method can take either an array of item ids or an array of items. The clearSelections parameter controls whether or not previously selected items are un-selected.<br>
<br>
<ul><li><b>listNumber</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>Number indicating which list contains the items to select(1 or 2).</blockquote>

<ul><li><b>items</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Array'>Array</a></blockquote>

<blockquote>The list items to be selected. This list can be either a list of IDs or a list of objects.</blockquote>

<ul><li><b>clearSelections</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Boolean'>Boolean</a></blockquote>

<blockquote>Boolean parameter indicating whether or not previously selected items are un-selected.</blockquote>

<b>Example:</b>
<pre><code>// select items by passing a list of ids<br>
$('#myGroupbox').groupbox('setSelected', 1,  ["3", "4"], true);<br>
<br>
// select items by passing a list of objects<br>
$('#myGroupbox').groupbox('setSelected', 1,  [{"id": 3, "name": "Moose"}, {"id": 4, "name": "Elk"}], true);<br>
</code></pre>
<hr />

<h2>Events</h2>
<h4>afterAdd(event, data)</h4>
Triggered after an item has been added to a list.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The item that was added.<br>
<br>
<li><b>list</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item was added to.<br>
<br>
<li><b>listElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item was added to.<br>
<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'afterAdd': function(event, data) {<br>
    // code to execute after an items is added to a list<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>afterMove(event, data)</h4>
Triggered after an item has been moved from one list to the other.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The item that was moved.<br>
<br>
<li><b>fromList</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item was moved from.<br>
<br>
<li><b>toList</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item was moved to.<br>
<br>
<li><b>fromListElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item was moved from.<br>
<br>
<li><b>toListElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item was moved to.<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'afterMove': function(event, data) {<br>
    // code to execute after an item is moved from one list to the other<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>afterRemove(event, data)</h4>
Triggered after an item has been removed from a list.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The item that was removed.<br>
<br>
<li><b>list</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item was removed from.<br>
<br>
<li><b>listElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item was removed from.<br>
<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'afterRemove': function(event, data) {<br>
    // code to execute after an item is removed from a list<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>beforeAdd(event, data)</h4>
Triggered before an item is added to a list.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The item that is being added.<br>
<br>
<li><b>list</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item is being added to.<br>
<br>
<li><b>listElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item is being added to.<br>
<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'beforeAdd': function(event, data) {<br>
    // code to execute before an item is added to a list<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>beforeMove(event, data)</h4>
Triggered before an item is moved from one list to the other.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The item that is being moved.<br>
<br>
<li><b>fromList</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item is being moved from.<br>
<br>
<li><b>toList</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item is being moved to.<br>
<br>
<li><b>fromListElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item is being moved from.<br>
<br>
<li><b>toListElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item is being moved to.<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'beforeMove': function(event, data) {<br>
    // code to execute before an item is moved from one list to the other<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>beforeRemove(event, data)</h4>
Triggered before an item is removed from a list.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The item that is being removed.<br>
<br>
<li><b>list</b></li>
Type: <a href='http://api.jquery.com/Types/#Array'>Array</a>

The list of objects the item is being removed from.<br>
<br>
<li><b>listElement</b></li>
Type: <a href='http://api.jquery.com/Types/#jQuery'>jQuery</a>

The jQuery wrapped UL element that the item is being removed from.<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'beforeRemove': function(event, data) {<br>
    // code to execute before an item is removed from a list<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>create(event, data)</h4>
Triggered when the groupbox is created.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'create': function(event, data) {<br>
    // code to execute when the groupbox is created<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>disable(event, data)</h4>
Triggered when the groupbox is disabled.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'disable': function(event, data) {<br>
    // code to execute when the groupbox is disabled<br>
  }<br>
});<br>
</code></pre>
<hr />

<h4>enable(event, data)</h4>
Triggered when the groupbox is enabled.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
</ul>

<b>Example:</b>
<pre><code>$('#myGroupbox').groupbox({  <br>
  'itemsList1': [{"id": 1, "name": "Cat"}, {"id": 2, "name": "Dog"}],<br>
  'itemsList2': [{"id": 3, "name": "Lion"}, {"id": 4, "name": "Tiger"}],<br>
  'enable': function(event, data) {<br>
    // code to execute when the groupbox is enabled<br>
  }<br>
});<br>
</code></pre>
<hr />