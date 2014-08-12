/*
    Author: Rolando Caldas Sanchez
    Blog: http://rolandocaldas.com/
    Google+: https://plus.google.com/+RolandoCaldasSanchez
    Linkedin: http://www.linkedin.com/in/rolandocaldas
    Twitter: https://twitter.com/rolando_caldas

    This file is part of an article:
    http://rolandocaldas.com/html5/carga-asincrona-de-javascript 
*/
    
function addEvent(element, event, fn) {
    if (element.addEventListener) {
        element.addEventListener(event, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + event, fn);
    }
}

function loadScript(src, callback)
{
  var s,
      r,
      t,
      write;
      
  write = src.split("/");
  document.getElementById('loadingContent').innerHTML = 'Loading ... ' + write[(write.length - 1)] + ' ... ';
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      if (callback !== undefined) {
        callback();
      }
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}

addEvent(window, 'load', function(){ loadScript(
        'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js', 
        function () { 
            loadScript('js/libs/jqueryui/jquery-ui.js',
                function () {
                   loadScript('js/libs/jquery.qrcode/jquery.qrcode.min.js',
                   function() {
                     loadScript('js/libs/jquery-jcrop/js/jquery.Jcrop.js', 
                     function() {
                         loadScript('js/global_plus_jquery.js');
                     });  
                   }); 
                });
        });
});