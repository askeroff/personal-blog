/* global document */
import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/portfolio/_portfolio.scss'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'

class Portfolio extends React.Component {
  constructor() {
    super()
    document.documentElement.className = 'portfolio'
  }

  componentWillUnmount() {
    document.documentElement.className = ''
  }

  render() {
    return (
      <div className="portfolio-wrapper">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Inconsolata|Lato"
            rel="stylesheet"
          />
        </Helmet>

        <Header />

        <Projects />

        <Footer />
      </div>
    )
  }
}

export default Portfolio
