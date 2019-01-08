import React from 'react'
import styled from 'styled-components';

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/card'


const Underline = styled.span`
  background-image: linear-gradient(120deg, #55efc4, #55efc4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3em;
  background-position: 0 78%;
  transition: background-size 0.25s ease-in;

  :hover {
    background-size: 100% 88%;
    color: white;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
`;

const Hotels = ({data}) => {

  const hotels = [
  ];

  return (
    <Layout>
      <h2><Underline>Hotels</Underline></h2>
        
      <p>
        Here is the list of all the available hotels in our database:
      </p>
    </Layout>
  );
}

export default Hotels

// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fluid(maxWidth: 250, maxHeight: 250) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
// export const query = graphql`
//   query {
//     image1: file(relativePath: { eq: "book.jpg" }) {
//       ...squareImage
//     }

//     image2: file(relativePath: { eq: "hotels.jpg" }) {
//       ...squareImage
//     }

//     image3: file(relativePath: { eq: "payment.jpg" }) {
//       ...squareImage
//     }
//   }
// `