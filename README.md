# 📖 Cloud Platform Documentation

## 📌 Table Of Contents

- [📖 Cloud-Platform-Documentation](#📖-cloud-platform-documentation)
  - [📌 Table Of Contents](#📌-table-of-contents)
  - [🚩 Introduction](#🚩-introduction)
  - [🔗 Structure](#🔗-structure)
  - [🚀 Get Started](#🚀-get-started)
    - [📺 Preview](#📺-preview)
    - [🔨 Build](#🔨-build)
    - [📦 Deployment](#📦-deployment)

## 🚩 Introduction

This repository contains the documentation for Colossal-AI Cloud Platform. This README serves as a guide for you to write, preview and build the documentation.

## 🔗 Structure

The root directory of this repository contains a `docs` folder. You should put all the documentation files inside this folder. The structure is given below. We will delve into the details of specification for `blog`, `docs` and `sidebars.js` respectively.

```text
- docs
  - blog
  - docs
  - sidebars.js
```

1. `docs`

You can put your markdown files in the `docs/docs` folder. You can arrange them according to topics. For example, if you want to write a documentation about the basics of Cloud Platform, you can create a folder named `basics` and put your markdown files in it. You can also create a folder named `doc-with-img` and put your markdown files and images in it. The structure of `docs` folder is shown below.

```text
- docs
    - docs
        - intro.md
        - basics
            - data.md
            - model.md
        - doc-with-img
            - dog.jpg
            - dog.md
```

2. `blog`

You have two ways to creating your blog. The first way is to create a markdown file named in the format `yyyy-mm-dd-title.md`, e.g. `2019-05-28-first-blog-post.md`. The second way is to create a folder named in the format `yyyy-mm-dd-title` and put your markdown file and images in it, e.g. `2019-05-28-first-blog-post`. The markdown file must be named as `index.md`. The structure of `blog` folder is shown below.

```text
- docs
    - blog
        - 2019-05-28-first-blog-post.md
        - 2019-05-28-second-blog-post
            - dog.jpg
            - index.md
```

You can place the meta information about the blog at the top of the blog.

```
---
slug: first-blog-post
title: First Blog Post
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

Your blog here...
```

3. `sidebars.js`

This file determines how your documentation is organized and displayed. You can edit this file to change the structure of your documentation. The structure of `sidebars.js` is shown below.

```javascript
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Edit this part
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Basics",
      items: ["tutorial-basics/congratulations"],
    },
  ],
};

module.exports = sidebars;
```

**Make sure you only edit the `tutorialSidebar` section.** Meanwhile, you should ensure all the items do not have `.md` suffix.

## 🚀 Get Started

Follow the steps below to get started.

### 📺 Preview

You can follow the steps below to preview your documentation locally.

1. Install Node.js and Yarn

```bash
# install node.js
bash ./scripts/install_node.sh
```

2. Preview

```bash
bash ./scripts/preview.sh
```

You will be able to preview the website at `http://localhost:3000/` by default.

In case you are modifying the frontend website source code and wanna preview the latest changes, you can run the following command to start the development server.

```bash
bash ./scripts/preview.sh
```

**Please note that the `<branch>` refers to the branch of the [Cloud-Platform-Docs-Website](https://github.com/hpcaitech/Cloud-Platform-Docs-Website) repository, not this repository.**

### 🔨 Build

If you can preview your documentation locally, you can proceed to try to build your documentation. **Please note that preview does not guarantee that your documentation can be built successfully.**

```bash
bash ./scripts/build.sh

# If you have run preview, your repository will be stored in .cache
# otherwise, you need to set your own path
bash ./scripts/build.sh
```

### 📦 Deployment

There is a deployment workflow ready which will deploy the documentation to GitHub Pages for international version and our private cloud server for the China version. You can follow the steps below to deploy your documentation manually.

1. Click on `Actions` on the tab bar of your repository.
2. Choose `Deploy Website` on the left side bar.
3. Click the `Run workflow` button on the right side and choose main branch.
