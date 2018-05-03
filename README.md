# weapp-adapter-threejs

根据项目需求选择使用 ThreeJS 开发小游戏，在使用 weapp-apapter 的时候遇到了问题，官方宣称不再维护，因此创建这个仓库来维护。

原始代码是从微信官网下载 ：[https://developers.weixin.qq.com/minigame/dev/tutorial/base/adapter.html](https://developers.weixin.qq.com/minigame/dev/tutorial/base/adapter.html)

# 修改记录

- 修复XMLHTTPRequest 调用 addEventListener 出错问题。

# 构建前提

- 安装依赖包   : npm install

# 编译构建

- npm run build : 构建完毕目标文件在 dist 文件夹里，使用的时候 import 即可；