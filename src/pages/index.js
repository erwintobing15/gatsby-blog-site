import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this blog site by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Lake Toba (Indonesian: Danau Toba) is a large natural lake in North Sumatra, Indonesia."
        src="../images/toba.jpg"
      />
    </Layout>
  )
}

export default IndexPage
