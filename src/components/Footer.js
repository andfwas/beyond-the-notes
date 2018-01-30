import React from 'react'
import styled from 'styled-components'

var Foot = styled.div `
  width: 80%;
  margin: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  background-color: #54AB32;
  cursor: pointer;
  padding: 1vw;
`;

var Links = styled.div`
  display: flex;
  flex-flow: row;
`;

var Atag = styled.a`
  transition: 0.3s;
  font-size: 1.2vw;
  color: #DADADA;
  :hover {
    color: #FEDCBA;
  }
  :active {
    color: black;
  }
`;

class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (<Foot>
      <Links>
        <Atag>Home</Atag>
        &nbsp;<p> | </p>&nbsp;
        <Atag>About Us</Atag>
        &nbsp;<p> | </p>&nbsp;
        <Atag>Products</Atag>
        &nbsp;<p> | </p>&nbsp;
        <Atag>Sign Up</Atag>
        &nbsp;<p> | </p>&nbsp;
        <Atag>Contact Us</Atag>
        &nbsp;<p> | </p>&nbsp;
      </Links>
      <div>
        <p className="copy">&copy; 2018 Beyond The Notes</p>
      </div>
    </Foot>)
  }
}

export default Footer
