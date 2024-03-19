# 并行优化策略: 利用Colossal-AI进行LLaMA2训练任务并行优化

[Colossal-AI](https://github.com/hpcaitech/ColossalAI) 框架中包含了一系列训练时的并行优化策略，其中包括了张量并行，模型并行、数据并行和Zero等优化策略。在本个实例中，我们将演示如何便捷地使用我们Colossal-AI云平台框架使用这些并行策略训练LLaMA2 7B模型。

Tags:  Colossal-AI，训练并行， LLaMA2

## 运行环境要求

镜像：推荐使用官方镜像 colossalai 0.3.4

GPU规格：推荐使用H800 （4块及以上）

## 什么是并行策略

- 数据并行

    数据并行是最常见的并行形式，因为它很简单。在数据并行训练中，数据集被分割成几个碎片，每个碎片被分配到一个设备上。这相当于沿批次维度对训练过程进行并行化。每个设备将持有一个完整的模型副本，并在分配的数据集碎片上进行训练。在反向传播之后，模型的梯度将被全部减少，以便在不同设备上的模型参数能够保持同步。

- 模型并行

    在数据并行训练中，一个明显的特点是每个 GPU 持有整个模型权重的副本。这就带来了冗余问题。另一种并行模式是模型并行，即模型被分割并分布在一个设备阵列上。通常有两种类型的并行：张量并行和流水线并行。张量并行是在一个操作中进行并行计算，如矩阵-矩阵乘法。流水线并行是在各层之间进行并行计算。因此，从另一个角度来看，张量并行可以被看作是层内并行，流水线并行可以被看作是层间并行。

- 优化器相关的并行

    另一种并行方法和优化器相关，目前这种并行最流行的方法是 ZeRO，即零冗余优化器。 ZeRO 在三个层面上工作，以消除内存冗余（ZeRO需要进行fp16训练）。

    Level 1: 优化器状态在各进程中被划分。

    Level 2: 用于更新模型权重的32位梯度也被划分，因此每个进程只存储与其优化器状态划分相对应的梯度。

    Level 3: 16位模型参数在各进程中被划分。

## 1. 准备数据库

与原始的LLaMA不同，我们使用[RedPajama](https://www.together.xyz/blog/redpajama)数据集，这是LLaMA训练数据集的复制，包含超过1.2万亿个令牌。完整的数据集在磁盘上未解压缩约为5TB，在下载时约为3TB压缩。

如果您只想尝试预训练脚本，您可以通过[Hugging Face RedPajama-Data-1T](https://huggingface.co/datasets/togethercomputer/RedPajama-Data-1T)下载一个更小的子数据集。下载完成后，您可以将数据库上传至云平台。在此样例中，我们使用云平台预置好的 RedPajama-Data-1T-Sample 数据集，稍后我们会将此数据集挂载在我们的任务上。

RedPajama-Data-1T 包含七个数据片段：

|               | RedPajama    | LLaMA         |
|---------------|--------------|---------------|
| CommonCrawl   | 8780亿       | 8520亿        |
| C4            | 1750亿       | 1900亿        |
| Github        | 590亿        | 1000亿        |
| Books         | 260亿        | 250亿         |
| ArXiv         | 280亿        | 330亿         |
| Wikipedia     | 240亿        | 250亿         |
| StackExchange | 200亿        | 270亿         |
| 总计           | 1.2万亿      | 1.25万亿      |


## 2. 准备项目文件

我们需要克隆[Colossal-AI](https://github.com/hpcaitech/ColossalAI)代码仓库。在此样例中，我们使用预置好的项目文件，稍后我们会将此项目挂载在我们的任务上。


## 3. 启动任务

1. 在控制台中选择`任务`选项，点击 `新任务`；

2. 填写对应的任务名称和描述；

3. 挂载数据集：将之前准备好的 `RedPajama-Data-1T` 数据集挂载到 Container 中，在这个例子里，模型被挂载到了 `/mnt/dataset`；

4. 挂载项目：将之前准备好的 Colossal AI 项目 `ColossalAI-Parallel-Train-LLaMA-Example` 文件挂载到 Container 中，在这个例子里，项目被挂载到了 `/mnt/project`;

5. 启动命令：填入我们项目中默认的启动命令 `bash /mnt/project/train.sh`。同时您可以在云平台页面通过设置环境变量选择此次训练配置，如并行策略，Flash Attention加速，epoch大小等。如果您想了解启动命令是如何启动服务的，或者想自定义启动命令，请参考 `3.启动命令`;

    在本例中，我们进行zero2的优化策略，利用8卡进行 max_length为2k，batch_size为1的 LLaMA2 7b模型训练

6. 镜像设置：选择官方镜像 `colossalai 0.3.4`；

7. 显卡配置：推荐选择 `NVIDA-H800`，GPU 数量设置为大于等于 `4`；

8. 最后点击 `创建`，启动任务；

![infernce_api_create](./images/task_create.jpg)


## 3. 启动命令

1. 在本例中，LLaMA2 的python训练脚本位于 `ColossalAI/examples/language/llama2/`， 具体的可传入参数列表如下：

- Model configuration: `-c`, `--config`. `7b`, `13b`, `30b` and `65b` are supported for LLaMA-1, `7b`, `13b`, and `70b` are supported for LLaMA-2.
- Booster plugin: `-p`, `--plugin`. `gemini`, `gemini_auto`, `zero2`, `hybrid_parallel` and `zero2_cpu` are supported. For more details, please refer to [Booster plugins](https://colossalai.org/docs/basics/booster_plugins).
- Dataset path: `-d`, `--dataset`. The default dataset is `togethercomputer/RedPajama-Data-1T-Sample`. It support any dataset from `datasets` with the same data format as RedPajama.
- Number of epochs: `-e`, `--num_epochs`. The default value is 1.
- Local batch size: `-b`, `--batch_size`. Batch size per GPU. The default value is 2.
- Learning rate: `--lr`. The default value is 3e-4.
- Weight decay: `-w`, `--weight_decay`. The default value is 0.1.
- Warmup steps: `-s`, `--warmup_steps`. The default value is 2000.
- Gradient checkpointing: `-g`, `--gradient_checkpoint`. The default value is `False`. This saves memory at the cost of speed. You'd better enable this option when training with a large batch size.
- Max length: `-l`, `--max_length`. The default value is 4096.
- Mixed precision: `-x`, `--mixed_precision`. The default value is "fp16". "fp16" and "bf16" are supported.
- Save interval: `-i`, `--save_interval`. The interval (steps) of saving checkpoints. The default value is 1000.
- Checkpoint directory: `-o`, `--save_dir`. The directory path to save checkpoints. The default value is `checkpoint`.
- Checkpoint to load: `-f`, `--load`. The checkpoint path to load. The default value is `None`.
- Gradient clipping: `--gradient_clipping`. The default value is 1.0.
- Tensorboard log directory: `-t`, `--tensorboard_dir`. The directory path to save tensorboard logs. The default value is `tb_logs`.
- Flash attention: `-a`, `--flash_attention`. If you want to use flash attention, you must install `flash-attn`. The default value is `False`. This is helpful to accelerate training while saving memory. We recommend you always use flash attention.

2. 以上参数中，值得注意的是优化策略的选择的参数`plugin`，其中包含了：

- Torch DDP：它是 torch.nn.parallel.DistributedDataParallel 的封装，可用于使用数据并行性训练模型。
- Torch FSD：它是 torch.distributed.fsdp.FullyShardedDataParallel 的封装，可用于使用 zero-dp 训练模型。
- Low Level Zero：它封装了 colossalai.zero.low_level.LowLevelZeroOptimizer，并可用于使用 zero-dp 训练模型。它仅支持 zero 阶段 1 和阶段 2。
- Gemini：它封装了 Gemini，实现了基于分块和异构内存管理的 Zero-3。
- Hybrid Parallel：它提供了一个整洁的接口，集成了 Shardformer、管道管理器、混合精度训练、TorchDDP 和 Zero 阶段 1/2 功能。使用此插件，Transformer 模型可以轻松地以任何组合的张量并行、管道并行和数据并行（DDP/Zero）高效训练，以及各种加速和内存节省的优化工具。有关支持的并行策略和优化工具的详细信息在下面的部分中解释。

如果您选择了Hybrid Parallel，您可以更改python训练脚本中第181行到第190行的HybridParallelPlugin配置代码，更改tp_size和pp_size以更改张量并行和管道并行的大小。HybridParallelPlugin是通过shardformer实现张量并行，在该插件中，可设置tp_size确定张量并行组的大小，此外，还有多个参数可设置张量并行时的优化特性：

- enable_all_optimization（布尔类型，可选项）：是否启用Shardformer支持的所有优化方法，目前所有优化方法包括融合归一化、flash attention和JIT。默认为False。 
- enable_fused_normalization（布尔类型，可选项）：是否在Shardformer中启用融合归一化。默认为False。 enable_flash_attention（布尔类型，可选项）：是否在Shardformer中启用flash attention。默认为False。 
- enable_jit_fused（布尔类型，可选项）：是否在Shardformer中启用JIT。默认为False。 enable_sequence_parallelism（布尔类型）：是否在Shardformer中启用序列并行性。默认为False。 
- enable_sequence_overlap（布尔类型）：是否在Shardformer中启用序列重叠性。默认为False。

HybridParallelPlugin通过设置pp_size确定流水线并行组的大小，num_microbatches设置流水线并行时将整个batch划分为小batch的数量，microbatch_size可设置小batch的大小，插件会优先使用num_microbatches来确定micro batch的配置。 HybridParallelPlugin的设置示例如下：

```
plugin = HybridParallelPlugin(
            tp_size=4,
            pp_size=2,
            num_microbatches=None,
            microbatch_size=1,
            enable_jit_fused=False,
            zero_stage=0,
            precision="fp32",
            initial_scale=1,
        )
```

3. 在本例中，我们用如下启动命令运行python训练脚本，其位于`./train.sh`。如您想进行更改相关配置，可更改此文件。
```
#!/usr/bin/env bash
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DATASET_DIR="/mnt/dataset"
OUTPUT_DIR="/output"

TRAINING_DATASET_DIR=${DATASET_DIR}/RedPajama-Data-1T-Sample
COLOSSALAI_PROJECT_DIR=${SCRIPT_DIR}/ColossalAI
TENSORBOARD_OUTPUT_DIR=${OUTPUT_DIR}/tensorboard
CHECKPOINT_SAVE_DIR=${OUTPUT_DIR}/checkpoint
SAVE_MODEL_PATH=${CHECKPOINT_SAVE_DIR}

mkdir -p ${TENSORBOARD_OUTPUT_DIR}
mkdir -p ${SAVE_MODEL_PATH}

cd ${COLOSSALAI_PROJECT_DIR}
pip install ./
cd examples/language/llama2/

colossalai run --nproc_per_node ${NPROC_PER_NODE} pretrain.py \
    --plugin ${strategy} \
    --dataset ${TRAINING_DATASET_DIR} \
    --save_dir ${SAVE_MODEL_PATH} \
    --num_epochs ${num_epochs} \
    --batch_size ${batch_size} \
    --max_length ${max_len} \
    --save_interval ${save_interval}\
    --lr ${lr} \
    --tensorboard_dir ${TENSORBOARD_OUTPUT_DIR} \
```

LLaMA2 将会就此开始训练，你同时也可以在项目页面查看输出和结果。
