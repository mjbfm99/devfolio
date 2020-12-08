module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.manueljimenez.eu.org`,
    // Your Name
    name: 'Manuel Jiménez',
    // Main Site Title
    title: `Manuel Jiménez`,
    // Description that goes under your name in main bio
    description: `Short description`,
    // Optional: Twitter account handle
    email: `mailto:manuel@jimenez.eu.org`,
    //linkedin: `https://www.google.com`,
    // Optional: Github account URL
    github: `https://github.com/mjbfm99`,
    // Optional: LinkedIn account URL
    // Content of the About Me section
    about: `Long about`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    awards: [
      {
        name: 'HP CodeWars Madrid 2017',
        description:
          'Second place',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    /*experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],*/
    projects: [
      {
        name: 'Python GTK3 Minesweeper',
        description: 'A simple Minesweeper clone',
        link: 'https://github.com/mjbfm99/SAD-Python-Minesweeper',
      },
    ],
    education: [
      {
        name: 'Grau en Enginyeria de Tecnologies i Serveis de Telecomunicació',
        description: 'Universitat Politècnica de Catalunya, 2019 - Present',
      },
      {
        name: 'Grado en Ingeniería Electrónica de Comunicaciones',
        description: 'Universidad Politécnica de Madrid, 2017 - 2019',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'English (C2), Spanish, Catalan',
      },
      {
        name: 'Programming',
        description: 'Java, C, Python',
      },
      {
        name: 'Other',
        description:
          'Linux, Docker, Nginx',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
