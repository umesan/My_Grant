# Windows7 64bit の場合

grunt-contrib-imageminでは「jpegtran」という JPEG ファイル最適化ツールを使っているとのことだが、
どうもこれのインストールが Windows7 の64bit版だと npm install 時にうまくインストールされないようです。
(2014/01/09 現在 grunt-contrib-imagemin v0.4.1 )

「jpegtran」の公式サイトにはwin64bit 版がないようで、Windows7環境では下記もインストールできませんでした。
>http://jpegclub.org/jpegtran/
>  → Windows binary compilation: jpegtran.exe or packed jpegtran.zip. からダウンロード可能

jpegtran, 64bit, インストール　等をキーワードにして検索をかけたところ、

下記サイトが引っかかり、このサイトを参考にしたところJPEG圧縮ができました。
https://github.com/yeoman/node-jpegtran-bin

1. libjpeg-turbo-1.3.0-gcc.exe というファイルをダウンロード
	http://sourceforge.net/projects/libjpeg-turbo/files/
		→　Download libjpeg-turbo-1.3.0-gcc.exe (1.2 MB)
2. ダウンロードしたexeを実行、インストールディレクトリ内（ 例 C:\libjpeg-turbo-gcc ）の/bin/ に移動し、
	jpegtran.exe と libjpeg-62.dll をコピーする
3. npm install した、「grunt-contrib-imagemin」が配置されているディレクトリの
　	\grunt-contrib-imagemin\node_modules\jpegtran-bin\vendor\　内に、コピーしたファイルを上書き
4. この状態でimageminのタスクを走らせると実行できました。
5. 一度上記作業で「jpegtran」がインストールされると、2度目以降はこの作業は不要になります。
