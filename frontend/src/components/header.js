import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

import globeSVG from '../images/icon.svg';

const Row = styled.div`
  diplay: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`;

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem `,
      }}
    > 
      <Row>
        <img src={globeSVG} style={{margin: '0 1em 0 0'}}/>
        <h3 style={{ margin: 0, display: 'inline'}}>
          <Link
            to="/"
            style={{
              color: `#55efc4`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h3>
      </Row>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
