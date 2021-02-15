const path = require("path");

module.exports = {
  title: "Foundation",
  tagline:
    "Help us build a new creative economy on the Ethereum network. The infrastructure is open, permissionless, and transparent.",
  url: "https://fnd.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fnd.svg",
  organizationName: "f8n", // Your GitHub org name.
  projectName: "f8n-contracts", // Your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Foundation Logo",
        src: "img/fnd.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "https://discord.foundation.app",
          label: "Discord",
          position: "left",
        },
        {
          href: "https://github.com/f8n",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: 'Foundation',
      //     items: [
      //       {
      //         label: 'Docs',
      //         to: 'docs/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Connect',
      //     items: [
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/withFND',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discord.foundation.app',
      //       },
      //       {
      //         label: 'Instagram',
      //         href: 'https://www.instagram.com/withfoundation/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'https://foundation.app/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/f8n',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Foundation Labs, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/f8n/f8n-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
