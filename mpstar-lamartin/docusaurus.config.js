// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MP* au lycée La Martinière Monplaisir",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "http://www.lamartinieremonplaisir.org/images/favlogo/logo_Min.jpg",

  organizationName: "mpstar-lamartin",
  projectName: "mpstar-lamartin.github.io",

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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/mpstar-lamartin/mpstar-lamartin.github.io/",
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
          src: "http://www.lamartinieremonplaisir.org/images/favlogo/logo_Min.jpg",
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
            href: "https://cpge-itc.github.io/itc2",
            position: "left",
            label: "Informatique commune",
          },
          {
            href: "https://mp-info.github.io",
            position: "left",
            label: "Informatique option",
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
