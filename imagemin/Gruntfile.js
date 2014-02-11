/**
 * Grunt.js - imagemin
 * 	[Update]
 * 		- 2014/01/10
 *
 * 	[Description]
 * 		grunt-contrib-imagemin と grunt-contrib-watch を使って
 * 		対象ディレクトリに配置された画像ファイル(png/jpg)を画質調整します
 *
 * 		画質調整のツールは下記。
 * 		pngは OptiPNG, pngquant
 * 		jpgは jpegtran
 * 
 * 		画質調整したファイルは、上書きするか、別ディレクトリに出力するかを選択可能
 * 		grunt ／ 別ディレクトリ
 * 		grunt o ／ 上書き
 * 		
 * 	[Required Module]
 * 		- grunt-contrib-watch
 * 		- grunt-contrib-imagemin
 * 		
 * 	[Official URL]
 * 		- https://github.com/gruntjs/grunt-contrib-imagemin
 * 		
 * 	[参考URL]
 * 		- http://makoto-tanaka.com/javascript/3308/
 * 		- http://www.skyward-design.net/blog/archives/000165.html
* 	
 * 	[Attention]
 * 		- Windows7 64bit 環境の場合は、下記ディレクトリ内のREADME.mdを参照ください
 * 			_README_for_Windows7_64bit
 * 				README.md
 * 
 */

module.exports = function(grunt) {

	'use strict';

	// --------------------------------------------------------
	// Gruntタスク
	// --------------------------------------------------------
		grunt.initConfig({
			watch: {
				options: {
					nospawn: true,
					livereload: true
				},

				// 別ディレクトリに出力
				imageminExport: {
					files: ['img/*.png', 'img/*.jpg'],
					tasks: ['imagemin:export'],
					options: {
						event: ['added', 'changed'],
						livereload: false
					}
				},

				// 上書き
				imageminOverWrite: {
					files: ['img/*.png', 'img/*.jpg'],
					tasks: ['imagemin:overWrite'],
					options: {
						event: ['added', 'changed'],
						livereload: false
					}
				}
			},
			imagemin: {
				// 別ディレクトリに出力
				export: {
					optimizationLevel: 7,			// Min:0, Max:7
					pngquant:true,					// true,false
					files: [{
						expand: true,				// Enable dynamic expansion
						cwd: './img/',				// Before Img Folder
						dest: './img_after/',		// After Img Folder
						src: ['**/*.{png,jpg}']		// Target File
					}]
				},
				// 上書き
				overWrite: {
					optimizationLevel: 7,
					pngquant:true,
					files: []
				}
			}
		});


	// --------------------------------------------------------
	// モジュールのロード
	// --------------------------------------------------------
		// ディレクトリ監視
		grunt.loadNpmTasks("grunt-contrib-watch");

		// 画像圧縮
		grunt.loadNpmTasks('grunt-contrib-imagemin');

	// --------------------------------------------------------
	// タスク登録
	// --------------------------------------------------------
		// [grunt] デフォルトは、別ディレクトリ出力
		grunt.registerTask('default', ['watch:imageminExport']);

		// [grunt e] 別ディレクトリに出力
		grunt.registerTask('e', ['watch:imageminExport']);

		// [grunt o] 上書き
		grunt.registerTask('o', ['watch:imageminOverWrite']);


	// --------------------------------------------------------
	// watchが発生した際に、変更ファイルを、imagemin:overWrite に渡す
	// --------------------------------------------------------
		var changedFiles = Object.create(null);
		var onChangeImage = grunt.util._.debounce(function() {
			var filesArray, paths;
			paths = Object.keys(changedFiles);
			filesArray = [];
			paths.forEach(function(path) {
				filesArray.push({
					src: path,
					dest: path
				});
			});

			grunt.config(['imagemin', 'overWrite', 'files'], filesArray);
			changedFiles = Object.create(null);

		}, 200);

		grunt.event.on('watch', function(action, filepath) {
			changedFiles[filepath] = action;
			if (/\.(png|jpg)$/.test(filepath)) {
				onChangeImage();
			}
		});

};