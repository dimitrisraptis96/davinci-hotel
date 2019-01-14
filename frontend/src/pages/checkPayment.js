import React from 'react'
import axios from 'axios';
import styled from 'styled-components'
import swal from 'sweetalert';

import { Button } from "grommet";
import { grommet, MaskedInput } from "grommet/themes";

import { Link } from 'gatsby'
// import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/card'
import Input from '../components/input'

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
`

class CheckPayment extends React.Component {
  state = {
    reservationCode: '',
  }

  onChange = event => this.setState({ reservationCode: event.target.value })

  check = () => {
    const {
      reservationCode,
    } = this.state;
    const fd = new FormData();
    fd.append('reservationId', reservationCode);

    axios.post('https://stormy-shore-14285.herokuapp.com/'+'payed', fd)
      .then((response) => {
        this.setState({isAvailable: true})
        const payed = response.data.payed;

        if (payed){
          swal("Nice!", "Your reservation payment is valid!  ", "success");
        }
        else {
          swal("Oops!", `No valid payment for the "${reservationCode}" reservation`, "error");
        }
      })
      .catch((error) => {
        this.setState({isAvailable: false})
        swal("Oops!", `Not valid reservation code`, "error");
      });
  }

  render() {
    const {
      reservationCode
    } = this.state;

    return (
      <Layout>
        <h2>
          <Underline>Check your Payment</Underline>
        </h2>
        <p>Fill your <b>reservation code</b> in order to clarify your payment:</p>

        <Input 
          value={reservationCode}
          onChange={this.onChange}
        />
        <Button color='#55efc4' label={'Check Now'} onClick={this.check} />
      </Layout>
    )
  }
}

export default CheckPayment