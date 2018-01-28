import React from 'react'
import styled from 'styled-components'
import staff from '../images/staff.png'

var Lesson = styled.img`
  width: 100%;
`

class Staff extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <img src={staff} />
    )
  }
}

export default Staff
