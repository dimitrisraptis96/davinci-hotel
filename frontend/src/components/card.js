import React from 'react'
import { Link } from 'gatsby'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Box, Button, Grommet, RoutedButton, Text } from 'grommet'
import { grommet } from 'grommet/themes'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 30%;
  padding: 2em 1em 0 1em;
  margin: 0 1em;

  border-radius: 8px;
  box-shadow: -10px -10px 30px 4px rgba(85, 239, 196, 0.1),
    10px 10px 30px 4px rgba(85, 239, 196, 0.1);

  :hover {
    transform: scale(1.05);
    box-shadow: -10px -10px 30px -6px rgba(85, 239, 196, 0.1),
                10px 10px 30px -6px rgba(85, 239, 196, 0.1);
  }
`;

const Card = ({ text, image, route, label }) => {
  return (
    <Wrapper>
      <h4>{text}</h4>
      {image}
      <Grommet theme={grommet}>
        <Box align="center" pad="large">
          <Link to={route}>
            <Button color='#55efc4' label={label} onClick={() => {}} />
          </Link>
        </Box>
      </Grommet>
    </Wrapper>
  )
}

export default Card
