WriteLimit
===========

WriteLimit is a simple jQuery plugin for keeping track of word or character limits in text fields.

Requirements
------------

Requires jQuery. Was written and tested using 1.4+, but may work with older versions.

Usage
-----

    $('textarea').writeLimit(options);

The `writeLimit` constructor will bind a `keyup()` event to the textbox that refreshes the character and/or word count for that field. It supports any element with a `value` property.'

### Configuration Options

 - `max`: (default: 140) maximum character or words allowed  
 - `unit`: (default: 'chars) 'words' or 'chars' depending on what you want to count
 - `counter`: (default: null) Element that displays the count 
 - `countDirection`: (default: 'down') 'up' or 'down', if you want the counter to increment or decrement
 - `overClass`: (default: 'over-limit;) Class name to add to the counter when over the limit
 - `uncounted`: (default: []) Optional array of character not to count
    
License
-------

Copyright 2010 Bryan Mills. This code is release under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.