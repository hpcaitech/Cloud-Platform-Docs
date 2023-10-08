---
slug: 从零启动一个训练任务
title: 从零启动一个训练任务
authors:
  name: Yinzhe Yao
  title: ColossalAI Platform Team
tags: [ColossalChat]
---

# 从零启动一个训练任务

## 介绍

在本文中，我们将介绍如何从零创建一个可以运行的项目，并在ColossalAI平台上进行模型训练。

## 流程详解

### 1. 创建项目目录

#### 使用命令行工具
我们强烈推荐您使用我们的命令行工具创建项目目录，这会初始化一个文件夹，其中包含了启动训练必要的文件。安装和使用方法请参考：[命令行工具git仓库](https://github.com/hpcaitech/ColossalAI-Platform-CLI)

#### 手动创建
如果需要手动创建项目，您需要在文件夹中创建一些内容，可以参考：[项目规范](https://docs.platform.luchentech.com/docs/basics/projects#%E9%A1%B9%E7%9B%AE%E8%A7%84%E8%8C%83)

#### 代码示例
##### HyperParameters.json
此文件用于设置启动训练时的超参数，可以在启动任务的网页UI界面设置
```json
{
  "HyperParameters": [
    {
      "name": "epoch",
      "types": "string",
      "defaultValue": "10",
      "description": "Number of epochs for training"
    }
    // At our platform, it would be injected into `train.sh`
    // as environment variable ${epoch}
  ]
}
```
##### train.py
此文件用于启动训练任务，由train.sh调用
```python
import os
import argparse
import types
from patch import patch_platform_specific_dependencies

# Please do not remove this call,
# the platform's runtime environment needs it.
patch_platform_specific_dependencies()

def add_platform_args(parser: argparse.ArgumentParser):
    # required arguments
    parser.add_argument(
        "--project_dir",
        type=str,
        required=True,
        help="The directory contains the project code.",
    )
    parser.add_argument(
        "--dataset_dir",
        type=str,
        required=True,
        help="The directory contains the training dataset.",
    )
    parser.add_argument(
        "--output_dir",
        type=str,
        required=True,
        help="The directory project would write output into.",
    )

    # optional arguments, add more if you need
    parser.add_argument(
        "--model_dir",
        type=str,
        default=None,
        help="The directory contains the model to finetune.",
    )


def main():
    parser = argparse.ArgumentParser(description="training script")
    add_platform_args(parser)
    args = parser.parse_args()

    # There are some path conventions:
    #
    # $OUTPUT_DIR/tensorboard:
    #     The platform-builtin tensorboard expects events to be here.
    # $OUTPUT_DIR/checkpoint
    #     The platform-builtin checkpoint recovery feature
    #     expects the checkpoint to be here.
    tensorboard_dir = os.path.join(args.output_dir, "tensorboard")
    os.mkdir(tensorboard_dir, exist_ok=True)
    checkpoint_dir = os.path.join(args.output_dir, "checkpoint")
    os.mkdir(checkpoint_dir, exist_ok=True)

    # TODO: your training code here


if __name__ == "__main__":
    main()
```

##### train.sh
此文件为训练代码的入口命令，在云平台上会执行这个bash脚本
```bash
#!/usr/bin/env bash
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# ===================================================================
#                Welcome to ColossalAI Platform!
# ===================================================================
# Those environment variables would be injected by the runner:
#
# 1. ColossalAI Platform defined ones:
#    PROJECT_DIR, DATASET_DIR, MODEL_DIR, OUTPUT_DIR, SCRIPT_DIR
#
# 2. Required by torchrun:
#    NNODES, NPROC_PER_NODE, NODE_RANK, MASTER_ADDR, MASTER_PORT
#
# 3. Hyperparameters from configuration UI:
#    (check HyperParameters.json for more details)
#
# After that, the runner would execute `train.sh`, this script.
# ===================================================================

torchrun --nnodes ${NNODES} \
    --nproc_per_node ${NPROC_PER_NODE} \
    --node_rank ${NODE_RANK} \
    --master_addr ${MASTER_ADDR} \
    --master_port ${MASTER_PORT} \
    ${SCRIPT_DIR}/train.py \
    --project_dir ${PROJECT_DIR} \
    --dataset_dir ${DATASET_DIR} \
    --model_dir ${MODEL_DIR} \
    --output_dir ${OUTPUT_DIR}

# TODO: add more argument passing here
```
### 2. 上传到云平台

[云平台项目页面](https://platform.luchentech.com/console/project)

创建项目后，可以把文件上传到项目内，入口命令路径为`root/train.sh`
![](./images/project_page.png)

### 3. 创建数据集
您可以参考此文档创建数据集：[创建数据集文档](https://docs.platform.luchentech.com/docs/basics/datasets)

#### 使用数据集

数据集路径会以环境变量的形式注入容器，您可以通过`$DATASET_DIR`获取。假设上传的数据路径为`root/data.json`，在训练代码中对应为`$DATASET_DIR/data.json`

### 4. 创建模型
您可以参考此文档创建模型：[创建模型](https://docs.platform.luchentech.com/docs/basics/model)

#### 使用模型

模型路径会以环境变量的形式注入容器，您可以通过`$MODEL_DIR`获取。假设上传的模型文件夹路径为`root/pretrain`，在训练代码中对应为`$MODEL_DIR/pretrain`

### 5. 创建训练任务
您可以参考此文档创建训练任务：[训练任务](https://docs.platform.luchentech.com/docs/training/jobs)

选择从项目启动，填写上述步骤中创建的内容，即可开始训练。