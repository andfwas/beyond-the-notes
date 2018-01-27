import React from 'react'
import styled from 'styled-components'
import staff from '../images/staff.png'
var Star = styled.div`
  display: flex;
  flex-flow: row;
  align-items: baseline;
`;
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
var Links = styled.div`
  display: flex;
  flex-flow: column;
`;
var Atag = styled.a`
  color: purple;
  transition: 0.3s;
  :hover {
    color: blue;
  }
  float: right;
  cursor: pointer;
`;
class Rhythms extends React.Component {
  constructor() {
    super()
    this.state =  {

    }
  }
  render() {
    return (
      <div>
        <h3>
            Rhythm Rulz</h3>
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
          <Star>
            <span className="glyphicon glyphicon-star" aria-hidden="true">
                  </span> &nbsp;&nbsp;
            <h4>Demos</h4>
          </Star>
        <Links>
          <Atag>Launch Level 1 Study Mode Demo</Atag>
          <Atag>Launch Level 1 Practice Mode Demo</Atag>
          <Atag>Start your Free Trial Now!</Atag>
        </Links>
        <p>A fun, innovative way to learn how to read and count rhythms. Complete with a study mode for cognitive learning and a practice mode for psychomotor training, students will be taken through 230 rhythm slides in 8 levels of increasing complexity.</p>
        <Atag href="#">Learn More about Rhythm Rulz</Atag>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}
export default Rhythms
