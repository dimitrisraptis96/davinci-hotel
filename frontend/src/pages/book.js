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
import Select from '../components/select'
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
  margin-bottom: 2em;
  
  > :first-child {
    margin-right: 2em;
  }
`;

class Book extends React.Component {
  state = {
    roomId: '1',

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
  
  handleDateFrom = date => {
    const { dateFrom } = this.state;
    const nextDate = date.split('T')[0];
    this.setState({ dateFrom: nextDate !== dateFrom ? nextDate : undefined });
  };
  
  handleDateTo = date => {
    const { dateTo } = this.state;
    const nextDate = date.split('T')[0];
    this.setState({ dateTo: nextDate !== dateTo ? nextDate : undefined });
  };

  handleNumOfPeople = option => this.setState({numOfPeople: option.value});

  checkAvailability = () => {
    const {
      roomId,
      numOfPeople,
      dateFrom,
      dateTo,
    } = this.state;
    
    const fd = new FormData();
    fd.append('dateFrom', dateFrom);
    fd.append('dateTo', dateTo);
    fd.append('people', numOfPeople);
    fd.append('roomId', roomId);

    axios.post('https://stormy-shore-14285.herokuapp.com/' + 'checkRoom', fd)
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
      dateTo,
      dateFrom,
      numOfPeople,
      firstname,
      lastname,
      email,
    } = this.state;

    const fd = new FormData();
    fd.append('dateFrom', dateFrom);
    fd.append('dateTo', dateTo);
    fd.append('firstname', firstname);
    fd.append('lastname', lastname);
    fd.append('email', email);
    fd.append('roomId', roomId);

    axios.post('https://stormy-shore-14285.herokuapp.com/' + 'book', fd)
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
      numOfPeople,
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
            
            <Select
              placeholder="eg. 2"
              label="Number of people"
              value={numOfPeople}
              options={['1', '2', '3', '4']}
              onChange={this.handleNumOfPeople}
            />

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