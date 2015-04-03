// Обязательная обёртка
module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({

        default:{

        },
        less: {
          development: {
            options: {
              paths: ["css/"]
            },
            files: {
              "css/style.css": "css/style.less"
            }
          }
        },
        watch: {
            files: ['css/style.less', 'css/index.less'],
            tasks: 'less'  // Можно несколько: ['lint', 'concat']
        },

        concat: {
            options: {
              separator: '',
            },
            dist: {
              src: [
                'js/jquery.easing.1.3.js', 
                'js/imagesloaded.pkgd.min.js', 
                'js/bootstrap.min.js',
                'js/skrollr.min.js'
              ],
              dest: 'js/vendor.js',
            },
        }
      
    });




    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Задача по умолчанию
    grunt.registerTask('default',['less', 'concat']);
};





