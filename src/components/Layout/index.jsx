import React from 'react'
import Helmet from 'react-helmet'
import icon from '../../assets/favicon.ico'
import Header from './Header'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="portfolio-wrapper">
        <Helmet defaultTitle="Blog by Javid Askerov">
          <link rel="shortcut icon" href={`${icon}`} type="image/x-icon" />
        </Helmet>
        <Header />
        {children}
      </div>
    )
  }
}

export default Layout
