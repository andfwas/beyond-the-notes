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
  padding-bottom: 3vw;
  padding-top: 2vw;
`;
var LogoDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: -2vw;
  margin-bottom: -2vw;
  margin-top: 1vw;
  background-color: white;
`;
var ButtonDiv = styled.div`
  margin-top: 1vw;
  display: flex;
  justify-content: center;
`;
var Button = styled.button`
  height: 5vw;
  width: 8vw;
  font-size: 1.5vw;
  border-radius: 1vw;
  transition: 0.2s;
  box-shadow: 0.2vw 0.2vw 0.2vw black;
  :hover {
    background-color: lightgrey;
    border: none;
    box-shadow: none;
  }
  :focus {
    outline: none;
  }
  :active {
    background-color: #EFEFFF;
  }
`;
var LogoImage = styled.img`
  width: 80%;
  margin-left: 10%;
`;
var Image = styled.img`
  width: 90%;
  margin-left: 5%;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <Left>
        <Leftbar>
          <ButtonDiv>
            { this.props.buttonHtml ? (
              <Button type="button" onClick={this.props.swapStaff}>{this.props.buttonHtml}</Button>
            ) : null }
          </ButtonDiv>
          { !this.props.status ? (
            <div>
              <Learning />
              <Products />
              <About />
            </div>
          ) : null }
        </Leftbar>
        { this.props.status ? (
          <LogoDiv>
            <LogoImage src={titleImage} />
          </LogoDiv>
        ) : null}
      <Image src={musicKing} />
    </Left>
    )
  }
}
export default Sidebar
