import React from 'react'
import styled from 'styled-components';

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"


import Calendar from "../components/calendar";
import Input from '../components/input'
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

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  > :first-child {
    margin-right: 2em;
  }
`;

class Book extends React.Component {
  state = {
    unit: '',
    building: '',
    room: '',

    price: '',
    numOfPeople: '',
    dateFrom: '',
    dateTo: '',

    firstname: '',
    lastname: '',
    email: '',

    licencePlate: '',
  }

  handleFirstname = event => this.setState({ firstname: event.target.value })
  handleLastname = event => this.setState({ lastname: event.target.value })
  handleEmail = event => this.setState({ email: event.target.value })
  
  handleDateFrom = nextDate => {
    const { dateFrom } = this.state;
    this.setState({ dateFrom: nextDate !== dateFrom ? nextDate : undefined });
  };
  
  handleDateTo = nextDate => {
    const { dateTo } = this.state;
    this.setState({ dateTo: nextDate !== dateTo ? nextDate : undefined });
  };

  render(){
    // console.log(this.state);

    const {
      firstname,
      lastname,
      email,
      dateFrom,
      dateTo,
    } = this.state;

    console.log(this.state);
    
    return (
      <Layout>
        <h2><Underline>Book a room</Underline></h2>
        <p>Choose a room and fill your personal information:</p>

        <Input 
          value={firstname}
          label={'Firstname'}
          onChange={this.handleFirstname}
        />
        <Input 
          value={lastname}
          label={'Lastname'}
          onChange={this.handleLastname}
        />
        <Input 
          value={email}
          label={'Email'}
          onChange={this.handleEmail}
        />  

        <CalendarWrapper>
          <Calendar
            label={'Check In'}
            date={dateFrom}
            endDate={dateTo}
            onSelect={this.handleDateFrom}
          />
          <Calendar
            label={'Check Out'}
            date={dateTo}
            startDate={dateFrom}
            onSelect={this.handleDateTo}
          />
        </CalendarWrapper>

      </Layout>
    );
  }
}

export default Book

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