import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/card'
import SEO from '../components/seo'


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

const IndexPage = ({data}) => {

  const cards = [
    {
      text: 'Book a room',
      label: 'Book',
      image: <Image fluid={data.image1.childImageSharp.fluid} />,
      route: '/book',
    },
    {
      text: 'Show me the hotels',
      label: 'Show',
      image: <Image fluid={data.image2.childImageSharp.fluid} />,
      route: '/showHotels',
    },
    {
      text: 'Did I pay my reservation?',
      label: 'Check',
      image: <Image fluid={data.image3.childImageSharp.fluid} />,
      route: '/checkPayment',
    }
  ];

  return (
    <Layout >
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <Image width={300} name='hotel.jpg'/> */}
      <p>
        Welcome to our <Underline>Hotel Database</Underline>. You have the following options:
      </p>

      <Cards>
        { cards.map((card, index) => (
            <Card 
              key={index}
              text={card.text}
              label={card.label}
              image={card.image}
              route={card.route}
            />
          ))
        }
      </Cards>

    </Layout>
  );
}

export default IndexPage

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    image1: file(relativePath: { eq: "book.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "hotels.jpg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "payment.jpg" }) {
      ...squareImage
    }

  }
`