(function() {
    // Ensure the global variables are set; otherwise, use defaults
    var siteID = window.catchpointWebtagSiteID ; // Default to 11601 if not defined
    var version = window.catchpointWebtagVersion ; // Default to 'vlatest' if not defined

    // Construct the Catchpoint script URL dynamically
    var catchpointScriptUrl = `https://g.3gl.net/jp/${siteID}/${version}/InitialLoadScript.js`;

    // Create a <script> element to dynamically load the Catchpoint tag
    var script = document.createElement('script');
    script.src = catchpointScriptUrl;
    script.defer = true; // Ensures the script loads after parsing the document
    script.type = 'text/javascript';

    // Append the script to the <head> or <body>
    var target = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
    if (target) {
        target.appendChild(script);
        console.log(`Catchpoint script loaded: ${catchpointScriptUrl}`);
    } else {
        console.error('Could not append Catchpoint script. No <head> or <body> element found.');
    }
})();
