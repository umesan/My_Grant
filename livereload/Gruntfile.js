/**
 * Grunt.js - livereload
 *  [Update]
 *    - 2014/01/14
 *
 *  [Description]
 *    対象ファイルを更新した際に、ブラウザをリロードする
 *    
 *  [Required Module]
 *    - grunt-contrib-watch
 *    - grunt-contrib-connect
 *    
 *  [Official URL]
 *    - https://github.com/gruntjs/grunt-contrib-watch
 *    - https://github.com/gruntjs/grunt-contrib-connect
 *    
 *  [参考]
 *    - http://ledsun.hatenablog.com/entry/2013/11/28/181035
 */

module.exports = function(grunt) {

	'use strict';

	// --------------------------------------------------------
	// Gruntタスク
	// --------------------------------------------------------
		grunt.initConfig({

			// 監視対象
			watch: {
				dev:{
					files: 'htdocs/*', //監視したいディレクトリ／ファイルを指定
					options: {
						livereload: true //livereloadをON
					}
				},
				release:{
					files: 'htdocs/*',
					options: {
						livereload: true
					}
				}
			},

			// 自動リロード
			connect: {
				server: {
					options: {
						port: 8081,		// ポート番号
						base: 'htdocs' // ルートとみなす、対象ディレクトリ
					}
				}
			}

		});

	// --------------------------------------------------------
	// モジュールのロード
	// --------------------------------------------------------
		grunt.loadNpmTasks("grunt-contrib-watch");
		grunt.loadNpmTasks('grunt-contrib-connect');


	// --------------------------------------------------------
	// タスク登録
	// --------------------------------------------------------
		// [grunt] デフォルトは、watch:devのタスクを実行
		grunt.registerTask('default', ['connect','watch:dev']);

		// [grunt d] devのタスクを実行
		grunt.registerTask('d', ['connect','watch:dev']);

		// [grunt r] releaseのタスクを実行
		grunt.registerTask('r', ['connect','watch:release']);

};
