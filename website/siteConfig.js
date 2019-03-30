
const siteConfig = {
  title: 'Shyft',
  tagline: 'A server-side framework for building powerful GraphQL APIs',
  url: 'https://shyft.dev',
  baseUrl: '/',

  projectName: 'shyft',
  organizationName: 'chriskalmar',

  headerLinks: [
    {doc: 'docs', label: 'Docs'},
    {doc: 'api', label: 'API'},
    {href: "https://github.com/chriskalmar/shyft", label: "GitHub" },
  ],

  headerIcon: 'img/shyft-logo-white-small.svg',
  footerIcon: 'img/shyft-logo-white.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#EE5152',
    secondaryColor: '#242629',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  copyright: `Copyright © ${new Date().getFullYear()} Chris Kalmar`,

  highlight: {
    theme: 'tomorrow-night',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',

  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  repoUrl: 'https://github.com/chriskalmar/shyft',
  stargazersUrl: '/chriskalmar/shyft/stargazers',
};

module.exports = siteConfig;
