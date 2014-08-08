module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-metalsmith'
  grunt.loadNpmTasks 'grunt-bowercopy'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-image-resize'
  grunt.loadNpmTasks 'grunt-gh-pages'

  grunt.initConfig
    'gh-pages':
      options:
        base: 'build'
      src: ['**']
    uglify:
      all:
        files: [
          expand: true
          cwd: 'build'
          src: '**/*.js'
          dest: 'build'
        ]
    metalsmith:
      staticSite:
        options:
          metadata:
            title: 'Canvas playground'
            description: 'Canvas playground'
          plugins:
            'metalsmith-markdown': {}
            'metalsmith-stylus':
              nib: true
            'metalsmith-templates':
              engine: 'jade'
              directory: 'templates'
            'metalsmith-coffee': {}
        src: 'src'
        dest: 'build'
    bowercopy:
      all:
        files:
          'build/style/normalize.css': 'normalize-css/normalize.css'
          'build/style/font-awesome.css': 'font-awesome/css/font-awesome.css'
          'build/fonts': 'font-awesome/fonts'
          'build/lib/jquery.js': 'jquery/dist/jquery.js'
          'build/lib/ace.js': 'ace-builds/src/ace.js'
          'build/lib/mode-javascript.js': 'ace-builds/src/mode-javascript.js'
          'build/lib/theme-github.js': 'ace-builds/src/theme-github.js'
          'build/lib/worker-javascript.js': 'ace-builds/src/worker-javascript.js'
          'build/lib/jszip.js': 'jszip/dist/jszip.js'
          'build/lib/filesaver.js': 'FileSaver/FileSaver.js'

  grunt.registerTask 'build:dev', ['metalsmith', 'bowercopy']
  grunt.registerTask 'build:dist', ['build:dev', 'uglify']

  grunt.registerTask 'default', ['build:dev']
  grunt.registerTask 'deploy', ['build:dest', 'gh-pages']