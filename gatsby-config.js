const siteMetadata = require("./config");

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@assets": "src/assets",
        },
        extensions: ["js"],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#5D93FF",
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        commonmark: true,
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [[require("rehype-katex"), { strict: "ignore" }]],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              isIconAfterHeader: true,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-external-links",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          width: 1200,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/projects`,
        name: "projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/experiments`,
        name: "experiments",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
  ],
};
