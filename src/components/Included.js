import React from 'react'
import styled from 'styled-components'
import Notes from './Notes'
import Rhythms from './Rhythms'
import Ideal from './Ideal'


class Included extends React.Component {
  constructor() {
    super()
    this.state =  {

    }
  }
  render() {
    return (
      <div>
        <h2>Whats Included?</h2>
        <Notes />
        <Rhythms />
        <Ideal />
      </div>
    )
  }
}

export default Included
