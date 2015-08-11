# Summary #
A JQuery UI based combobox widget that combines a drop-down list with a text field to create a drop-down list that filters options based on the user's input as they type. This widget
was created based on the [demo](http://jqueryui.com/autocomplete/#combobox) provided by the jQuery UI team in the documentation for the [Autocomplete](http://jqueryui.com/autocomplete/) widget. It adds
some functionality to make it behave a bit more like a regular HTML select list and provides some options, methods and events so it can be manipulated and customized like a regular jQuery UI widget.

# Example #
<img src='https://jquery-ui-plugins.googlecode.com/svn/trunk/examples/images/combobox.png'>

<pre><code>&lt;!doctype html&gt;<br>
&lt;html lang="en"&gt;<br>
&lt;head&gt;<br>
  &lt;meta charset="utf-8"&gt;<br>
  &lt;title&gt;Combobox Example&lt;/title&gt;<br>
  &lt;link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css"&gt;<br>
  &lt;link rel="stylesheet" href="css/jquery-ui-combobox.css" type="text/css"/&gt;	<br>
  &lt;script src="http://code.jquery.com/jquery-1.8.2.js"&gt;&lt;/script&gt;<br>
  &lt;script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"&gt;&lt;/script&gt;<br>
  &lt;script type="text/javascript" src="js/jquery-ui-combobox.js"&gt;&lt;/script&gt;		<br>
&lt;/head&gt;<br>
&lt;body&gt;		<br>
  &lt;select id="myCombobox"&gt;<br>
    &lt;option value=""&gt;Select one...&lt;/option&gt;<br>
    &lt;option value="ActionScript"&gt;ActionScript&lt;/option&gt;<br>
    &lt;option value="AppleScript"&gt;AppleScript&lt;/option&gt;<br>
    &lt;option value="Asp"&gt;Asp&lt;/option&gt;<br>
    &lt;option value="BASIC"&gt;BASIC&lt;/option&gt;<br>
    &lt;option value="C"&gt;C&lt;/option&gt;<br>
    &lt;option value="C++"&gt;C++&lt;/option&gt;<br>
    &lt;option value="Clojure"&gt;Clojure&lt;/option&gt;<br>
    &lt;option value="COBOL"&gt;COBOL&lt;/option&gt;<br>
    &lt;option value="ColdFusion"&gt;ColdFusion&lt;/option&gt;<br>
    &lt;option value="Erlang"&gt;Erlang&lt;/option&gt;<br>
    &lt;option value="Fortran"&gt;Fortran&lt;/option&gt;<br>
    &lt;option value="Groovy"&gt;Groovy&lt;/option&gt;<br>
    &lt;option value="Haskell"&gt;Haskell&lt;/option&gt;<br>
    &lt;option value="Java"&gt;Java&lt;/option&gt;<br>
    &lt;option value="JavaScript"&gt;JavaScript&lt;/option&gt;<br>
    &lt;option value="Lisp"&gt;Lisp&lt;/option&gt;<br>
    &lt;option value="Perl"&gt;Perl&lt;/option&gt;<br>
    &lt;option value="PHP"&gt;PHP&lt;/option&gt;<br>
    &lt;option value="Python"&gt;Python&lt;/option&gt;<br>
    &lt;option value="Ruby"&gt;Ruby&lt;/option&gt;<br>
    &lt;option value="Scala"&gt;Scala&lt;/option&gt;<br>
    &lt;option value="Scheme"&gt;Scheme&lt;/option&gt;<br>
  &lt;/select&gt;<br>
	<br>
  &lt;script type="text/javascript"&gt;			<br>
    $(function() {				<br>
      $("#myCombobox").combobox();						<br>
    });<br>
  &lt;/script&gt;								<br>
&lt;/body&gt;<br>
&lt;/html&gt;<br>
</code></pre>

<h1>Combobox API</h1>

<table cellspacing='10px'>
<blockquote><tr>
<blockquote><td><h3><a href='#Options.md'>Options</a></h3></td>
<td><h3><a href='#Methods.md'>Methods</a></h3></td>
<td><h3><a href='#Events.md'>Events</a></h3></td>
</blockquote></tr></blockquote>

<blockquote><tr>
<blockquote><td><a href='#buttonClass.md'>buttonClass</a></td>
<td><a href='#close().md'>close</a></td>
<td><a href='#change(event,_data).md'>change</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#buttonStyle.md'>buttonStyle</a></td>
<td><a href='#destroy().md'>destroy</a></td>
<td><a href='#close(event,_data).md'>close</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#height.md'>height</a></td>
<td><a href='#disable().md'>disable</a></td>
<td><a href='#create(event,_data).md'>create</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#ignoreCase.md'>ignoreCase</a></td>
<td><a href='#enable().md'>enable</a></td>
<td><a href='#disable(event,_data).md'>disable</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#inputClass.md'>inputClass</a></td>
<td><a href='#open().md'>open</a></td>
<td><a href='#enable(event,_data).md'>enable</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#inputStyle.md'>inputStyle</a></td>
<td><a href='#option().md'>option</a></td>
<td><a href='#open(event,_data).md'>open</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#maxHeight.md'>maxHeight</a></td>
<td></td>
<td><a href='#select(event,_data).md'>select</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#searchType.md'>searchType</a></td>
<td></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#width.md'>width</a></td>
<td></td>
<td></td>
</blockquote></tr>
</table>
<h2>Options</h2>
<h4>buttonClass</h4>
CSS class to apply to the drop-down button.</blockquote>

<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'buttonClass': 'redButton'<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'buttonClass', 'redButton');<br>
</code></pre>
<hr />
<h4>buttonStyle</h4>
CSS style to apply to the drop-down button.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Default:</b> {}<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'buttonStyle': {"border": "1px solid black"}<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'buttonStyle', {"border": "1px solid black"});<br>
</code></pre>
<hr />
<h4>height</h4>
Height of the combobox.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Integer'>Integer</a>

<b>Default:</b> 20<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'height': 30<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'height', 30);<br>
</code></pre>
<hr />
<h4>ignoreCase</h4>
Boolean value indicating whether case should be ignored while searching the list for values matching the user's input.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Boolean'>Boolean</a>

<b>Default:</b> true<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'ignoreCase': false<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'ignoreCase', false);<br>
</code></pre>
<hr />
<h4>inputClass</h4>
CSS class to apply to the input box.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'inputClass': 'bigInput'<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'inputClass', 'bigInput');<br>
</code></pre>
<hr />
<h4>inputStyle</h4>
CSS style to apply to the input box.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Default:</b> {}<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'inputStyle': {"padding": "20px"}<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'inputStyle', {"padding": "20px"});<br>
</code></pre>
<hr />
<h4>maxHeight</h4>
Maximum height of the drop-down list of values. If the list of values exceeds this height the list becomes scrollable.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Integer'>Integer</a>

<b>Default:</b> 200<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'maxHeight': 100<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'maxHeight', 100);<br>
</code></pre>
<hr />
<h4>searchType</h4>
The type of search performed when attempting to find values that match the user's input. Valid values are "startsWith" and "contains".<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> "startsWith"<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'searchType': 'contains'<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'searchType', 'contains');<br>
</code></pre>
<hr />
<h4>width</h4>
The width of the combobox.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Integer'>Integer</a>

<b>Default:</b> 200<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myCombobox').combobox({<br>
  'width': 100<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myCombobox').combobox('option', 'width', 100);<br>
</code></pre>
<hr />

<h2>Methods</h2>
<h4>close()</h4>
Close the drop-down list if it's displayed.<br>
<br>
<b>Example:</b>
<pre><code>$('#myCombobox').combobox('close');<br>
</code></pre>
<hr />
<h4>destroy()</h4>
Destroy the combobox, removing all functionality added by the plugin and returning the element to it's original state.<br>
<br>
<b>Example:</b>
<pre><code>$('#myCombobox').combobox('destroy');<br>
</code></pre>
<hr />
<h4>disable()</h4>
Disable the combobox.<br>
<br>
<b>Example:</b>
<pre><code>$('#myCombobox').combobox('disable');<br>
</code></pre>
<hr />
<h4>enable()</h4>
Enable the combobox.<br>
<br>
<b>Example:</b>
<pre><code>$('#myCombobox').combobox('enable');<br>
</code></pre>
<hr />
<h4>open()</h4>
Open the drop-down list.<br>
<br>
<b>Example:</b>
<pre><code>$('#myCombobox').combobox('open');<br>
</code></pre>
<hr />
<h4>option()</h4>
Gets an object containing key/value pairs representing the combobox's current options hash.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Example:</b>
<pre><code>var options = $('#myCombobox').combobox('option');<br>
</code></pre>
<hr />
<h4>option(optionName)</h4>
Gets the value currently associated with the option specified by optionName.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Example:</b>
<pre><code>var comboHeight = $('#myCombobox').combobox('option', 'height');<br>
</code></pre>
<hr />
<h4>option(optionName, value)</h4>
Sets the value of the option specified by optionName.<br>
<br>
<b>Example:</b>
<pre><code>$('#myCombobox').combobox('option', 'height', 30);<br>
</code></pre>
<hr />
<h2>Events</h2>
<h4>change(event, data)</h4>
Triggered when the input field is blurred after the user has typed a value that matches one of the items in the list, thereby changing the selected value. This event is NOT fired when user selects a value from the list using the mouse or arrows keys, in that case the [select() select] event is fired.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The option item that is now selected.<br>
<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'change': function(event, data) {<br>
    // code to execute when the selection is changed by the user typing a valid value<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>close(event, data)</h4>
Triggered when the drop-down list is closed.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'close': function(event, data) {<br>
    // code to execute when the select list is closed<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>create(event, data)</h4>
Triggered when the combobox is created.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'create': function(event, data) {<br>
    // code to execute when the combobox is created<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>disable(event, data)</h4>
Triggered when the combobox is disabled.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'disable': function(event, data) {<br>
    // code to execute when the combobox is disabled<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>enable(event, data)</h4>
Triggered when the combobox is enabled.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'enable': function(event, data) {<br>
    // code to execute when the combobox is enabled<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>open(event, data)</h4>
Triggered when the drop-down list is opened.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'open': function(event, data) {<br>
    // code to execute when the drop-down list is opened<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>select(event, data)</h4>
Triggered when a value is selected from the list using the arrow keys or the mouse.<br>
<br>
<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>


<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>item</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>

The option item that is now selected.<br>
<br>
</ul>
</ul>

<b>Example:</b>
<pre><code>$('#myCombobox').combobox({    <br>
  'select': function(event, data) {<br>
    // code to execute when a value is selected from the drop-down list<br>
  }<br>
});<br>
</code></pre>
<hr />