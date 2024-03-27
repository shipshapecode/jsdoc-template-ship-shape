'use strict';

/* global document */
(function () {
  var lineId, lines, anchorHash;
  var source = document.getElementsByClassName('prettyprint source linenums');
  var lineNumber = 0;

  if (source && source[0]) {
    anchorHash = document.location.hash.substring(1);
    lines = source[0].innerHTML.split('\n');
    for (; lineNumber < lines.length; lineNumber++) {
      lineId = 'line' + (lineNumber + 1);
      lines[lineNumber] =
        '<span id="' + lineId + '"></span>' + lines[lineNumber];
      if (lineId === anchorHash) {
        lines[lineNumber] = lines[lineNumber].replace(
          '<span id="line',
          '<span class="selected" id="line'
        );
      }
    }
    source[0].innerHTML = lines.join('\n');
  }
})();
