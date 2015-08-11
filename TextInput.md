# Summary #
JQuery UI based text input filter that provides a simple way to selectively suppress keystrokes.

# Example #
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Text Input Example</title>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/redmond/jquery-ui.css">
  <link rel="stylesheet" href="css/jquery-ui-plugins.min.css" type="text/css"/>
  <script src="http://code.jquery.com/jquery-1.8.2.js"></script>
  <script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
  <script type="text/javascript" src="js/jquery-ui-plugins.min.js"></script>
</head>
<body>		
  <label>Numbers Only</label><input type="text" class="numbersOnly"/>	
  <label>Digits Only</label><input type="text" class="digitsOnly"/>	
  <label>Only ABC</label><input type="text" class="onlyabc"/>	
  <label>Not ABC</label><input type="text" class="notabc"/>
	
  <script type="text/javascript">		
		
    $(function() {				
      $('input.numbersOnly').textinput({'filter': 'numeric'});					
      
      $('input.digitsOnly').textinput({'filter': 'digits'});					
      
      $('input.onlyabc').textinput({
        'whitelist': ['A', 'B', 'C']
      });
			
      $('input.notabc').textinput({
        'blacklist': ['A', 'B', 'C']
      });
    });
  </script>										
</body>
</html>
```

# Text Input API #

<table cellspacing='10px'>
<blockquote><tr>
<blockquote><td><h3><a href='#Options.md'>Options</a></h3></td>
<td><h3><a href='#Methods.md'>Methods</a></h3></td>
<td><h3><a href='#Events.md'>Events</a></h3></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#allow.md'>allow</a></td>
<td><a href='#destroy().md'>destroy</a></td>
<td><a href='#create(event,_data).md'>create</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#blacklist.md'>blacklist</a></td>
<td><a href='#disable().md'>disable</a></td>
<td><a href='#disable(event,_data).md'>disable</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#filter.md'>filter</a></td>
<td><a href='#enable().md'>enable</a></td>
<td><a href='#enable(event,_data).md'>enable</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#stylize.md'>stylize</a></td>
<td><a href='#option().md'>option</a></td>
<td><a href='#keyEventSuppressed(event,_data).md'>keyEventSuppressed</a></td>
</blockquote></tr>
<tr>
<blockquote><td><a href='#whitelist.md'>whitelist</a></td>
<td></td>
<td></td>
</blockquote></tr>
</table></blockquote>


---


## Options ##
#### allow ####
A list of characters the user is allowed to type regardless of any applied filter. For example, if a text field is restricted to letters by applying the alpha filter, "." and "@" can be added to the list of allowed characters by setting the allow option to "@." or ["@", "."].

**Type:** [String](http://api.jquery.com/Types/#String) OR [Array](http://api.jquery.com/Types/#Array)

**Default:** null

**Example:**

Set during initialization:
```
// allow letters and "@", "." and "_"
$('#myText').textinput({
  'filter': 'alpha',
  'allow': '@.'
});
```

OR via option method after initialization:
```
$('#myText').textinput('option', 'allow', '@.');
```

---


#### blacklist ####
A list of characters the user is not allowed to enter.

**Type:** [String](http://api.jquery.com/Types/#String) OR [Array](http://api.jquery.com/Types/#Array)

**Default:** null

**Example:**

Set during initialization:
```
$('#myText').textinput({
  // "a", "b" and "c" are suppressed
  'blacklist': 'abc'
});
```

OR via option method after initialization:
```
$('#myText').textinput('option', 'blacklist', 'abc');
```

---

#### filter ####
A text filter applied to restrict character input. Valid values are "numeric", "digits" and "alpha".

**Type:** [String](http://api.jquery.com/Types/#String)

**Default:** null

**Example:**

Set during initialization:
```
$('#myText').textinput({
  'filter': 'numeric'
});
```

OR via option method after initialization:
```
$('#myText').textinput('option', 'filter', 'numeric');
```

---


#### stylize ####
A boolean value that determines if the text field should be stylized with jQuery UI classes.

**Type:** [Boolean](http://api.jquery.com/Types/#Boolean)

**Default:** true

**Example:**

Set during initialization:
```
$('#myText').textinput({ 
  'stylize': false
});
```

OR via option method after initialization:
```
$('#myText').textinput('option', 'stylize', false);
```

---


#### whitelist ####
A list of characters the user is allowed to enter, any characters not in the list are suppressed.

**Type:** [String](http://api.jquery.com/Types/#String) OR [Array](http://api.jquery.com/Types/#Array)

**Default:** null

**Example:**

Set during initialization:
```
$('#myText').textinput({
  // only the letters "a", "b" and "c" are allowed
  'whitelist': 'abc'
});
```

OR via option method after initialization:
```
$('#myText').textinput('option', 'whitelist', 'abc');
```

---


## Methods ##
#### destroy() ####
Destroy the text field, removing all functionality added by the plugin and returning the element back to its pre-init state.

**Example:**
```
$('#myText').textinput('destroy');
```

---


#### disable() ####
Disables the text field.

**Example:**
```
$('#myText').textinput('disable');
```

---


#### enable() ####
Enables the text field.

**Example:**
```
$('#myText').textinput('enable');
```

---

#### option() ####
Gets an object containing key/value pairs representing the text input's current options hash.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**
```
var options = $('#myText').textinput('option');
```

---

#### option(optionName) ####
Gets the value currently associated with the option specified by optionName.

**Returns:** [Object](http://api.jquery.com/Types/#Object)

**Example:**
```
var filter = $('#myText').textinput('option', 'filter');
```

---

#### option(optionName, value) ####
Sets the value of the option specified by optionName.

**Example:**
```
$('#myText').textinput('option', 'filter', 'digits');
```

---

## Events ##
#### create(event, data) ####
Triggered when the text field is created.

  * **event**
> Type: [Event](http://api.jquery.com/Types/#Event)

  * **data**
> Type: [Object](http://api.jquery.com/Types/#Object)

**Example:**
```
$('#myText').textinput({
  'create': function(event, data) {
    // code to execute when the text field is created
  }
});
```

---

#### disable(event, data) ####
Triggered when the text field is disabled.

  * **event**
> Type: [Event](http://api.jquery.com/Types/#Event)

  * **data**
> Type: [Object](http://api.jquery.com/Types/#Object)

**Example:**
```
$('#myText').textinput({
  'disable': function(event, data) {
    // code to execute when the text field is disabled
  }
});
```

---

#### enable(event, data) ####
Triggered when the text field is enabled.

  * **event**
> Type: [Event](http://api.jquery.com/Types/#Event)

  * **data**
> Type: [Object](http://api.jquery.com/Types/#Object)

**Example:**
```
$('#myText').textinput({
  'enable': function(event, data) {
    // code to execute when the text field is enabled
  }
});
```
#### keyEventSuppressed(event, data) ####
Triggered when a key press is suppressed.

<ul>
<li><b>event</b></li>
Type: <a href='http://api.jquery.com/Types/#Event'>Event</a>

<li><b>data</b></li>
Type: <a href='http://api.jquery.com/Types/#Object'>Object</a>
<ul>

<li><b>key</b></li>
Type: <a href='http://api.jquery.com/Types/#String'>String</a>

The key that was suppressed.<br>
<br>
</ul>
</ul>

**Example:**
```
$('#myText').textinput({
  'keyEventSuppressed': function(event, data) {
    console.log(data.key + ' was suppressed');
  }
});
```

---
