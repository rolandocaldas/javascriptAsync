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
      scripts,
      write;
      
  if (Array.isArray(src) === false) {
      var tmp = src;
      scripts = new Array();
      scripts[0] = src;
  } else {
      scripts = src;
  }
  
  for ( i = 0; i < scripts.length; i++) {
    write = scripts[i].split("/");
    document.getElementById('loadingContent').innerHTML = 'Loading ... ' + write[(write.length - 1)] + ' ... ';
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = scripts[i];
    if (i == scripts.length - 1) {
        s.onload = s.onreadystatechange = function() {
            if ( !r && (!this.readyState || this.readyState == 'complete') )
            {
                r = true;
                if (callback !== undefined) {
                    callback();
                }
            }
        };
    }
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);  
  }
}

addEvent(window, 'load', function(){ loadScript(
        'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js', 
        function () { loadScript(
                                new Array(
                                'js/libs/jqueryui/jquery-ui.js',
                                'js/libs/jquery.qrcode/jquery.qrcode.min.js',
                                'js/libs/jquery-jcrop/js/jquery.Jcrop.js'), 
                                function () { loadScript('js/global_plus_jquery.js')})
        } );
});