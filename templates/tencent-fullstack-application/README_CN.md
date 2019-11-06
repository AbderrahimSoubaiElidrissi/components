# Template - 在腾讯云上部署全栈WEB应用

用于通过多个 Serverless Components 部署 Serverless 全栈应用程序。可以帮助开发者更方便快捷的部署 Serverless 应用，比如利用后端API与前端Vue.js结合等场景。

此项目的完全基于腾讯云 Serverless 服务器，可大大缩减使用成本。 如果正在寻找一个低开销的便捷轻量的 Serverless 服务管理框架，这里将是最好的选择。

该 Template 包括:

* **serverless REST API** - 由腾讯云 Servelress Cloud Function（无服务云函数SCF） 和腾讯云 API Gateway 提供相关能力，帮助开发者架构自己的项目和路由。
* **serverless Vue.js 站点** - 由腾讯云 Cloud Object Storage（对象存储COS）提供相关存储能力.  通过后端API传递到前端，并使用 Vue.js 做相关渲染。

&nbsp;

1. [安装](#1-安装)
2. [创建](#2-创建)
3. [部署](#3-部署)
4. [使用](#4-使用)

&nbsp;


### 1. 安装

首先，通过如下命令安装 [Serverless Framework](https://www.github.com/serverless/serverless):

```console
$ npm i -g serverless
```

### 2. 创建

本地创建 `.env` 文件

```console
$ touch .env # 腾讯云的配置信息
```

在 `.env` 文件中配置腾讯云的 APPID，SecretId 和 SecretKey 信息并保存

如果没有腾讯云账号，可以在此[注册新账号](https://cloud.tencent.com/register)。

如果已有腾讯云账号，可以在[API密钥管理](https://console.cloud.tencent.com/cam/capi)中获取`APPID`, `SecretId` 和`SecretKey`

```
# .env
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
TENCENT_APP_ID=123
```

或者，可以在部署之前手动将它们设置为环境变量。

将 NPM 依赖项分别安装在  `dashboard` 和 `api` 两个文件目录：

```console
$ cd dashboard
$ npm i
$ cd ../api
$ npm i
```

完成后的目录结构，如下所示:

```
|- api
|- dashboard
|- serverless.yml      # 使用项目中的 yml 文件
|- .env      # 腾讯云 SecretId/Key/AppId
```

### 2. 部署

可以直接通过 `serverless` 命令来部署应用:

```console
$ serverless
```

当然，也可以使用 `--debug` 调试命令来查看所有环境部署的详细情况：

```console
$ serverless --debug
```

### 3. 使用

首次部署成功后，即可在本地运行服务，并与后端腾讯云服务进行通讯

```console
$ cd dashboard && npm run start
```

## 第一次接触 Components?

可以在 [Serverless Components](https://github.com/serverless/components) 仓库查看更多内容
