/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "site-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              type
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // Filter out the footer, navbar, and meetups so we don't create pages for those
    const postOrPage = result.data.allMarkdownRemark.edges.filter(
      edge =>
        // if (edge.node.frontmatter.templateKey === "navbar") {
        //   return false;
        // } else if (edge.node.frontmatter.templateKey === "footer") {
        //   return false;
        // } else {
        //   return !Boolean(edge.node.fields.slug.match(/^\/meetups\/.*$/));
        // }
        edge.node.frontmatter.type === 'page',
    )

    postOrPage.forEach((edge) => {
      let component
      let pathName
      console.log(edge.node)
      if (edge.node.frontmatter.slug) {
        if (
          edge.node.frontmatter.slug === 'home'
          || edge.node.frontmatter.slug === 'homepage'
        ) {
          pathName = '/'
        } else {
          pathName = `/${edge.node.frontmatter.slug}`
        }
        // component = path.resolve(`src/pages/index.js`);
      } else {
        return false
      }
      component = path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
      )
      const { id } = edge.node
      createPage({
        path: pathName,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}
