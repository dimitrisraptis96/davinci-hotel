import React from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import styled from 'styled-components';

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import Image from '../components/image'
import { renderComponent } from 'recompose';


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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* text-align: center; */

  width: 30%;
  padding: 2em 1em 0 1em;
  margin: 1em 0;

  border-radius: 8px;
  box-shadow: -10px -10px 30px 4px rgba(85, 239, 196, 0.1),
    10px 10px 30px 4px rgba(85, 239, 196, 0.1);
`;

const Label = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #aaa;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Hotel = ({
  country,
  city,
  rating,
}) => (
  <Card>
    <Row> <Label>Country:</Label> <p> {country} </p> </Row>
    <Row><Label>City:</Label> <p> {city} </p></Row>
    <Row><Label>Rating:</Label> <p> {rating} </p></Row>
  </Card>
)

class Hotels extends React.Component {
  state = {
    hotels: [],
    isLoading: false,
    isError: false,
  }
  
  componentDidMount() {
    this.fetchHotels();
  }

  fetchHotels = () => {
    this.setState({isLoading: true});
  }

  render() {
    const {
      hotels,
      isLoading,
      isError,
    } = this.state;

    if(isLoading) return (<p> Please wait, while we fetch our hotels! </p>);
    const hasHotels = hotels !== [];

    return (
      <Layout>
        <h2><Underline>Hotels</Underline></h2>          

        {hasHotels &&
          <React.Frament>
            <p style={{margin: '2em 0'}}>
              Here is the list of all the available hotels in our database:
            </p>
            { hotels.map((hotel,index) => (
              <Hotel 
                country={hotel.country}
                city={hotel.city}
                rating={hotel.rating}
              />
            ))}
          </React.Frament>
        }

        { !hasHotels && 
          <p style={{margin: '2em 0'}}>
            Here is the list of all the available hotels in our database:
          </p>
        }
      </Layout>
    );
  }
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