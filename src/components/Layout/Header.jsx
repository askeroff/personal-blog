import React from 'react'

const Header = () => (
  <header className="portfolio--header block">
    <div className="portfolio--heading">
      <div className="triangle--left" />
      <h1 className="portfolio-title block-title">
        <a href="/">Javid Askerov</a>
      </h1>
      <h2 className="portfolio-subtitle">
        Full-Stack Developer. Guitar Enthusiast.
      </h2>
      <div className="triangle--right" />
    </div>
    <div className="header--menu">
      <ul>
        <li className="header--menu-item">
          <a href="/">Home</a>
        </li>
        <li className="header--menu-item">
          <a href="/about">About</a>
        </li>
        <li className="header--menu-item">
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
