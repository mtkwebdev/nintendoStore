require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet",{
    resolve: `gatsby-source-stripe`,
    options: {
      objects: ["Price"],
      secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
      downloadFiles: true,
    }
  },

  ],
  
};
