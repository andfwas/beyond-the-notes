import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

var Body = styled.div `
  width: 80%;
  margin: auto;
  display: flex;
  flex-flow: row;
`;
var Mains = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      sidebarActive: false,
      main: true

    }
  }
  swapStaff = () => {
    this.setState({
      sidebarActive: !this.state.sidebarActive,
      main: !this.state.main
    })
  }
  render() {
    // console.log(this.state.main);
    return (
      <div>
        <Body>
          <Sidebar swapStaff={this.swapStaff}/>
          <Mains>
            <Navbar/>
            <Main status={this.state.sidebarActive} page={this.state.main}/>
          </Mains>
        </Body>
        <Footer/>
      </div>
    )
  }
}

export default Homepage
