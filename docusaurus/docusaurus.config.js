// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ColossalAI Platform Documentation",
  tagline: "ColossalAI Platform Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.platform.colossalai.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "HPC-AI Technology Inc.", // Usually your GitHub org/user name.
  projectName: "ColossalAI Platform", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  customFields: {
    // Put your custom environment here
    platformHostname: process.env.PLATFORM_HOSTNAME,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    function (context, options) {
      return {
        name: "postcss-tailwindcss-loader",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          );
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "ColossalAI Platform",
        logo: {
          alt: "ColossalAI Platform",
          src: "https://26563514.fs1.hubspotusercontent-eu1.net/hubfs/26563514/logos/colossal-ai_emblem.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "contactSidebar",
            position: "right",
            label: "Contact Us",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About Us",
                href: "https://www.hpc-ai.tech/",
              },
              {
                label: "Customers",
                href: "https://www.hpc-ai.tech/customers",
              },
              {
                label: "Contact Us",
                to: `/docs/contact/${
                  process.env.PLATFORM_HOSTNAME?.includes("luchentech")
                    ? "wechat"
                    : "slack"
                }`,
              },
            ],
          },
          {
            title: "Open-Source",
            items: [
              {
                label: "Colossal-AI",
                href: "https://colossalai.org/",
              },
              {
                label: "ColossalAI Platform CLI",
                href: "https://github.com/hpcaitech/ColossalAI-Platform-CLI",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HPC-AI Technology, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
