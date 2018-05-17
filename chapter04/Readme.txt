NPM

1.
https://www.npmjs.com/

2.NPM command
npm -v
npm install ModuleName
npm uninstall ModuleName
npm list
npm info
npm install jquery@1.8.0



3.package.json
npm init  或 npm init -yes
安装模块并且写入package.json
npm install ModuleName --save       （自动更新dependencies字段值）
npm install ModuleName --save-dev   （自动更新devDependencies字段值）


4.安装淘宝镜像
http://www.npmjs.org npm包官网
https://npm.taobao.org/  淘宝 npm 镜像官网
npm install -g cnpm --registry=https://registry.npm.taobao.org