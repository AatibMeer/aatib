(function() {
    // URL of the Catchpoint script
    var catchpointScriptUrl = 'https://g.3gl.net/jp/11601/v4.0.5/InitialLoadScript.js';

    // Create a <script> element to dynamically load the Catchpoint tag
    var script = document.createElement('script');
    script.src = catchpointScriptUrl;
    script.defer = true; // Ensures the script loads after parsing the document
    script.type = 'text/javascript';

    // Append the script to the <head> or <body>
    var target = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
    if (target) {
        target.appendChild(script);
    } else {
        console.error('Could not append Catchpoint script. No <head> or <body> element found.');
    }
})();
