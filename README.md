# Vue 搭建 TIM app

> 心动不如行动，学习 Vue 从第一个项目开始！

## 采坑
> 引入 iconfont 报错
```
# 归根结底还是 url-loader 路径的问题
# webpack 打包后，所有资源文件都在 public 下，我们在 css 中写的相对路径就不对了
# 解决办法：已打包后路径的思维模式 编写路径 
# 相对路径
url(../fonts/iconfont.eot)
# 改成
url(./assets/fonts/iconfont.eot)

```

> npm run build后，打开浏览器一片空白
```
# webpack编译输出的发布路径
# 将 build 的路径前缀修改为 ' ./ '（原本为 ' / '），是因为打包(npm run build)之后，
# 外部引入 js 和 css 文件时，如果路径以 ' / ' 开头，在本地是无法找到对应文件的（服务器上没问题）
config => index.js => build:
assetsPublicPath的值 改为   "./"

```

> 用 v-for 循环组件时，切记添加 key
```
<item-friend v-for="(item, index) in getData" :key="index">{{ item }}</item-friend>
```

> img src 动态引入
```
<img :src="'../../assets/images/photos/' + friend.photo">
```
> img引用的是静态文件下的资源，不会被webpack编译，报404错误
> 应改为
```
<img :src="resetPhoto(friend.photo)" alt="">

methods: {
	resetPhoto(src){
		return require('../../assets/images/photos/' + src);
	}
}
```

## notes
> chrome 中 rem 的最小值为12px 
> 在调试时以 rem 为基准的尺寸，最好到移动端浏览器上测试



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
