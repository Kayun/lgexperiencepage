//require('/usr/local/lib/node_modules/less/bin/lessc');
// Обязательная обёртка
module.exports = function(grunt) {

	// Задачи
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: ['dist']
		},

		less: {
			development: {
				options: {
					paths: ["css/"]
				},
				files: {
					"dist/assets/styles/common.css" : "css/style.less"
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

			options: {
				livereload: true
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
		'less',
		'autoprefixer',
		'jade',
		'prettify',
	]);

	grunt.registerTask('default', [
		'build',
		'browserSync',
		'watch',
	]);
}





