import React from 'react'
import styled from 'styled-components'
import Notes from './Notes'
import Rhythms from './Rhythms'
import Ideal from './Ideal'

var Main = styled.div`
  padding-left: 2vw;
  margin-bottom: 2vw;
`

class Included extends React.Component {
  constructor() {
    super()
    this.state =  {

    }
  }
  render() {
    return (
      <Main>
        <h2>Whats Included?</h2>
        <Notes />
        <Rhythms />
        <Ideal />
      </Main>
    )
  }
}

export default Included
