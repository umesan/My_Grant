/**
 * Grunt.js - grunt-contrib-clean
 *  [Update]
 *    - 2014/01/14
 *
 *  [Description]
 *    対象ディレクトリを削除する（対象ディレクトリ内ではなく、ディレクトリそのものを削除）
 *    
 *  [Required Module]
 *    - grunt-contrib-clean
 *    
 *  [Official URL]
 *    - https://github.com/gruntjs/grunt-contrib-clean
 * 
 */

module.exports = function(grunt) {

	'use strict';

	// --------------------------------------------------------
	// Gruntタスク
	// --------------------------------------------------------
		grunt.initConfig({

			clean:{
				dev: [
					'sample1'
				],
				release: [
					'sample2'
				]
			},

		});

	// --------------------------------------------------------
	// モジュールのロード
	// --------------------------------------------------------
		grunt.loadNpmTasks('grunt-contrib-clean');

	// --------------------------------------------------------
	// タスク登録
	// --------------------------------------------------------
		// [grunt] デフォルトは、devのタスクを実行
		grunt.registerTask('default', ['clean:dev']);

		// [grunt d] devのタスクを実行
		grunt.registerTask('d', ['clean:dev']);

		// [grunt r] releaseのタスクを実行
		grunt.registerTask('r', ['clean:release']);

};
