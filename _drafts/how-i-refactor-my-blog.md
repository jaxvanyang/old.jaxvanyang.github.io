---
title: 我是如何重构博客的
---

## 1. 确定要实现的功能
- [x] 排除 `README.md`  
- [ ] 添加翻页功能  
- [ ] 添加分类  
    1. 最新文章  
    2. 环境配置  
    3. 语言学习  
- [ ] 添加显示模式切换  
- [ ] 添加文章目录  
- [ ] 掌控布局  
    1. 消除网页开头的外边距  

## 要注意的地方
1. `page.url` 变量不包含域名，但是有一个前导斜杠，例如：`/2008/12/14/my-post.html`  
2. [Jekyll 的目录结构](https://jekyllrb.com/docs/structure/)，注意文件要分门别类  
3. 在主目录以 `,`、`_`、`#` 或 `~` 开头的文件或目录不会被复制到生成的目录里
，除非在配置文件里显式指定  

## 日志
1. Jekyll 存储的链接变量是不包含域名的，默认在域名内跳转：  
    ```html
    <!-- 源码 -->
    <a href="{{ item.link }}" {% if page.url == item.link %}class="current"{% endif %}>
        {{ item.name }}
    </a>
    <!-- localhost -->
    <a href="/test/" {% if page.url == /test/ %}class="current"{% endif %}>
        {{ item.name }}
    </a>
    <!-- GitHub Pages -->
    <a href="/test/" {% if jekyll-site/test/ == /test/ %}class="current"{% endif %}>
        {{ item.name }}
    </a>
    ```

2. 删除了所有文章里显式指定布局的指令 `layout: post`  

3. 删除了所有文章里不必要的指定作者的指令 `author: Jax`  

