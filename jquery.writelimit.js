/* Copyright (c) 2010 Bryan Mills

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
THE SOFTWARE. */

(function($){
   var WriteLimit = function(element, options)
   {
       var elem = $(element);
       var obj = this;
       var settings = $.extend({
           max: 140,
           unit: 'chars',
           counter: null,
           countDirection: 'down',
           overClass: 'over-limit',
           uncounted: []
       }, options || {});

       if (elem.data('max')) { settings.max = elem.data('max'); }
       if (elem.data('unit')) { settings.unit = elem.data('unit'); }
       if (elem.data('direction')) { settings.direction = elem.data('direction'); }
       if (elem.data('counter')) { settings.counter = $(elem.data('counter')); }
       
       // Public methods             
       this.refresh = function()
       {
          var counter = settings['counter'];
          var max = settings['max'];
          var input = getInput();
          var counted = doCount(input);

          // if counter hasn't been defined, what are we doing here?
          if (!counter) {
              return;
          }
          
          if (settings['countDirection'] == 'down') {
              var newValue = max - counted;
          } else {
              var newValue = counted;
          }
          
          if (counted > max) {
              counter.addClass(settings['overClass']);
          } else {
              counter.removeClass(settings['overClass']);
          }
          
          counter.text(newValue);
    
       };

       // Private methods
       var getInput = function()
       {
          return elem.val();
       };       
       
       var doCount = function(input)
       {
           var uncounted = settings['uncounted'];
           for(var i=0; i<uncounted.length; i++) {
               input = input.replace(new RegExp(uncounted[i], 'g'), '');
           }
           
           if (settings['unit'] == 'chars') { 
               return input.length
           }
           
           if (settings['unit'] == 'words') {
               // convert newlines to spaces
               input = input.replace(/\s/g, ' ');
               input = input.split(' ');
               
               // don't count any element that contain nothing               
               var countOffset = 0
               for(var i=0; i<input.length; i++) {
                   if (!input[i].length > 0) {
                       countOffset++;
                   }
               }
               
               return input.length - countOffset;
           }
       };
   };

   $.fn.writeLimit = function(options)
   {
       return this.each(function()
       {
           var element = $(this);
          
           // Return early if this element already has a plugin instance
           if (element.data('writeLimit')) return;

           // pass options to plugin constructor
           var writeLimit = new WriteLimit(this, options);

           // Store plugin object in this element's data
           element.data('writeLimit', writeLimit);

           writeLimit.refresh();
           element.keyup(function() {
               writeLimit.refresh();
           });
           
           return this;
       });
   };
})(jQuery);
