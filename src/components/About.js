import React from 'react'
import styled from 'styled-components'

const Center = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 4vw;
  display: flex;
  flex-flow: column;
`;
const Htag = styled.h3`
  color: white;
`;
var Atag = styled.a`
  transition: 0.3s;
  color: #DADADA;
  text-decoration: none;
  margin: 0.5vw;
  font-size: 1vw;
  :hover {
    color: #FEDCBA;
  }
  :active {
    color: white;
  }
`;

class About extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Center>
        <Htag>About Us</Htag>
        <Atag href="#">&raquo; About Beyond the Notes</Atag>
        <Atag href="#">&raquo; FAQs</Atag>
        <Atag href="#">&raquo; Contact Us</Atag>
        <Atag href="#">&raquo; Privacy Policy</Atag>
        <Atag href="#">&raquo; BeyondTheNotes.com</Atag>
      </Center>
    )
  }
}

export default About
