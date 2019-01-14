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
  align-items: flex-start;
  /* text-align: center; */

  width: 50%;
  padding: 2em 2em 0 2em ;
  margin: 1em 0;

  border-radius: 8px;
  box-shadow: 0 13px 78px -13px rgba(0,0,0,0.4);
`;

const Label = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #aaa;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  > :first-child {
    margin-right: 1em;
  }
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

const dummyHotels = [
  {
    country: 'Greece',
    city: 'Athens',
    rating: '5',
  },
  {
    country: 'Greece',
    city: 'Athens',
    rating: '5',
  },
  {
    country: 'Greece',
    city: 'Athens',
    rating: '5',
  },
  {
    country: 'Greece',
    city: 'Athens',
    rating: '5',
  },
  {
    country: 'Greece',
    city: 'Athens',
    rating: '5',
  },
]

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

    axios.get('https://stormy-shore-14285.herokuapp.com/hotels')
      .then((response) => {
        const hotels = response.data;

        this.setState({
          hotels,
          isLoading: false,
        })
      })
      .catch((error) => {
        this.setState({isLoading: false})
        swal("Oops!", `Server Error`, "error");
      });
  }

  render() {
    const {
      hotels,
      isLoading,
      isError,
    } = this.state;

    if(isLoading) {
      return ( 
        <Layout>
          <p> Please wait, while we fetch our hotels... </p>
        </Layout>
      );
    }

    const hasHotels = hotels !== [];
    console.log(hotels);
    
    return (
      <Layout>
        <h2><Underline>Hotels</Underline></h2>          

        {hasHotels &&
          <React.Fragment>
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
          </React.Fragment>
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