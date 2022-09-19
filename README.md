# 羊了个羊通关秘籍教程

羊了个羊直接通关，无需闯关即可进入羊圈。

## 抓包：获取t值

抓取 `cat-match.easygame2021.com` 的请求包内 Header 为 `t` 的内容

### mac教程

[Charles抓包教程](https://www.jianshu.com/p/ff85b3dac157)


### ios教程

[Stream抓包教程](https://blog.csdn.net/nanhai8719/article/details/124134529)

## 启动部署

### 环境准备

- 安装 Node

  版本：v16

- 开发工具

  推荐 VSCode

### 项目启动

1. npm install
2. npm run dev
3. 浏览器访问 http://localhost:6600/sheep-game/

## 开始通关
在前面两步完成之后，会获取到t值以及页面在本地正常运行。把获取到的t值，输入到token的输入框里面，再输入好你想要执行的次数，即可点击执行按钮。提示成功后，代表已经闯关成功啦！


