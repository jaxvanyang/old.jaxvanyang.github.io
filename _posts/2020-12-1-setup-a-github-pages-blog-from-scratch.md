---
title:  "从 0 开始配置一个 Github Pages 博客"
date: 2020-12-01 03:00:00 +0800
tags: 笔记 Github Pages
---

> 最快的配置方式是 *fork* 一个别人的仓库，然后在它的基础上进行修改。  
> 你可以参考一下我的[仓库](https://github.com/JaxVanYang/jaxvanyang.github.io)  
> 如果你不幸发现几个 `BUG`，可以到我的仓库提交 `issue` 来通知我  
> 另外也欢迎提建议 :)  

## **警告**
___

1. **不要在配置文件中使用 `Tab 制表符`**

    这将造成解析错误，或倒回默认设置。请使用空格替代。  

<br>

## **第一步：安装依赖**
___

以下是安装所要执行的命令：  

{% highlight bash linenos %}
# 安装 Ruby 和其他的依赖
sudo apt-get install ruby-full build-essential zlib1g-dev

# 配置环境变量
# 如何你使用的是其他的 shell，比如 zsh，将“.bashrc”更换为”.zshrc“或其他的 shell 配置文件名
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# 安装 jekyll 和 bundler
gem install jekyll bundler
{% endhighlight %}

详情请参考：[Creating a GitHub Pages site with Jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll#creating-your-site)  

<br>

## **第二步：初始化工作目录**
___

1. 创建一个空目录：  

    ```bash
    mkdir test
    cd test
    ```

2. 生成默认 `Gemfile`：  

    ```bash
    bundle init
    ```

3. 添加 `jekyll` 到 `Gemfile`：  

    ```bash
    # 注意箭头使用的是波浪号“～”，你也可以使用 vim 修改 Gemfile
    echo 'gem "jekyll", "~> 3.9.0"' >> Gemfile
    ```

4. 生成 `jekyll` 配置文件：

    ```bash
    # 需要先用 bundle 安装所需包，报错的话执行以下代码
    bundle install
    bundle update
    # “-f”表示强制生成，因为当前目录不为空，而 jekyll 又需要 Gemfile
    # 运行后 Gemfile 会被覆盖，但是 gem "jekyll", "~> 3.9.0" 会保留
    bundle exec jekyll new -f .
    ```

5. 为 `bundle` 添加 `jekyll`：  

    ```bash
    bundle add jekyll
    ```

6. 测试：  

    ```bash
    # 启动 jekyll 网站服务
    # 之后可以到浏览器输入 <localhost:4000> 查看博客
    bundle exec jekyll serve
    ```

<br>

## **第三步：添加页面或文章**
___

1. 在默认主题下的添加十分简单，按照[官方文档](https://docs.github.com/cn/free-pro-team@latest/github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll)操作即可,也就是只要把*新文章*放到 `_posts` 里，把*新页面*放到 `网站根目录`。

2. 如果你更换了主题，添加页面的方式可能会更改，因为各个主题所提供的布局文件不尽相同，并且不是所有的主题都会提供自动更新的主页布局。  

    所以解决办法就是自己编写主页布局，或者写一个主页。  

<br>

## **第四步：更换主题**
___

更换主题其实也十分简单，只需要在 `GitHub` 上选择就行，但这样你可能会惊喜地发现你的博客主页变成了空白，页面的格式也变得一塌糊涂。所以接下来我们就来看看如何优雅地切换主题，并在本地测试。

1. **指定主题（以 `hacker` 为例）**

    1. 修改 `_config.yml` 中的 `theme` 项：  

        ```yml
        # 注释掉默认主题，再指定主题
        # theme minima
        theme jekyll-theme-hacker
        ```

    2. 添加 `jekyll-theme-hacker` 到 `Gemfile`:  

        ```bash
        echo 'gem "jekyll-theme-hacker"' >> Gemfile
        ```

2. **修改头信息**  

    因为 `hacker` 只包含 `default` 和 `post` 默认布局，而没有 `home` 和 `page` 默认布局，所以你需要修改引用了 `home` 的 `index.md` 和 引用了 `page` 的 `about.md` 的头信息：

    ```text
    ---
    # layout: page
    layout: default
    ---
    ```

3. **修改主页或编写布局**

    由于 `hacker` 提供的布局不会自动包含*页面*和*文章*，你需要自己编写布局文件，或重写主页文件 `index.md`（现在应该还是空的）。

    编写布局文件请参考 [Layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/)  

    编写主页你可以参考 [Blogging](https://jekyllrb.com/docs/step-by-step/08-blogging/)  

    以下给出一个主页文件 `index.html` 的示例：  

    {% highlight html linenos %}
    ---
    layout: default
    title: Blog
    ---
    <h1>Latest Posts</h1>

    <ul>
    {% raw %}{% for post in site.posts %}
        <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.excerpt }}
        </li>
    {% endfor %}{% endraw %}
    </ul>
    {% endhighlight %}

    上述代码使用了 `Liquid` 模板，会生成一个包括了 `_posts` 目录下所有文章的静态页面。

4. **测试**

    ```bash
    bundle exec jekyll serve
    ```

    如果报错按照错误信息操作即可，一切顺利的话，打开 <localhost:4000> 应该会看到以下界面：  

    ![网站截图](/assets/images/screenshoot.png)

5. **完善网站**

    之后你就可以正常地添加文章和修改网站样式，如果想要深入学习，强烈推荐 `jekyll` 的官方教程 [Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)

<br>

## **第五步：部署到 Github**
___

在部署之前你需要按照提示修改 `Gemfile` 文件：  
{% highlight yml linenos %}
# gem "jekyll", "~> 3.9.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins
{% endhighlight %}

先推送到一个现有的 `Github` 仓库，并且开启 `Github Pages`，选择网站的源目录，然后你的网站应该就能成功部署了。  

详细教程请看：[Creating a GitHub Pages site with Jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll#creating-your-site)

<br>

## **提示**
___

1. 现在的 `jekyll` 支持热更新，你可以在启动服务后修改文件（不包括 `_config.yml`），并实时查看博客修改。  

<br>

## **最佳实践**
___

1. **在 `_config.yml` 中指定文件编码**

    ```yml
    encoding: UTF-8
    ```

2. **在 `_config.yml` 中设置默认头信息**

    {% highlight yml linenos %}
    defaults:
      -
        scope:
          path: ""    # 一个空的字符串代表项目里的所有文件
          type: "posts"   # 指定类型为 post
        values:
          layout: "my-site"
      -
        scope:
          path: "projects"  # 代表目录 projects/
          type: "pages" # 以前的 `page`， 在 Jekyll 2.2 里。
        values:
          layout: "project" # 覆盖之前的默认布局
          author: "Mr. Hyde"
    {% endhighlight %}

3. **在头信息里自定义变量，然后就可以在 `Liquid` 模板中被调用**  

    下面的示例就用到了自定义的 `title` 变量：  

    {% highlight html linenos %}
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>{{ page.title }}</title>
        </head>
        <body>
        ...
    {% endhighlight %}

4. **使用 `post_url` 标签链接到其他博文**  

5. **自定义摘要**  

    `Jekyll` 会自动取每篇文章从开头到第一次出现 `excerpt_separator` 的地方作为文章的摘要，并将此内容保存到变量 `post.excerpt` 中。  
    如果你不喜欢自动生成摘要，你可以在文章的 `YAML` 头信息中增加 `excerpt` 来覆盖它。另外，你也可以选择在文章中自定义一个 `excerpt_separator`:  

    {% highlight yml linenos %}
    ---
    excerpt_separator: <!--more-->
    ---

    Excerpt
    <!--more-->
    Out-of-excerpt
    {% endhighlight %}

6. **使用 `Liquid` 模板嵌入带行号的高亮代码**

    {% highlight ruby linenos %}
    {% raw %}{% highlight ruby linenos %}
    def show
    @widget = Widget(params[:id])
    respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @widget }
    end
    end
    {% endhighlight %}{% endraw %}
    {% endhighlight %}

7. **使用草稿**

    草稿是没有日期的文章。它们是你还在创作中而暂时不想发表的文章。想要开始使用草稿，你需要在网站根目录下创建一个名为 `_drafts` 的文件夹（如在目录结构章节里描述的），并新建你的第一份草稿：  
    ```
    |-- _drafts/
    |   |-- a-draft-post.md
    ```
    为了预览你拥有草稿的网站，运行带有 `--drafts` 配置选项的 `jekyll serve` 或者 `jekyll build`。此两种方法皆会将该草稿的修改时间赋值给草稿文章，作为其发布日期，所以你将看到当前编辑的草稿文章作为最新文章被生成。  

8. **使用 `permalink` 获取干净的 `URL`**  

<br>

## **手册**
___

1. [Jekyll 的常用变量](http://jekyllcn.com/docs/variables/)

<br>

## **参考**
___
[Creating a GitHub Pages site with Jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll#creating-your-site)  

[使用 Jekyll 向 GitHub Pages 站点添加内容](https://docs.github.com/cn/free-pro-team@latest/github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll)  

[Step by Step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)  

[Error upon `bundle exec jekyll 3.8.7 new .` for Github Pages](https://talk.jekyllrb.com/t/error-upon-bundle-exec-jekyll-3-8-7-new-for-github-pages/4561)  
