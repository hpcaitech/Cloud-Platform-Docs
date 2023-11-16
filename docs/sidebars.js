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
      label: "命令行工具",
      items: [
        "cli/installation",
        "cli/create-project",
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
