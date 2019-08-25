import React from 'react'

const About = () => (
  <header className="block">
    <h1 className="block-title">About</h1>
    <div>
      I am a javascript developer, mainly specialize on the front-end of things.
      Sometimes, I can tackle a bit of backend, like NodeJs, if it suits my
      current goal.{' '}
    </div>
    <div>
      My current tech stack is:
      <ul>
        <li>Typescript/Javascript</li>
        <li>React/Redux or Angular </li>
        <li>Nodejs on the backend w/express</li>
        <li>Mongo for database</li>
      </ul>
      This is the stack, that I&apos;m comfortable with, and I always try to
      find time to explore other technologies as well. At this point graphql is
      of interest to me, I run this personal website on gatsby (static site
      generator).
    </div>
    <h2>Contact</h2>
    If anything, you can contact me{' '}
    <a href="mailto:askerovlab@gmail.com">askerovlab at gmail.com</a>
  </header>
)

export default About
