import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to home</Link>
      <p>
        Hi there! I'm Erwin and this is my first time using gatsby. I've come to learn that gatsby
        can build fast reload static website, so i try to build a simple blog website while learning it.
      </p>
    </main>
  )
}

export default AboutPage
