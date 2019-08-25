import React from 'react'
import Menu from './Menu'

const Header = () => (
  <React.Fragment>
    <header className="portfolio--header block">
      <div className="portfolio--heading">
        <div className="triangle--left" />
        <h1 className="portfolio-title block-title">
          <a href="/">Javid Askerov</a>
        </h1>
        <h2 className="portfolio-subtitle">
          Code.
        </h2>
        <div className="triangle--right" />
      </div>
    </header>
    <Menu />
  </React.Fragment>
)

export default Header
