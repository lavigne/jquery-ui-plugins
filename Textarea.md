# Summary #
A JQuery UI based textarea widget that provides maximum character length and text selection functionality. The maximum character limit is correctly enforced whether the user types in the textarea or pastes content into it. There are known issues with how Opera handles pasted content.

# Example #
As you can see from the following screen shot the widget automatically renders a character limit message which is updated as the user types or pastes content into the textarea. There are also events triggered as the textarea content is updated, allowing you to provide callback functions to react to user input.

<img src='https://jquery-ui-plugins.googlecode.com/svn/trunk/examples/images/textarea.png'>

<pre><code>&lt;!doctype html&gt;<br>
&lt;html lang="en"&gt;<br>
&lt;head&gt;<br>
  &lt;meta charset="utf-8"&gt;<br>
  &lt;title&gt;Textarea Example&lt;/title&gt;<br>
  &lt;link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/redmond/jquery-ui.css"&gt;<br>
  &lt;link rel="stylesheet" href="css/jquery-ui-plugins.min.css" type="text/css"/&gt;<br>
  &lt;script src="http://code.jquery.com/jquery-1.8.2.js"&gt;&lt;/script&gt;<br>
  &lt;script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"&gt;&lt;/script&gt;<br>
  &lt;script type="text/javascript" src="js/jquery-ui-plugins.min.js"&gt;&lt;/script&gt;	<br>
&lt;/head&gt;<br>
&lt;body&gt;		<br>
  &lt;textarea id="myTextarea" rows="10" cols="30"&gt;&lt;/textarea&gt;<br>
	<br>
  &lt;script type="text/javascript"&gt;		<br>
		<br>
    $(function() {				<br>
      $('#myTextarea').textarea({<br>
        'maxChars': 100, <br>
		'charLimitMessage': '{ENTERED} of {MAX} characters, {REMAINING} left'					<br>
      });		<br>
    });<br>
  &lt;/script&gt;													<br>
&lt;/body&gt;<br>
&lt;/html&gt;<br>
</code></pre>

<h1>Textarea API</h1>

<table cellspacing='10px'>
<blockquote><tr>
<blockquote><td><h3><a href='#Options.md'>Options</a></h3></td>
<td><h3><a href='#Methods.md'>Methods</a></h3></td>
<td><h3><a href='#Events.md'>Events</a></h3></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#charLimitMessage.md'>charLimitMessage</a></td>
<td><a href='#afterCursor().md'>afterCursor</a></td>
<td><a href='#afterChange(event,_data).md'>afterChange</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#limitMessageClass.md'>limitMessageClass</a></td>
<td><a href='#beforeCursor().md'>beforeCursor</a></td>
<td><a href='#beforeChange(event,_data).md'>beforeChange</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#limitMessageStyle.md'>limitMessageStyle</a></td>
<td><a href='#destroy().md'>destroy</a></td>
<td><a href='#create(event,_data).md'>create</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#maxChars.md'>maxChars</a></td>
<td><a href='#disable().md'>disable</a></td>
<td><a href='#disable(event,_data).md'>disable</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#pasteFlickerFix.md'>pasteFlickerFix</a></td>
<td><a href='#enable().md'>enable</a></td>
<td><a href='#enable(event,_data).md'>enable</a></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#option().md'>option</a></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#refresh().md'>refresh</a></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#remaining().md'>remaining</a></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#replaceSelection(replacement).md'>replaceSelection</a></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#selectedText().md'>selectedText</a></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#selectionEnd().md'>selectionEnd</a></td>
<td></td>
</blockquote></tr>
<tr>
<blockquote><td></td>
<td><a href='#selectionStart().md'>selectionStart</a></td>
<td></td>
</blockquote></tr>
</table></blockquote>

<hr />

<h2>Options</h2>
<h4>charLimitMessage</h4>
The message displayed to the user to communicate the character limit info. The place holders {MAX}, {ENTERED} and {REMAINING} can be use to substitute the current value for max characters, characters entered and characters remaining.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100, <br>
  'charLimitMessage': '{ENTERED} of {MAX} characters, {REMAINING}<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myTextarea').textarea('option', 'charLimitMessage', '{ENTERED} of {MAX}');<br>
</code></pre>
<hr />

<h4>limitMessageClass</h4>
List of CSS classes to be applied to the limit message.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100, <br>
  'charLimitMessage': '{ENTERED} of {MAX} characters', 					<br>
  'limitMessageClass': 'red'<br>
});	<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myTextarea').textarea('option', 'limitMessageClass', 'blue');<br>
</code></pre>
<hr />

<h4>limitMessageStyle</h4>
CSS style applied to limit message.<br>
<br>
<b>Type:</b>  <a href='http://api.jquery.com/Types/#String'>String</a> or  <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Default:</b> ""<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100, <br>
  'charLimitMessage': '{ENTERED} of {MAX} characters',<br>
  'limitMessageStyle': {'font-weight': 'bold'},<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myTextarea').textarea('option', 'limitMessageStyle', {'font-weight': 'bold'});<br>
</code></pre>
<hr />

<h4>maxChars</h4>
Number or function returning the number of chars allowed. Using a function is valuable for dynamic limits, for example, when the limit depends on the contents of another textarea.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Number'>Number</a> or  <a href='http://api.jquery.com/Types/#Function'>Function</a>

<b>Default:</b> -1<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myTextarea').textarea('option', 'maxChars', 50);<br>
</code></pre>
<hr />

<h4>pasteFlickerFix</h4>
Turning this off will help performance but you'll see a flicker in some browsers when text that's too long is pasted into the textarea.<br>
<br>
<b>Type:</b> <a href='http://api.jquery.com/Types/#Boolean'>Boolean</a>

<b>Default:</b> true<br>
<br>
<b>Example:</b>

Set during initialization:<br>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100,<br>
  'pasteFlickerFix': false<br>
});<br>
</code></pre>

OR via option method after initialization:<br>
<pre><code>$('#myTextarea').textarea('option', 'pasteFlickerFix', false);<br>
</code></pre>
<hr />

<h2>Methods</h2>
<h4>afterCursor()</h4>
Get the text after the current cursor location.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Example:</b>
<pre><code>var textAfterCursor = $('#myTextarea').textarea('afterCursor');<br>
</code></pre>
<hr />

<h4>beforeCursor()</h4>
Get the text before the current cursor location.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Example:</b>
<pre><code>var textBeforeCursor = $('#myTextarea').textarea('beforeCursor');<br>
</code></pre>
<hr />

<h4>destroy()</h4>
Destroy the text area, removing all functionality added by the plugin.<br>
<br>
<b>Example:</b>
<pre><code>$('#myTextarea').textarea('destroy');<br>
</code></pre>
<hr />
<h4>disable()</h4>
Disables the textarea.<br>
<br>
<b>Example:</b>
<pre><code>$('#myTextarea').textarea('disable');<br>
</code></pre>
<hr />

<h4>enable()</h4>
Enables the textarea.<br>
<br>
<b>Example:</b>
<pre><code>$('#myTextarea').textarea('enable');<br>
</code></pre>
<hr />
<h4>option()</h4>
Gets an object containing key/value pairs representing the textarea's current options hash.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Example:</b>
<pre><code>var options = $('#myTextarea').textarea('option');<br>
</code></pre>
<hr />
<h4>option(optionName)</h4>
Gets the value currently associated with the option specified by optionName.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Object'>Object</a>

<b>Example:</b>
<pre><code>var maxChars = $('#myTextarea').textarea('option', 'maxChars');<br>
</code></pre>
<hr />
<h4>option(optionName, value)</h4>
Sets the value of the option specified by optionName.<br>
<br>
<b>Example:</b>
<pre><code>$('#myTextarea').textarea('option', 'maxChars', 400);<br>
</code></pre>
<hr />
<h4>refresh()</h4>
Refresh the text area. This is useful for updating the char limit message on a textarea with a dynamic character limit, e.g. when the limit is based on the content of multiple textareas<br>
<br>
<b>Example:</b>
<pre><code>$('#myTextarea').textarea('refresh');<br>
</code></pre>
<hr />
<h4>remaining()</h4>
Get the remaining number of characters that can be entered<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Number'>Number</a>

<b>Example:</b>
<pre><code>var charsRemaining = $('#myTextarea').textarea('remaining');<br>
</code></pre>
<hr />
<h4>replaceSelection(replacement)</h4>
Replace the current selection with the text specified by the replacement parameter.<br>
<br>
<ul><li><b>replacement</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#String'>String</a></blockquote>

<blockquote>The text that will replace the current selection.</blockquote>

<b>Example:</b>
<pre><code>$textarea.textarea('replaceSelection', 'My new text');<br>
</code></pre>
<hr />
<h4>selectedText()</h4>
Get the current text selection.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#String'>String</a>

<b>Example:</b>
<pre><code>var selectedText = $('#myTextarea').textarea('selectedText');<br>
</code></pre>
<hr />
<h4>selectedText(start, end)</h4>
Set the current text selection using the provided start and end values.<br>
<br>
<ul><li><b>start</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>A zero based index indicating where to start the selection. The character at this index will be included in the selection.</blockquote>

<ul><li><b>end</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Integer'>Integer</a></blockquote>

<blockquote>A zero based index indicating where to stop the selection. the character at this index will not be included in the selection.</blockquote>

<b>Example:</b>
<pre><code>// if the textarea contains the text "Hamburger", the follwoing call to selectedText will set the selection to "urge".<br>
$('#myTextarea').textarea('selectedText', 4, 8);<br>
</code></pre>
<hr />
<h4>selectionEnd()</h4>
Get the zero-based index of the character at the end of the current selection. This is the first character that is NOT part of the current selection.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Number'>Number</a>

<b>Example:</b>
<pre><code>var end = $('#myTextarea').textarea('selectionEnd');<br>
</code></pre>
<hr />
<h4>selectionStart()</h4>
Get the zero-based index of the character at the start of the current selection.<br>
<br>
<b>Returns:</b> <a href='http://api.jquery.com/Types/#Number'>Number</a>

<b>Example:</b>
<pre><code>var start = $('#myTextarea').textarea('selectionStart');<br>
</code></pre>
<hr />

<h2>Events</h2>
<h4>afterChange(event, data)</h4>
Triggered when the text is changed after the limit message has been updated.<br>
<br>
<ul><li><b>event</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Event'>Event</a></blockquote>

<ul><li><b>data</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Object'>Object</a></blockquote>

<b>Example:</b>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100,<br>
  'afterChange': function(event, data) {<br>
    // code to execute when afterChange is triggered<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>beforeChange(event, data)</h4>
Triggered when a key is pressed or when content is pasted into the textarea. If a limit message exists, this event is fired before the limit message is updated.<br>
<br>
<ul><li><b>event</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Event'>Event</a></blockquote>

<ul><li><b>data</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Object'>Object</a></blockquote>

<b>Example:</b>
<pre><code>$('#myTextarea').textarea({<br>
  'maxChars': 100,<br>
  'beforeChange': function(event, data) {<br>
    // code to execute when beforeChange is triggered<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>create(event, data)</h4>
Triggered when the textarea is created.<br>
<br>
<ul><li><b>event</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Event'>Event</a></blockquote>

<ul><li><b>data</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Object'>Object</a></blockquote>

<b>Example:</b>
<pre><code>$('#myTextarea').textarea({<br>
  'create': function(event, data) {<br>
    // code to execute when the textarea is created<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>disable(event, data)</h4>
Triggered when the textarea is disabled.<br>
<br>
<ul><li><b>event</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Event'>Event</a></blockquote>

<ul><li><b>data</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Object'>Object</a></blockquote>

<b>Example:</b>
<pre><code>$('#myTextarea').textarea({<br>
  'disable': function(event, data) {<br>
    // code to execute when the textarea is disabled<br>
  }<br>
});<br>
</code></pre>
<hr />
<h4>enable(event, data)</h4>
Triggered when the textarea is enabled.<br>
<br>
<ul><li><b>event</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Event'>Event</a></blockquote>

<ul><li><b>data</b>
</li></ul><blockquote>Type: <a href='http://api.jquery.com/Types/#Object'>Object</a></blockquote>

<b>Example:</b>
<pre><code>$('#myTextarea').textarea({<br>
  'enable': function(event, data) {<br>
    // code to execute when the textarea is enabled<br>
  }<br>
});<br>
</code></pre>
<hr />