import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { Button, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";

const Label = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #aaa;
`;

const Input = (props) => {
  const {
    onChange,
    label,
    value
  } = props;
  
  return (
    <div>
      <Label>{label}</Label>
      <TextInput
        // label={label}
        value={value}
        onChange={onChange}
        style={{width: '50%', color: '#55efc4', marginBottom: '2em'}}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  value: '',
  label: '',
};

export default Input;