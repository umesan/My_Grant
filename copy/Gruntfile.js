/**
 * Grunt.js - grunt-contrib-copy
 *  [Update]
 *    - 2014/01/14
 *
 *  [Description]
 *    対象ファイル・ディレクトリをコピーする
 *    コピー先に対象のファイルやディレクトリが存在する場合は上書きします
 *    
 *  [Required Module]
 *    - grunt-contrib-copy
 *    
 *  [Official URL]
 *    - https://github.com/gruntjs/grunt-contrib-copy
 *    
 *  [参考]
 *    - http://iaarchiver.github.io/posts/2013-07-08-2117.html
 */

module.exports = function(grunt) {

	'use strict';

	// --------------------------------------------------------
	// Gruntタスク
	// --------------------------------------------------------
		grunt.initConfig({

			copy: {
				dev: {
					files: [{
						expand: true,						//中間のディレクトリが存在しなければ作成するか？
						cwd: 'sample1',						//コピー対象
						src: '**/*',						//コピー対象の絞込み　例：画像だけの場合、src: '**/*.{jpg,gif}'
						dest: 'sample1_copy'				//コピー先
					}]
				},
				release: {
					files: [{
						expand: true,
						cwd: 'sample2',
						src: '**/*',
						dest: 'sample2_copy'
					}]
				}
			}

		});

	// --------------------------------------------------------
	// モジュールのロード
	// --------------------------------------------------------
		grunt.loadNpmTasks('grunt-contrib-copy');

	// --------------------------------------------------------
	// タスク登録
	// --------------------------------------------------------
		// [grunt] デフォルトは、devのタスクを実行
		grunt.registerTask('default', ['copy:dev']);

		// [grunt d] devのタスクを実行
		grunt.registerTask('d', ['copy:dev']);

		// [grunt r] releaseのタスクを実行
		grunt.registerTask('r', ['copy:release']);

};
