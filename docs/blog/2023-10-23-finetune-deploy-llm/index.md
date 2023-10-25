---
slug: 一键微调+部署LLM
title: 一键微调+部署LLM
authors:
  name: Ziyuan Cui
  title: ColossalAI Platform Team
tags: [ColossalChat]
---

# 一键微调+部署LLM

## 介绍

ColossalAI 平台是一个全托管的机器学习平台，它无缝地结合强大的计算能力和最先进的大模型加速和优化框架 ColossalAI。平台提供了多个大模型训练模版，可以让用户以无代码的方式，通过只上传数据集，来完成大模型的微调或预训练。在本文中，我们将讲解如何通过平台提供的 ColossalChat 模版，在用户提供的数据上微调和推理部署一个大语言模型。

## 流程详解

### 1. 创建LLM微调训练任务

点击左边的**任务**边栏，并在右上角点击**新建任务**。

在**任务**界面的上边栏，选择**通过模版**创建任务的选项。

在**训练设置**界面，填写任务名称、任务描述。在模版选项里选择公共模版 `luchentech/ColossalChat`。

在**数据集**选项，请选择公共数据集 `luchentech/ColossalChatSampleDataset`。

在**模型**选项，在本教程中，请选择公共模型 `luchentech/bloom-560m`


在**超参数**界面，选择您需要的超参数配置，例如模型类型选择、训练策略选择、epoch 数目等等。如无特殊需求，可以直接使用默认配置。
- model_type：大语言模型类型，这里我们在提供了 bloom-350m、opt、gpt2 和 llama2 四种模型。在本教程中，请选择 bloom。
- strategy：ColossalAI 优化策略。在本教程中，请选择colossal_zero2_cpu。 
- log_interval：日志打印的频率
- batch_size：批大小
- max_len：最大长度序列
- lora_rank
- accumulation_steps：累计梯度的步数
- lr：学习率
- max_dataset_size：最大数据集大小
- max_epochs：训练轮数

![](./images/job-from-template.png)

在**资源设置**，选择您所需要的GPU类型，和GPU数量。这里最少选择一个A800 GPU。

当您配置完成后，请点击**启动任务**按钮。

### 2. 监控训练任务

在训练过程中，您可以通过点击**日志**的选项，来查看当前的日志进度。
![](images/job-log-stream.png)

在训练过程中，您可以通过点击**指标**的选项，
![](images/job-tensorboard.png)

### 3. 注册训练完成的模型

训练结束后，您可以在**任务详情**界面的**输出文件**选项卡中看到训练的输出文件。您可以选择下载这些文件，或者选择**注册模型**来注册您的`checkpoint/`目录下的文件，注册后的模型，可以在**模型**界面看到注册后的模型文件目录。

输出文件将包括一下几种文件

- `checkpoint/pretrain`：训练后的产生的模型文件
- `tensorboard/`：训练产生的 tensoborad 文件
- `master-0.txt`：master 节点产生的日志文件

![](images/job-register-model.png)

模型注册之后，可以在**模型**界面，管理当前模型目录下的文件。

### 4. 创建推理部署
模型注册之后，您可以在**推理API**界面，创建一个属于您自己的推理部署。

在**推理部署**界面的上边栏，选择**通过模版**创建任务的选项。

在**模型**选项，您可以选择在上一步注册的模型，也可以选择公有模型 `luchentech/bloom-560m`

在**资源设置**，选择您所需要的GPU类型，和GPU数量。这里请选择一个A10 GPU。

当您配置完成后，请点击**创建**按钮。

![](images/inference-create.png)

### 5. 测试推理部署

等待推理部署的状态变为Ready之后，便可以开始测试推理部署的服务。


首先需要准备一个输入文件，输入文件的格式如下：
```bash
echo '{
  "id": "d3b15cad-50a2-4eaf-80ce-8b0a428bd298",
  "inputs": [{
    "name": "4b7c7d4a-51e4-43c8-af61-04639f6ef4bc",
    "shape": [1],
    "datatype": "BYTES",
    "data": ["Give three tips for staying healthy."]
  }]
}' > input.json
```

构造并向推理API发送curl请求：
- [推理API的URL]：在**推理API**界面，获得推理API的URL.
![](images/inference-url.png)

- [复制过来的令牌内容]：在**推理API**界面，点击**生成API令牌**按钮。在令牌界面，点击**复制**按钮，复制令牌到您的剪贴板上。
![](images/inference-generate-token.png)
![](images/inference-token-copy.png)

```bash
curl -H 'Authorization: Bearer [复制过来的令牌内容]' '[推理API的URL]' -H 'Content-Type: application/json' --data-binary @./input.json
```

示例curl命令
```bash
curl -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjkwNDA1NzAsImlhdCI6MTY5NzUwNDU3MCwiaXNzIjoiaHBjYWl0ZWNoLmNvbSIsInN1YiI6IjI5OCJ9.B_RiCWtt9mm5OELQE8BSmTD5VrUoxTeeUeel3XGIeI5j6TwGGntu-2MQ88jAWramiOY730RY-9nQkwlpT7FOn42VitAW9V08ojXL9scafKMWomYQVjF2a7mGRqCiZxe2rRO0jN5nuhOqYTwoJ8WYxH3U7F6uBQHrlvgP9AnAKd9VK-I1OzJ8-BBgoZij7UDtyh6Zx7ZiW6Rc7qWLIyQ7_T18Eyx3LSZ34eIZ3evY5BbMq9qzdQLG6D8L5xhvtWD8vxsIbtHq6ys0DKe0wJLJHjiHPG7M0nrRo-VY1eWHzhNG0DzMzPnWoJvqJMHN47Xt7NUjPhV5bavX3XMQJFiheg' 'https://inference-service-24.platform.luchentech.com/v2/models/inference-service-24/infer' -H 'Content-Type: application/json' --data-binary @./input.json
```

示例请求结果
![](images/inference-query-result.png)