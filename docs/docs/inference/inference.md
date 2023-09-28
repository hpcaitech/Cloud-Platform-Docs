# 推理API

## 简介

在完成微调任务之后，我们可以创建一个推理API来将我们的模型部署为一个Restful API集成到上层应用中。

![api list](./images/api_list.png)

## 创建一个推理API

点击API列表右上角的按钮，我们可以创建新的推理API。和创建训练任务一样，我们也需要选择我们的模型和推理代码。我们使用`kserve`来部署推理模型，在我们选择的项目/模板里，需要在根目录下有一个inference目录来放置`kserve`所需的handler文件。选择完毕之后我们点击确认即可启动推理API。

```text
- <project/template name>
    - inference
        - handler.py
```

![api list](./images/api_creation.png)




