module.exports = function(grunt)
{
    grunt.initConfig({

        uglify: {
            dist:{

                src: ['FileOne.js','FileTwo.js'],
                dest: 'Dest/output.min.js'

            }
        }

    });



    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

    grunt.registerTask('sampletask', 'Some task desc', function () {
        grunt.log.writeln('Currently running the Sample task..');

        // exec(node app.js)

    });

}