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

class Products extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Center>
        <Htag>Products</Htag>
        <Atag href="#">&raquo; Name That Note</Atag>
        <Atag href="#">&raquo; Rhythm Rulz</Atag>
        <Atag href="#">&raquo; Meet The Rhythm Ruler</Atag>
        <Atag href="#">&raquo; View All</Atag>
      </Center>
    )
  }
}

export default Products
