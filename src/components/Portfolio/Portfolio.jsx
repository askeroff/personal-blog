/* global document */
import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/portfolio/_portfolio.scss'
import icon from '../../assets/favicon.ico'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'

class Portfolio extends React.Component {
  componentDidMount() {
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
          <link rel="shortcut icon" href={`${icon}`} type="image/x-icon" />
          <title>Javid Askerov</title>
        </Helmet>

        <Header />

        <Projects />

        <Footer />
      </div>
    )
  }
}

export default Portfolio
