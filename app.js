(function(window, $) {	
	
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		
		
		
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
			} catch(e) {
				$('#editor-message').addClass('error');
				$('#editor-message').text(e.stack);
				
				hasError = true;
			}
			
			if (!hasError) {
				try {
					editorFunction(window, canvas, ctx);					
				} catch(e) {
					$('#editor-message').addClass('error');
					$('#editor-message').text(e.stack);
				}
			}
		}
		
		var editor = ace.edit("editor");

		resetEditor(editor);
			
		editor.setTheme("ace/theme/twilight");
		editor.getSession().setMode("ace/mode/javascript");
		
		
		editor.on('change', changeEditor);
		
		$(window).trigger('resize');
		
		$('#btn-reset').on('click', function() {
			resetEditor(editor);
		});
		
		/*$('#edt-canvas-width').on('change', function() {
			var editValue = $(this).val();
			$(this).attr('value')
			
			console.log('test');
			
			if (typeof editValue === "number") {
				$('#canvas').attr('width', editValue);
			}
		});*/

	$(window).resize(function() {		
		/*var containerHeight = $('#editor-container').outerHeight();
		var editorMessage = $('#editor-message').outerHeight();
		var editorVars = $('#editor-variables').outerHeight();
		var buttonBarHeight = $('#button-bar').outerHeight();
		
		var newHeight = containerHeight - editorMessage - editorVars;
		
		$('#editor').height(newHeight);*/
	});
	
})(this, jQuery);
