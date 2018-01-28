import React from 'react'
// import Vex from 'vexflow'
import styled from 'styled-components'
import staff from '../images/staff.png'

// var VF = Vex.Flow;
//
// // Create an SVG renderer and attach it to the DIV element named "boo".
// var div = document.getElementById("boo")
// var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// // Size our svg:
// renderer.resize(500, 500);
//
// // And get a drawing context:
// var context = renderer.getContext();
//
// // Create a stave at position 10, 40 of width 400 on the canvas.
// var Stave = new VF.Stave(10, 40, 400);
//
// // Add a clef and time signature.
// Stave.addClef("treble").addTimeSignature("4/4");
//
// // Connect it to the rendering context and draw!
// // Stave.setContext(context).draw();

var Lesson = styled.img`
  width: 80%;
  margin-left: 10%;
`
var Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 3vw;
`
var Button = styled.button`
  height: 5vw;
  width: 12vw;
  font-size: 1.5vw;
  border-radius: 1vw;
  transition: 0.2s;
  box-shadow: 0.2vw 0.2vw 0.2vw black;
  :hover {
    background-color: lightgrey;
    border: none;
    box-shadow: none;
  }
  :focus {
    outline: none;
  }
  :active {
    background-color: #EFEFFF;
  }
`;
var ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #035460;
`;
class Staff extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <ButtonDiv>
          <Container>
            <Button>&#8592; BACK</Button>
            <Button>NEXT &#8594;</Button>
          </Container>
        </ButtonDiv>
        <Lesson src={staff} />
      </div>
    )
  }
}

export default Staff
