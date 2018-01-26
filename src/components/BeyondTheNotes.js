import React from 'react'
import styled from 'styled-components'

var Atag = styled.a`
  color: purple;
  transition: 0.3s;
  :hover {
    color: blue;
  }
`;
var Atag2 = styled.a`
  color: purple;
  transition: 0.3s;
  :hover {
    color: blue;
  }
  float: right;
`;

class BeyondTheNotes extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h2>Beyond the Notes
          <em> Online Music Learning</em>
        </h2>
        <p>
          Beyond The Notes Online Music Learning service is the source for classroom and individual computer based learning. Our products are designed to be displayed on a classroom projector and used as a teaching tool for the whole class. Students can also log in and continue their learning with self paced interactive exercises in the computer lab or at home.
        </p>
        <p>
          <b>Purchase a 1-year subscription for just $89 - Get Started Now with a FREE 1 week trial!</b> With your subscription you will have access to all our online music training programs. As new courses are released, they are automatically added to your account!
        </p>
        <Atag href="#" className="main-link-left">Start your Free Trial Now!</Atag>
        <br/>
        <Atag2 href="#" className="main-link-right">Learn more about Online Music Learning</Atag2>
        <br/>
        <hr/>
      </div>
    )
  }
}

export default BeyondTheNotes
