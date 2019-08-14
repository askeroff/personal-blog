import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/portfolio/_portfolio.scss'
import icon from '../../assets/favicon.ico'
import Layout from '../Layout'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

class Portfolio extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata|Lato"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href={`${icon}`} type="image/x-icon" />
          <title>Javid Askerov</title>
        </Helmet>

        <About />
        <Projects />

        <Footer />
      </Layout>
    )
  }
}

export default Portfolio
