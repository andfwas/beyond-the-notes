import React from 'react'
import styled from 'styled-components'
import titleImage from '../images/titleImage.png'
import BeyondTheNotes from './BeyondTheNotes'
import Included from './Included'

var Mains = styled.div `
  padding: 21px;
`;
var TitleImage = styled.img `
  width: 70%;
  margin-left: 15%;
`;

class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Mains>
        <TitleImage src={titleImage}/>
        <BeyondTheNotes />
        <Included />
      </Mains>
    )
  }
}

export default Main
