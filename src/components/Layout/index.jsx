import React from 'react'
import Helmet from 'react-helmet'
import icon from '../../assets/favicon.ico'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by Javid Askerov">
          <link rel="shortcut icon" href={`${icon}`} type="image/x-icon" />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
