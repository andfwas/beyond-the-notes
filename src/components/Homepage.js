import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

const sidebar = styled.div`
  display: flex;
  flex-flow: column;
`;

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Sidebar className={sidebar} />
        <Navbar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Homepage
