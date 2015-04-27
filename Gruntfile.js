// Обязательная обёртка
module.exports = function(grunt) {
	var mozjpeg = require('imagemin-mozjpeg');

	// Задачи
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: ['dist']
		},

		sprite: {
			dist: {
				src: 'images/new_design/sprite/**/*.png',
				dest: 'images/new_design/sprite.png',
				imgPath: '../images/sprite.png',
				destCss: 'css/new_design/base/sprite.less',
				cssFormat: 'less',
				algorithm: 'binary-tree',
				padding: 8,
				engine: 'pngsmith',
				imgOpts: {
					format: 'png'
				},
			},
		},

		imagemin: {
			images: {
				option: {
					optimizatioLevel: 4,
					use: [mozjpeg()]
				},

				files: [{
					expand: true,
					cwd: 'images/new_design/',
					src: ['**/*.{png,jpg,gif}', '!sprite/**/*.png'],
					dest: 'dist/assets/images/',
				}],
			},
		},

		less: {
			options: {
				paths: 'css/new_design',
				syncImport: true,
				dumpLineNumbers: 'comments'
			},

			dev: {
				files: {
					'dist/assets/styles/common.css' : 'css/new_design/common.less'
				}
			},

			ie8: {
				files: {
					'dist/assets/styles/ie8.css' : 'css/new_design/ie8.less'
				}
			},

			ie7: {
				files: {
					'dist/assets/styles/ie7.css' : 'css/new_design/ie7.less'
				}
			}
		},

		autoprefixer: {

			dist: {

				options: {
					browsers: ['last 2 versions', 'ie 9']
				},

				src: 'dist/assets/styles/common.css'
			},

			ie8: {

				options: {
					browsers: ['ie 8']
				},

				src: 'dist/assets/styles/ie8.css'
			},

			ie7: {

				options: {
					browsers: ['ie 7']
				},

				src: 'dist/assets/styles/ie7.css'
			}
		},

		csscomb: {
			dist: {
				options: {
					config: '.csscomb.json'
				},
				files: [{
					expand: true,
					cwd: 'dist/assets/styles',
					src: '**/*.css',
					dest: 'dist/assets/styles'
				}]
			}
		},

		cssmin: {
			prod: {
				options: {
					shorthandCompacting: false,
					roundingPrecision: -1
				},
				files: [{
					expand: true,
					cwd: 'dist/assets/styles',
					src: [
						'*.css',
						'!*.min.css'
					],
					dest: 'dist/assets/styles',
					ext: '.min.css'
				}]
			}
		},

		jade: {
			dist: {
				options: {
					data: {
						debug: false
					}
				},
				files: [{
					cwd: 'templates/pages',
					src: ['**/*.jade'],
					dest: 'dist',
					expand: true,
					ext: '.html'
				}]
			}
		},

		prettify: {
			options: {
				brace_style: 'expand',
				indent: 1,
				indent_char: '	',
				condense: true,
				indent_inner_html: true
			},
			all: {
				expand: true,
				cwd: 'dist',
				ext: '.html',
				src: ['**/*.html', '!index.html'],
				dest: 'dist'
			},
		},

		concat: {
			options: {
				separator: ';',
			},
			script: {
				src: [
					'js/libs/*.js',
					'common.js'
				],
				dest: 'dist/assets/scripts/common.js'
			}
		},

		uglify: {
			dist: {
				src: 'dist/assets/scripts/common.js',
				dest: 'dist/assets/scripts/common.min.js'
			}
		},

		copy: {

			fonts: {
				files: [{
					expand: true,
					cwd: 'webfont/',
					src: ['*'],
					dest: 'dist/assets/fonts',
					filter: 'isFile'
				}]
			},

			svg: {
				files: [{
					expand: true,
					cwd: 'images/new_design/svg',
					src: ['*.svg'],
					dest: 'dist/assets/images/svg',
					filter: 'isFile'
				}]
			}
		},

		browserSync: {
			bsFiles: {
				src : 'dist/**/*'
			},
			options: {
				server: {
					baseDir: "dist",
				},
				watchTask: true,
				open: false,
			}
		},

		watch: {

			sprite: {
				files: ['images/new_design/sprite/**/*.png'],
				tasks: ['sprite']
			},

			imagemin: {
				files: ['images/new_design/**/*.{png,jpg,gif}', '!images/new_design/sprite/**/*'],
				tasks: ['newer:imagemin']
			},

			styleDev: {
				files: [
					'css/new_design/**/*.less',
					'!css/new_design/ie8/**/*.less',
					'!css/new_design/ie7/**/*.less',
				],
				tasks: ['less:dev', 'autoprefixer:dist', 'csscomb']
			},

			styleIe8: {
				files: ['css/new_design/ie8/**/*.less'],
				tasks: ['less:ie8', 'autoprefixer:ie8', 'csscomb']
			},

			styleIe7: {
				files: ['css/new_design/ie7/**/*.less'],
				tasks: ['less:ie7', 'autoprefixer:ie7', 'csscomb']
			},

			jade: {
				files: ['templates/pages/**/*.jade', 'templates/blocks/**/*.jade', 'templates/partials/**/*.jade'],
				tasks: ['newer:jade', 'newer:prettify']
			},

			jadePartials: {
				files: ['templates/**/*.jade', '!templates/pages/**/*.jade'],
				tasks: ['jade', 'newer:prettify']
			},

			copyFonts: {
				files: ['webfont/*'],
				tasks: ['newer:copy:fonts']
			},

			copySVG: {
				files: ['images/new_design/svg/*.svg'],
				tasks: ['newer:copy:svg']
			},

			livereload: {
				options: {
					livereload: true
				},
				files: ['dist/**/*']
			}
		}
	});


	// Загрузка плагинов, установленных с помощью npm install
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});

	// Задача по умолчанию
	grunt.registerTask('build', [
		'clean',
		'sprite',
		'imagemin',
		'less',
		'autoprefixer',
		'jade',
		'prettify',
		'concat',
		'copy'
	]);

	grunt.registerTask('default', [
		'build',
		'browserSync',
		'watch'
	]);

	grunt.registerTask('min', [
		'uglify',
		'cssmin',
	]);
}





