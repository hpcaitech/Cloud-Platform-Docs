/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "基础功能",
      items: [
        "basics/datasets",
        "basics/model",
        "basics/projects",
        "basics/templates",
        "basics/notebook",
      ],
    },
    {
      type: "category",
      label: "训练任务",
      items: ["training/jobs", "training/job_info"],
    },
    {
      type: "category",
      label: "推理API",
      items: ["inference/inference"],
    },
    {
      type: "category",
      label: "交互式开发",
      items: [ "notebook/create" ]
    },
    {
      type: "category",
      label: "命令行工具",
      items: [
        "cli/installation",
        "cli/create-project",
      ],
    },
    {
      type: "category",
      label: "案例教程",
      items: [
        "blog/create-training-job/README",
        "blog/finetune-deploy-llm/README",
        "blog/colossalai_parallelism/README",
        "blog/inference_api_llama2_70b_vllm/README",
        "blog/inference_api_tensorrt_triton/README",
      ],
    },
  ],
  contactSidebar: [
    `contact/${
      process.env.PLATFORM_HOSTNAME?.includes("luchentech") ? "wechat" : "slack"
    }`,
    "contact/hpc-ai",
  ],
};

module.exports = sidebars;
