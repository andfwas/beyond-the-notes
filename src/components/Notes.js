import React from 'react'
import styled from 'styled-components'
import staff from '../images/staff.png'

var Star = styled.div`
  display: flex;
  flex-flow: row;
  align-items: baseline;
`

var Row = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

var Staff = styled.img`
  width: 6vw;
  transition: 0.5s;
  :hover {
    width: 18vw;
  }
`;

var Atag = styled.a`
  color: purple;
  transition: 0.3s;
  :hover {
    color: blue;
  }
  float: right;
`;

class Notes extends React.Component {
  constructor() {
    super()
    this.state =  {

    }
  }
  render() {
    return (
      <div>
        <h3>Name That Note</h3>
          <Star>
            <span className="glyphicon glyphicon-star" aria-hidden="true">
              </span> &nbsp;&nbsp;
            <h4>Screen Shots</h4>
          </Star>
          <Row>
            <Staff src={staff} alt="" />
            <Staff src={staff} alt="" />
            <Staff src={staff} alt="" />
            <Staff src={staff} alt="" />
            <Staff src={staff} alt="" />
          </Row>
          <p>The key to advancing a musicians' sight reading and overall music reading ability is to recognize every note at a quick glance. Students will learn the different notes of the different staffs: Treble, Alto, Tenor, and Bass. Compare the staffs
            or just view one at a time. Lesson and drills are both included for an interactive learning experience.</p>
          <br />
          <Atag href="#">
            Learn More about Name That Note!</Atag>
            <br />
          <hr />
      </div>
    )
  }
}

export default Notes
