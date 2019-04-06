const siteConfig = {
  title: 'Shyft',
  tagline: 'A server-side framework for building powerful GraphQL APIs',
  url: 'https://shyft.dev',
  baseUrl: '/',

  projectName: 'shyft',
  organizationName: 'chriskalmar',

  headerLinks: [
    { doc: 'docs', label: 'Docs' },
    { doc: 'api', label: 'API' },
    { href: 'https://github.com/chriskalmar/shyft', label: 'GitHub' },
  ],

  headerIcon: 'img/shyft-logo-white-small.svg',
  footerIcon: 'img/shyft-logo-white.svg',
  favicon: 'img/favicon.png',

  colors: {
    primaryColor: '#EE5152',
    secondaryColor: '#3E3452',
    tertiaryColor: '#62A286',
  },

  fonts: {
    mainFont: ['Roboto', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
  },

  copyright: `Copyright © ${new Date().getFullYear()} Chris Kalmar`,

  highlight: {
    theme: 'tomorrow-night',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  stylesheets: [
    '//fonts.googleapis.com/css?family=Roboto+Condensed:700|Roboto:100,400',
  ],

  onPageNav: 'separate',

  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  repoUrl: 'https://github.com/chriskalmar/shyft',
  stargazersUrl: '/chriskalmar/shyft/stargazers',
};

module.exports = siteConfig;
