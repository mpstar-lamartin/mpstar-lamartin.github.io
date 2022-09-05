// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MP* au lycée La Martinière Monplaisir",
  url: "https://mpstar-lamartin.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  organizationName: "mpstar-lamartin",
  projectName: "mpstar-lamartin.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/tree/main",
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
      navbar: {
        title: "MP*",
        logo: {
          alt: "MP*",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "math/intro",
            position: "left",
            label: "Mathématiques",
            sidebarId: "math",
          },
          {
            type: "doc",
            docId: "physique/intro",
            position: "left",
            label: "Physique",
          },
          {
            type: "doc",
            docId: "anglais/intro",
            position: "left",
            label: "Anglais",
          },
          {
            type: "doc",
            docId: "tipe/references",
            position: "left",
            label: "TIPE",
          },
          {
            href: "https://cpge-itc.github.io/itc2",
            position: "left",
            label: "Info commune",
          },
          {
            href: "https://mp-info.github.io",
            position: "left",
            label: "Info option",
          },
          { to: "/blog", label: "Actualités", position: "right" },
          {
            href: "https://github.com/mpstar-lamartin/mpstar-lamartin.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
