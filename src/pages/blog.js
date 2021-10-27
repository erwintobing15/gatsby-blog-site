import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Post">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
