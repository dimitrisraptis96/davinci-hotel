import React, { Fragment } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import swal from 'sweetalert';

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Button } from "grommet";

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
    unitId: '',
    buildingId: '',
    roomId: '',

    isAvailable: false,

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

  checkAvailability = () => {
    const {
      roomId,
      buildingId,
      unitId,
      dateFrom,
      dateTo,
    } = this.state;

    axios.post('/checkRoom', {
      roomId,
      buildingId,
      unitId,
      dateTo,
      dateFrom,
    })
      .then((response) => {
        this.setState({isAvailable: true})
        swal("Perfect!", "The room is available!  ", "success");
      })
      .catch((error) => {
        this.setState({isAvailable: false})
        swal("Oops!", "Sorry bro! These dates are reserved", "error");
      });
  }

  submit = () => {
    const {
      roomId,
      buildingId,
      unitId,
      dateTo,
      dateFrom,
      numOfPeople,
      firstname,
      lastname,
      email,
    } = this.state;

    axios.post('http://fakeurl.com/bookd', {
      roomId,
      buildingId,
      unitId,
      dateTo,
      dateFrom,
      numOfPeople,
      firstname,
      lastname,
      email,
    })
      .then((response) => {
        this.setState({isAvailable: true})
        swal("Have Fun!", "Your reservation was successful!","success");
      })
      .catch((error) => {
        this.setState({isAvailable: false})
        swal("Oops!", "Server error, bro!", "error");
      });
  }
  render(){
    // console.log(this.state);

    const {
      firstname,
      lastname,
      email,
      dateFrom,
      dateTo,
      isAvailable,
    } = this.state;

    console.log(this.state);
    
    return (
      <Layout>
        <h2><Underline>Book a room</Underline></h2>

        { !isAvailable && 
          <Fragment>
            <p style={{margin: '2em 0'}}>Choose dates for your room:</p>
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

            <Button style={{margin: '2em 0'}} color='#55efc4' label={'Check'} onClick={this.checkAvailability} />
          </Fragment>
        }

        { isAvailable &&
          <Fragment>
            <p style={{margin: '2em 0'}}> Now fill your personal information:</p>
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

            <Button style={{margin: '2em 0'}} color='#55efc4' label={'Book'} onClick={this.submit} />
          </Fragment>
        }

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