# 安装 cap 命令行工具

我们提供了一个命令行工具 `cap`，帮助用户管理平台上的数据集和代码，尤其是在没有图形界面的服务器上传和下载。它的名字来源于 Colossal-AI Platform 的首字母。

1. 从源码安装（推荐，因为 API 可能频繁更新）

```bash
pip install git+https://github.com/hpcaitech/ColossalAI-Platform-CLI@main
```

2. 从PyPI安装

```bash
pip install colossalai-platform
```

## 配置

安装完成后，可以通过 `cap configure` 命令，来完成命令行工具的配置。

它将会询问用户名和密码，并尝试登录平台的 API Server，来验证配置的有效性。输出如下：

```bash
cap configure
# Config doesn't exist on /home/myuser/.colossalai-platform/config.yaml, writing default to it
# Username: myusername
# Password (Hide input): 
# Login successfully!
# 
# Thank you for choosing the ColossalAI Platform!
# During our public beta phase, we're actively developing and improving the platform. We appreciate your patience with any user experience issues.
# 
# For assistance, visit [doc link](TODO) or reach out anytime.
# Your feedback is valuable as we strive to enhance your experience.
```

## 配置文件

用户名和密码将会被保存在配置文件，路径为 `$HOME/.colossalai-platform/config.yaml`。示例内容如下：

```bash
cat ~/.colossalai-platform/config.yaml 
# api_server: https://180.184.83.159
# username: myusername
# password: **********
# max_upload_chunk_bytes: 104857600
```

另外，在连接一个私有化部署的实例时，需要修改配置文件中的 API Server 地址。
