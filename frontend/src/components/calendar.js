import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Grommet, Calendar } from 'grommet'
import { grommet } from 'grommet/themes'

const Label = styled.p`
  margin: 0;
  font-size: 0.75em;
  color: #aaa;
`

const MyCalendar = props => {
  const { onSelect, label, date, startDate, endDate } = props

  const start = (startDate !== '') ? startDate.split('T')[0] : '2019-01-01'
  const end =( endDate !== '') ? endDate.split('T')[0] : '2019-12-30'

  return (
    <div>
      <Label>{label}</Label>
      <Calendar
        date={date}
        onSelect={onSelect}
        size="small"
        bounds={[start, end]}
      />
    </div>
  )
}

MyCalendar.propTypes = {
  onSelect: PropTypes.func,
  label: PropTypes.string,
  date: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

MyCalendar.defaultProps = {
  onSelect: () => {},
  date: '',
  label: '',
  startDate: '',
  endDate: '',
}

export default MyCalendar
