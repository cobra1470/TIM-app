# Vue 搭建 TIM app

> 心动不如行动，学习 Vue 从第一个项目开始！
> 手机预览
![avatar](https://github.com/cobra1470/TIM-app/tree/master/static/images/QR-code.png)

## 采坑

### npm run build后，打开浏览器一片空白
> webpack编译输出的发布路径
> 将 build 的路径前缀修改为 ' ./ '（原本为 ' / '），是因为打包(npm run build)之后，外部引入 js 和 css 文件时，如果路径以 ' / ' 开头，在本地是无法找到对应文件的（服务器上没问题）
```
config => index.js => build:
assetsPublicPath: './'
```

### 用 v-for 循环组件时，切记添加 key**
```
<item-friend v-for="(item, index) in getData" :key="index">{{ item }}</item-friend>
```

### url-loader 路径问题
> webpack 打包后的结构
```
dist
  --static
    --css
      --xxx.css
    --images
      --x.png
    --js
	--index.html
```
#### 1、源码结构一 (css/images/fonts 等资源放在 assets 目录下)
```
src
  --assets
    --scss
      --common.scss
    --images
      --x.png
    --fonts
  --components
    --common
    --page
      ---home.vue
  --router
  --App.vue
  --main.js
static
```
#### a)=> home.vue 中通过 url 引用
> *使用开发环境的相对路径即可 ../../assets/ 会被编译成 ../../static/*
```
$el{
        background: url('../../assets/images/x.png') no-repeat;
    }
```
> b)=> common.scss 中通过 url 引用
> *./assets/ 会被编译为 ../../static/*
> **
```
$el{
        background: url('./assets/images/bg-header.png') no-repeat;
    }
```
#### c)=> home.vue 中通过 src 动态引用
```
// 模拟动态引用
let _img = {
	a: "x.png"
}
<img :src="'../../assets/images/' + _img.a">
```
> 报404错误：img引用的是静态文件下的资源，不会被 webpack 编译
> *可以通过 require 的方式引入，这里的路径使用开发环境的相对路径，../../assets/ 会被编译成 ../../static/*
> *注意：这种解决方法会导致 打包的时候 publicPath 与 css 中 url 引入的图片冲突，解决方法在 2-c)*
```
<img :src="resetPhoto(_img.a)">

methods: {
	resetPhoto(src){
		return require('../../assets/images/' + src);
	}
}
```
#### 2、源码结构二 (css/images/fonts 等资源放在 public 目录下)
```
src
  --assets
    --components
      --common
      --page
        --home.vue
  --router
  --App.vue
  --main.js
static
  --scss
  --images
  --fonts
```
#### a)=> home.vue 中通过 url 引用
> *使用开发环境的相对路径即可 ../../../static/ 会被编译成 ../../static/*
```
$el{
        background: url('../../../static/images/x.png') no-repeat;
    }
```
> b)=> common.scss 中通过 url 引用
> *../static/ 会被编译为 ../../static/*
```
$el{
        background: url('../static/images/x.png') no-repeat;
    }
```
#### c)=> home.vue 中通过 src 动态引用
```
// 模拟动态引用
let _img = {
	a: "x.png"
}
<img :src="'../../assets/images/' + _img.a">
```
> 报404错误：img引用的是静态文件下的资源，不会被 webpack 编译
> *直接把 json 中 src 路径修改成编译后的路径*
> *推荐使用这种方式*
```
"photo": "./static/images/photos/03.jpg"
```
> 注：综合上面的问题，推荐把 fonts/image/mock-data 等静态资源放在 static 目录中，js/scss/css 放在 assets 目录中

### 引入 iconfont 报错
> *归根结底还是 url-loader 路径的问题 参照 scss 中 url 引入图片*

### 打包后的文件 url 引入的图片无法获取 
> *添加 publicPath*
```
build => webpack.base.conf.js => rules
// 给 img 的 rules 添加 publicPath: "../../" option
rules: [
	...
	{
		test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		loader: 'url-loader',
		options: {
			limit: 10000,
			name: utils.assetsPath('images/[name].[hash:7].[ext]'),
			publicPath: "../../"
		}
	}, 
]
```

### flex 下文章强制不换行且超出隐藏
> 父级容器加 min-height: 0 当前容器 display: block
```
<div class="box">
    <div class="flex-left">left flex</div>
    <div class="flex-right">This is no warp text </div>
</div>

.box{
    ....
    min-height: 0;
}
flex-right{
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

```

### vue组件中的 v-html 中的 element 不继承样式
> v-html 绑定的内容相当于子组件，当前组件 style 的 scoped 导致 css 仅对当前组件生效
> 解决方法：把 v-html 的样式，写在没有 scoped 的 style 中

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
