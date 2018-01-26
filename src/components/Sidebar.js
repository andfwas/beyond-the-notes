import React from 'react'
import styled from 'styled-components'
import musicKing from '../images/musicKing.png'
import titleImage from '../images/titleImage.png'

const Logo = styled.img`
  width: 200px
`;

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <p>Sidebar</p>
        <Logo src={titleImage} />
        <Logo src={musicKing} />
      </div>
    )
  }
}

export default Sidebar
