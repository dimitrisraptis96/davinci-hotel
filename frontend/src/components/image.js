import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const Image = ({fluid}) => (
  <Wrapper>
    <Img fluid={fluid} style={{borderRadius: '8px'}}/> 
  </Wrapper>  
);

export default Image
