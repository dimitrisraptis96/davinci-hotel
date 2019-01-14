import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import { Button, Select as GSelect } from "grommet";
import { grommet } from "grommet/themes";

const Label = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #aaa;
`;


const Select = (props) => {
  const {
    onChange,
    label,
    placeholder,
    value,
    options,
  } = props;
  
  return (
    <div>
      <Label>{label}</Label>
      <GSelect
        size="medium"
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        style={{width: '50%', maxHeight:'2em !important', color: '#55efc4', marginBottom: '2em'}}
      />
    </div>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};

Select.defaultProps = {
  onChange: () => {},
  value: '',
  label: '',
};

export default Select;