import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 0.75em;
  color: gray;
  display: flex;
  margin-top: 5em;

  /* position: absolute; */
  bottom: 10px;
`

const Underline = styled.span`
  background-image: linear-gradient(120deg, #55efc4, #55efc4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 78%;
  transition: background-size 0.25s ease-in;

  :hover {
    background-size: 100% 88%;
    color: white
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <Footer>
            © {new Date().getFullYear()}, Built by
            <Underline>Team 50</Underline>
          </Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
