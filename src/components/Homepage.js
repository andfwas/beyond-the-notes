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
  padding-top: 0;
`;

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      sidebarActive: false,
      main: true,
      buttonHtml: "Start Learning Now",
      clef: 21,
      note: 4
    }
    this.treble = this.treble.bind(this)
    this.alto = this.alto.bind(this)
    this.tenor = this.tenor.bind(this)
    this.bass = this.bass.bind(this)
  }
  swapStaff = () => {
    var buttonState
    if (this.state.main) {
      buttonState = 'Home'
    } else {
      buttonState = 'Start Learning Now'
    }
    this.setState({
      sidebarActive: !this.state.sidebarActive,
      main: !this.state.main,
      buttonHtml: buttonState
    })
  }
  treble = () => {
    this.setState({
      clef: 21
    })
  }
  alto = () => {
    this.setState({
      clef: 22
    })
  }
  tenor = () => {
    this.setState({
      clef: 23
    })
  }
  bass = () => {
    this.setState({
      clef: 24
    })
  }
  render() {
    return (
      <div>
        <Body>
          <Sidebar swapStaff={this.swapStaff} buttonHtml={this.state.buttonHtml}  status={this.state.sidebarActive}/>
          <Mains>
            { !this.state.sidebarActive ? (
              <Navbar/>
            ) : null}
            <Main status={this.state.sidebarActive} page={this.state.main} state={this.state} treble={this.treble} alto={this.alto} tenor={this.tenor} bass={this.bass}/>
          </Mains>
        </Body>
        <Footer/>
      </div>
    )
  }
}

export default Homepage
