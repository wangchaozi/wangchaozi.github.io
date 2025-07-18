## 1.说说对 HTML 语义化的理解

我理解的语义化，就是在正确的地方用正确的html标签，是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。

常用的语义化标签如下：

```html
<header></header>  头部
<nav></nav>  导航栏
<section></section>  区块（有语义化的div）
<main></main>  主要区域
<article></article>  主要内容
<aside></aside>  侧边栏
<footer></footer>  底部
```

语义化的优点：

- 在没有CSS样式情况下也能够让页面呈现出清晰的结构；
- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；
- 对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

## 2.块级元素和行内元素的特点，如何转换？

块级元素和行内元素都是对标签的分类，核心区别就是如何占据页面。

常用的块级元素和行内元素如下：

```html
// 块级元素
<div>、<p>、<h1>~<h6>、<ul>、<ol>、<li>、<form>、<header>、<footer>、<main>
// 行内元素
<a>、<span>、<img>、<input>、<label>、<select>、<textarea>、<button>、<br>、<i>、<em>、<strong>
```

块级元素特点：

- 总是在新行上开始，既每个块级元素独占一行，默认从上到下排列。
- 默认宽度是父级元素的百分之百，可以独立设置宽度。
- 高度，行高，及其margin和padding都是可以手动设置的。
- 块级元素可以容纳其他行级元素和块级元素。

行内元素特点：

- 和其他元素会在一行显示，直到宽度不足才会挤到下一行去显示。
- 高度和宽度无法通过width和height设置。
- margin和height设置左右有效，上下无效
- 行内元素只能补充文本或行内元素

补充：行内块元素：

- 不独占一行，但是可以设置宽高之类，相当于，只有行内的一个特点，其他的特点都是块的特点。

## 3.HTML5 有哪些新元素和新特性？

1. 语义化标签的添加，看1。

2. 新的媒体标签

   1. audio：音频

      ```html
      <audio src='' controls autoplay loop='true'></audio>
      controls 控制面板
      autoplay 自动播放
      loop=‘true’ 循环播放
      ```

   2. video视频

      ```html
      <video src='' poster='imgs/aa.jpg' controls></video>
      poster：指定视频还没有完全下载完毕，或者用户还没有点击播放前显示的封面。默认显示当前视频文件的第一针画面，当然通过poster也可以自己指定。
      controls 控制面板
      width
      height
      ```

   3. source标签 因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过source来指定视频源。

      ```html
      <video>
       	<source src='aa.flv' type='video/flv'></source>
       	<source src='aa.mp4' type='video/mp4'></source>
      </video>
      ```

3. 表单

   1. **表单类型：**
      - email ：能够验证当前输入的邮箱地址是否合法
      - url ： 验证URL
      - number ： 只能输入数字，其他输入不了，而且自带上下增大减小箭头，max属性可以设置为最大值，min可以设置为最小值，value为默认值。
      - search ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。
      - range ： 可以提供给一个范围，其中可以设置max和min以及value，其中value属性可以设置为默认值
      - color ： 提供了一个颜色拾取器
      - time ： 时分秒
      - data ： 日期选择年月日
      - datatime ： 时间和日期(目前只有Safari支持)
      - datatime-local ：日期时间控件
      - week ：周控件
      - month：月控件
   2. **表单属性：**
      - placeholder ：提示信息
      - autofocus ：自动获取焦点
      - autocomplete=“on” 或者 autocomplete=“off” 使用这个属性需要有两个前提：
        - 表单必须提交过
        - 必须有name属性。
      - required：要求输入框不能为空，必须有值才能够提交。
      - pattern=" " 里面写入想要的正则模式，例如手机号patte="^(+86)?\d{10}$"
      - multiple：可以选择多个文件或者多个邮箱
      - form=" form表单的ID"
   3. **表单事件：**
      - oninput 每当input里的输入框内容发生变化都会触发此事件。
      - oninvalid 当验证不通过时触发此事件。

4.  进度条、度量器

5. DOM查询操作

   - document.querySelector()
   - document.querySelectorAll()

6. Web存储

   - localStorage - 没有时间限制的数据存储
   - sessionStorage - 针对一个 session 的数据存储

7. canvas和svg，拖放

## 4.DOCTYPE 的作用是什么？

`Doctype`是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档。在浏览器发展的过程中，HTML出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为`怪异模式`，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的`bug`，所以文档声明是必须的。

1. **CSS1Compat：标准模式（Strick mode）**，默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
2. **BackCompat：怪异模式(混杂模式)(Quick mode)**，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

## 5.src 和 href 的区别

src和href都是**用来引用外部的资源**，它们的区别如下：

- **src：** 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。
- **href：** 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。

## 6.常⽤的meta标签有哪些（viewport）

`meta` 标签由 `name` 和 `content` 属性定义，**用来描述网页文档的属性**，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些`name`作为大家使用的共识，开发者还可以自定义name。<meta>标签的用途是提供关于 HTML 文档的元数据。元数据指的是那些不会在网页上直接显示，却能为浏览器（比如如何显示内容或者刷新页面）、搜索引擎（像 SEO 相关信息）以及其他网络服务提供指引的数据。常用的meta标签： 

（1）`charset`，用来描述HTML文档的编码类型：

```html
<meta charset="UTF-8" >
```

（2） `keywords`，页面关键词：

```html
<meta name="keywords" content="关键词" />
```

（3）`description`，页面描述：

```html
<meta name="description" content="页面描述内容" />
```

（4）`refresh`，页面重定向和刷新：

```html
<meta http-equiv="refresh" content="0;url=" />
```

（5）`viewport`，适配移动端，可以控制视口的大小和比例：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

其中，`content` 参数有以下几种：

- `width viewport` ：宽度(数值/device-width)
- `height viewport` ：高度(数值/device-height)
- `initial-scale` ：初始缩放比例
- `maximum-scale` ：最大缩放比例
- `minimum-scale` ：最小缩放比例
- `user-scalable` ：是否允许用户缩放(yes/no）

（6）搜索引擎索引方式：

```html
<meta name="robots" content="index,follow" />
```

其中，`content` 参数有以下几种：

- `all`：文件将被检索，且页面上的链接可以被查询；
- `none`：文件将不被检索，且页面上的链接不可以被查询；
- `index`：文件将被检索；
- `follow`：页面上的链接可以被查询；
- `noindex`：文件将不被检索；
- `nofollow`：页面上的链接不可以被查询。

## 7.前端页面的三层结构

**结构层（structural layer）：HTML**

结构层类似于盖房子需要打地基以及房子的悬梁框架，它是由HTML超文本标记语言来创建的，也就是页面中的各种标签，在结构层中保存了用户可以看到的所有内容，比如说：一段文字、一张图片、一段视频等等

**表示层（presentation layer）：CSS**

表示层是由CSS负责创建，它的作用是如何显示有关内容，学名：`层叠样式表`，也就相当于装修房子，看你要什么风格的，田园的、中式的、地中海的，总之CSS都能办妥

**行为层（behaviorlayer）：JavaScript**

行为层表示网页内容跟用户之间产生交互性，简单来说就是用户操作了网页，网页给用户一个反馈，这是`JavaScript`和`DOM`主宰的领域

三层结构的优势：

- **可维护性**：各层分工明确，修改样式或交互逻辑时，不会对网页结构造成影响。
- **可扩展性**：能够独立对某一层进行扩展，比如添加新的样式或者交互功能。
- **可访问性**：合理的 HTML 结构有助于屏幕阅读器等辅助设备理解网页内容，方便残障人士使用。
- **性能优化**：可以针对各层分别进行性能优化，例如压缩 CSS、懒加载 JavaScript 等。

## 8.Canvas 和 SVG 的区别



## 9.iframe 的优缺点

## 10.Web Worker 的作用

## 11.渐进增强和优雅降级的区别

## 12.HTML5 离线存储原理

## 13.srcset 属性的作用

## 14.浏览器乱码的原因及解决方法

## 15.HTML5 拖放 API（Drag & Drop）

## 16.Web Components 的理解

## 17.如何优化 HTML 性能？

## 18.SEO 友好的 HTML 结构设计

## 19.HTML 中的跨域问题

## 20.`<script>`标签中 defer 和 async 的区别

## 21.`<template>`标签的作用

## 22.HTML 实体编码的作用

## 23.如何实现响应式 HTML 结构？