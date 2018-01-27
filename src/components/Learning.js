import React from 'react'
import styled from 'styled-components'

var Center = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 4vw;
  display: flex;
  flex-flow: column;
`;
var Htag = styled.h3`
  color: white;
`;
var Atag = styled.a`
  transition: 0.3s;
  color: #DADADA;
  text-decoration: none;
  margin: 0.5vw;
  :hover {
    color: #FEDCBA;
  }
  :active {
    color: white;
  }
`;

class Learning extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Center>
        <Htag>Online Music Learning</Htag>
        <Atag href="#">&raquo; Free 1 Week Trial - Start Now!</Atag>
        <Atag href="#">&raquo; About Our Website Subscriptions</Atag>
        <Atag href="#">&raquo; Step-By-Step Instructions</Atag>
        <Atag href="#">&raquo; New Users - Register Now</Atag>
      </Center>
    )
  }
}

export default Learning
