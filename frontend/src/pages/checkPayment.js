import React from 'react'
import styled from 'styled-components'

import { Button } from "grommet";
import { grommet } from "grommet/themes";

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

  render() {
    const {
      reservationCode
    } = this.state;

    return (
      <Layout>
        <h2>
          <Underline>Check your Payment</Underline>
        </h2>
        <p>Fill your reservation code in order to clarify your payment:</p>

        <Input 
          value={reservationCode}
          onChange={this.onChange}
        />
        <Button color='#55efc4' label={'Check Now'} onClick={() => {}} />
      </Layout>
    )
  }
}

export default CheckPayment