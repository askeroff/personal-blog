import React from 'react'

const Projects = () => (
  <div className="projects-list block">
    <h1 className="projects-title">Projects</h1>
    <div className="projects-items">
      <div className="project-item">
        <h2>Logsterr</h2>
        <p>
          <a href="https://logsterr.com">Demo</a> |{' '}
          <a href="https://github.com/askeroff/logsterr">Source</a>
        </p>
        <p>I have built to keep track of certain projects I am working on.</p>
        <div>
          The tech stack I used for this:
          <ul>
            <li>React/Redux</li>
            <li>Nodejs with Express</li>
            <li>Mongo</li>
            <li>Passportjs for authentication</li>
          </ul>
        </div>
      </div>
      <div className="project-item">
        <h2>Tic-Tac-Toe</h2>
        <p>
          <a href="https://askeroff.github.io/tictactoe/">Demo</a> |{' '}
          <a href="https://github.com/askeroff/tictactoe">Source</a>
        </p>
        <p>
          It&apos;s a tic-tac-toe game, that was built just with javascript.
        </p>
        <p>
          In this version you play against the computer, where the main
          objective was, that computer never loses. I used{' '}
          <strong>Minimax</strong> algorithm for this.
        </p>
      </div>

      <div className="project-item">
        <h2>Simon Game</h2>
        <p>
          <a href="https://askeroff.github.io/simon/">Demo</a> |{' '}
          <a href="https://github.com/askeroff/simon">Source</a>
        </p>
        <p>
          Simon is the game of memory skill. Built with just javascript as well.
        </p>
      </div>

      <div className="project-item">
        <h2>Markdown Previewer</h2>
        <p>
          <a href="https://codepen.io/askerovlab/full/XRZJMM/">Codepen</a>
        </p>
        <p>Pretty self-explanatory. Just a preview for your markdown.</p>
      </div>
    </div>
  </div>
)

export default Projects
