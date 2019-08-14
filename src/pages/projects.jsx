import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Projects from '../components/Portfolio/Projects'

class ProjectsPage extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <div className="block articles">
            <h1 className="block-title">Projects</h1>
            <Projects />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
        }
      }
    }
  }
`

