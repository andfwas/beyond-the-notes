import React from 'react'
import styled from 'styled-components'

var Bar = styled.div`
  width: 95%;
  margin-left: 2.5%;
  margin-top: 0;
  padding: 2vw;
  background-color: red;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`;
var Atag = styled.a`
  font-size: 1.2vw;
  transition: 0.3s;
  color: #DADADA;
  text-decoration: none;
  :hover {
    color: #FEDCBA;
  }
  :active {
    color: black;
  }
`;

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Bar>
        <Atag href="#">Home</Atag>
        <Atag href="#">Register to Begin Free Trial</Atag>
        <Atag href="#">Try Demo Now!</Atag>
        <Atag href="#">About Us</Atag>
        <Atag href="#">Contact Us</Atag>
      </Bar>
    )
  }
}

export default Navbar
