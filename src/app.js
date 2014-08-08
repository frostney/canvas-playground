(function (window, $) {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');


  function resetEditor(editor) {
    editor.setValue('(function(canvas, ctx) {\n' +
      '\tctx.fillStyle = "rgb(200,0,0)";\n' +
      '\tctx.fillRect(10, 10, 55, 50);\n\n' +
      '\tctx.fillStyle = "rgba(20, 50, 60, 0.5)";\n' +
      '\tctx.fillRect(30, 30, 55, 50);\n' +
      '})(canvas, ctx);');

    changeEditor();
  }

  function changeEditor() {

    // Reset message box
    $('#editor-message').removeClass('error');
    $('#editor-message').text('');

    var editorFunction = null;
    var hasError = false;

    try {
      editorFunction = new Function('window', 'canvas', 'ctx', 'ctx.clearRect(0, 0, canvas.width, canvas.height);\n' + editor.getValue());
    } catch (e) {
      $('#editor-message').addClass('error');
      $('#editor-message').text(e.stack);

      hasError = true;
    }

    if (!hasError) {
      try {
        editorFunction(window, canvas, ctx);
      } catch (e) {
        $('#editor-message').addClass('error');
        $('#editor-message').text(e.stack);
      }
    }
  }

  var editor = ace.edit('editor');

  resetEditor(editor);

  editor.setTheme('ace/theme/twilight');
  editor.getSession().setMode('ace/mode/javascript');


  editor.on('change', changeEditor);

  $(window).trigger('resize');

  $('#btn-reset').on('click', function () {
    resetEditor(editor);
  });

  $('#btn-download').on('click', function () {
    var zip = new JSZip();

    zip.file('README.md', 'This was generated with ');
    zip.file('index.html', '<html lang="en"></html>\n' +
      '<head>\n' +
      '<meta charset="utf-8"/>\n' +
      '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>\n' +
      '<title>Built</title>\n' +
      '<meta name="description" content=""/>\n' +
      '<meta name="author" content="Johannes Stein"/>\n' +
      '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' +
      '<link rel="shortcut icon" href="/favicon.ico"/>\n' +
      '<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>\n' +
      '<style>\n' +
      '\tcanvas { position: absolute; left: 50%; top: 50%; margin-left: -200px; margin-top: -150px; }\n' +
      '</style>\n' +
      '<body>\n' +
      '\t<div id="container">\n' +
      '\t\t<canvas id="canvas" width="400" height="300"></canvas>\n' +
      '\t</div>\n' +
      '\t<script src="js/app.js"></script>\n' +
      '</body></head>');
    zip.file('js/app.js', '(function() {\n\tvar canvas = document.getElementById("canvas");\n\tvar ctx = canvas.getContext("2d");\n' + editor.getValue() + '})();');

    if (JSZip.support.blob) {
      try {
        var blob = zip.generate({type: 'blob'});
        // see FileSaver.js
        saveAs(blob, 'canvas.zip');
      } catch (e) {
        console.error(e);
      }
    } else {
      window.location = "data:application/zip;base64," + zip.generate({type: "base64"});
    }
  });

  /*$('#edt-canvas-width').on('change', function() {
   var editValue = $(this).val();
   $(this).attr('value')

   console.log('test');

   if (typeof editValue === 'number') {
   $('#canvas').attr('width', editValue);
   }
   });*/

  $(window).resize(function () {
    /*var containerHeight = $('#editor-container').outerHeight();
     var editorMessage = $('#editor-message').outerHeight();
     var editorVars = $('#editor-variables').outerHeight();
     var buttonBarHeight = $('#button-bar').outerHeight();

     var newHeight = containerHeight - editorMessage - editorVars;

     $('#editor').height(newHeight);*/
  });

})(this, jQuery);
