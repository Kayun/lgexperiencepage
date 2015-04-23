// Обязательная обёртка
module.exports = function(grunt) {

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
				files: [
					{
						expand: true,
						cwd: 'images/new_design/',
						src: ['**/*.{png,jpg,gif}', '!sprite/**/*.png'],
						dest: 'dist/assets/images',
					},
				],
			},
		},

		less: {
			development: {
				options: {
					paths: ['css/new_design'],
				},
				files: {
					'dist/assets/styles/common.css' : 'css/new_design/common.less'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9']
			},
			dist: {
				src: 'dist/assets/styles/common.css'
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

		copy: {
			/*images: {
				files: [{
					expand: true,
					cwd: 'images/new_design/',
					src: ['*.{png,jpg,gif}'],
					dest: 'dist/assets/images',
					filter: 'isFile'
				}]
			},*/

			fonts: {
				files: [{
					expand: true,
					cwd: 'webfont/',
					src: ['*'],
					dest: 'dist/assets/fonts',
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

			style: {
				files: ['css/**/*.less'],
				tasks: ['less', 'autoprefixer']
			},

			jade: {
				files: ['templates/pages/**/*.jade', 'templates/blocks/**/*.jade', 'templates/partials/**/*.jade'],
				tasks: ['newer:jade', 'newer:prettify']
			},

			jadePartials: {
				files: ['templates/**/*.jade', '!templates/pages/**/*.jade'],
				tasks: ['jade', 'newer:prettify']
			},

			copyFomts: {
				files: ['webfont/*'],
				tasks: ['newer:copy:fonts']
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
		'copy'
	]);

	grunt.registerTask('default', [
		'build',
		'browserSync',
		'watch'
	]);
}





