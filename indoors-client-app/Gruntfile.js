'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    // Project configuration
    grunt.initConfig({
        pkg: pkg,
        app: {
            src: 'src',
            lib: 'lib',
            dist: 'dist'
        },
        clean: {
            dev: [
                '<%= app.dist %>'
            ],
            bower: [
                '<%= app.lib %>/bower_components'
            ]
        },
        ngtemplates: {
            all: {
                cwd: '<%= app.src %>',
                src: '**/*.tpl.html',
                dest: '<%= app.dist %>/scripts/templates.js',
                options: {
                    module: 'ind',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        typings: {
            install: {}
        },
        ts: {
            options: {
                sourceMap: true
            },
            dev: {
                src: [
                    '<%= app.dist %>/ts/common/**/*.ts',
                    '<%= app.dist %>/ts/config/**/*.ts',
                    '<%= app.dist %>/ts/beacon/**/*.ts',
                    '<%= app.dist %>/ts/zone/**/*.ts',
                    '<%= app.dist %>/ts/Main.ts',
                    'typings/main.d.ts'],
                out: '<%= app.dist %>/scripts/build.js'
            }
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON('tslint.json')
            },
            files: {
                src: ['<%= app.src %>/**/*.ts']
            }
        },
        copy: {
            index: {
                expand: true,
                cwd: '<%= app.src %>/',
                src: ['index.html'],
                dest: '<%= app.dist %>/'
            },
            css: {
                expand: true,
                cwd: '<%= app.src %>/_style/',
                src: ['**/*.css'],
                dest: '<%= app.dist %>/style'
            },
            ts: {
                expand: true,
                cwd: '<%= app.src %>/',
                src: ['**/*.ts'],
                dest: '<%= app.dist %>/ts'
            }
        }
    });

    // GruntJS task registration

    grunt.registerTask('build', [
        'clean:dev',
        'tslint',
        'ngtemplates',
        'copy:ts',
        'ts',
        'copy:index',
        'copy:css'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};