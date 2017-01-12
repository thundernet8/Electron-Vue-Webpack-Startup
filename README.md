## Electron-Vue-Webpack-Boilerplate

使用Electron、Vue.js2.0、Webpack打包和热加载开发的样板工程，用于快速搭建初始开发环境


## 目录结构

```
 + app                    // 最终打包成Electron资源的文件夹
   + assets               // 字体、图片等资源文件
   + dist                 // Webpack生产环境配置下打包src文件夹输出目录
   - package.json         // 生产环境依赖 dependencies
 + build                  // Webpack配置文件以及其他配置文件存放目录
 + dist                   // Webpack开发环境配置下打包src文件夹输出目录
 + release                // Electron 打包程序输出文件夹，如.dmg、.exe等
 + src                    // 开发源码文件夹
   + main                 // 用于Electron主进程逻辑代码
     + configs
     + services
     - index.js
   + renderer             // 用于Electron渲染进程逻辑代码
     + components
     + models
     + services
     + views
     + vuex
     - index.html
     - index.js
     - routers.js
 + test                   // 测试文件夹
 - package.json           // 开发环境依赖 devDependencies
```

## 命令

```
npm run dev-server        // hot-load server, 会自动运行build-dev

npm run build-dev         // 开发环境配置下build, 资源文件打包至dist

npm run build             // 用于生产环境的build, 资源文件打包至app/dist

...                       // Electron build待添加
```

## 截图

![Screenshot](./screenshot.png)
