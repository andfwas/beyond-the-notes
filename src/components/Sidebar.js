import React from 'react'
import styled from 'styled-components'
import musicKing from '../images/musicKing.png'
import titleImage from '../images/titleImage.png'
import Learning from './Learning'
import Products from './Products'
import About from './About'

var Left = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 40%;
`;
var Leftbar = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #035460;
`;
var LogoDiv = styled.div`
  transition: 0.3s;
  width: 90%;
  margin: auto;
  margin-top: 2vw;
  margin-bottom: 2vw;
  border-radius: 1vw;
  background-color: white;
  box-shadow: 0.5vw 0.5vw 0.5vw black;
  :hover {
    background-color: #EFEFFF;
    box-shadow: 0 0 0.5vw blue;
  }
`;
var ButtonDiv = styled.div`
  margin-top: 4vw;
  display: flex;
  justify-content: center;
`;
var Button = styled.button`
  height: 5vw;
  width: 12vw;
  font-size: 1.5vw;
  border-radius: 1vw;
  transition: 0.2s;
  :hover {
    background-color: lightgrey;
    border: none;
  }
`;
var LogoImage = styled.img`
  width: 80%;
  margin-left: 10%;
`;
var Image = styled.img`
  width: 100%;
  margin-top: 4vw;
  float: left;
`;
class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Left>
        <Leftbar>
          <a href="/">
          <LogoDiv>
            <LogoImage src={titleImage} />
          </LogoDiv>
        </a>
        <ButtonDiv>
          <Button type="button" onClick={this.props.swapStaff}>Start Learning Now!</Button>
        </ButtonDiv>
        <Learning />
        <Products />
        <About />
      </Leftbar>
      <Image src={musicKing} />
    </Left>
    )
  }
}

export default Sidebar
