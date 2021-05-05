---
title: "长沙理工大学 GPA 自动计算爬虫"
date: 2021-05-05 17:00:00 +0800
---

![gpa-calculator]({{ "/assets/images/gpa-calculator-edge.png" | absolute_url }})  

## 简介

该脚本使用 [Edge 浏览器的测试驱动](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)模拟手工访问教务网站，只需要输入帐号密码就可以自动获取课程成绩信息，并计算各学年或学期的 GPA，简单易用。  

还有打包好的[一键查询程序](https://gitee.com/Jaxvanyang/lang-study/releases/csust_gpa_calculator_v0.4)可用，更重要的是完全开源，不用担心安全问题，并且只需要通过一点点修改就可以适配 *Firefox*、*Safari* 等主流浏览器。  

## 使用方法

1. 使用打包好的[一键查询程序](https://gitee.com/Jaxvanyang/lang-study/releases/csust_gpa_calculator_v0.4)：  

    下载 -> 解压 -> 打开 csust_gpa_calculator.exe -> 按照提示操作  

2. 使用 `Python3` 执行脚本：  

    1. 克隆原仓库：  
        ```bash
        git clone git@gitee.com:Jaxvanyang/lang-study.git
        ```
    1. 切换到原仓库的 `python/src` 路径：  
        ```bash
        cd lang-study/python/src
        ```
    2. 安装好依赖：  
        ```bash
        pip install selenium
        ```
    3. 运行脚本：  
        ```bash
        python3 gpa_calculator.py
        ```

## 参考链接

- 脚本源代码：  

    1. 主程序：[gpa_calculator.py](https://gitee.com/Jaxvanyang/lang-study/blob/gpa/python/src/gpa_calculator.py)  
    2. 课程信息数据结构定义：[course.py](https://gitee.com/Jaxvanyang/lang-study/blob/gpa/python/src/course.py)  

- [Browser manipulation](https://www.selenium.dev/documentation/en/webdriver/browser_manipulation/)  

## 更新

如果有的话……
