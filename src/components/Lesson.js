import React from 'react'
import styled from 'styled-components'
import Staff from './Staff'

var Lessons = styled.div`
  width: 80%;
  margin-left: 10%;
`
var Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
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
var Clef = styled.button`
  width: 4vw;
  font-size: 1vw;
  border-radius: 0.7vw;
  transition: 0.2s;
  box-shadow: 0.2vw 0.2vw 0.2vw black;
  background-image: {images[0]};
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
`
var ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #035460;
`;
class Lesson extends React.Component {
  constructor() {
    super()
    this.state = {
      clef: 21,
      note: 4,
      noteIndex: 4,
      start: true,
      end: false
    }
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
  trebleHandler = () => {
    this.treble()
  }
  altoHandler = () => {
    this.alto()
  }
  tenorHandler = () => {
    this.tenor()
  }
  bassHandler = () => {
    this.bass()
  }
  increment = () => {
    if (this.state.noteIndex == 20) {
    } else {
      var i = this.state.noteIndex + 1
      this.setState({
        noteIndex: i
      })
    }
  }
  decrement = () => {
    if (this.state.noteIndex == 0) {
    } else {
      var i = this.state.noteIndex - 1
      this.setState({
        noteIndex: i
      })
    }
  }
  render() {
    var start = this.state.start
    var end = this.state.end
    // console.log('start', start);
    // console.log('end', end);
    return (
      <div>
        <ButtonDiv>
          <Container>
            <Button id="back" onClick={() => this.decrement()}>&#8592; BACK</Button>
            <Clef onClick={() => this.trebleHandler()}>Treble Clef</Clef>
            <Clef onClick={() => this.altoHandler()}>Alto Clef</Clef>
            <Clef onClick={() => this.tenorHandler()}>Tenor Clef</Clef>
            <Clef onClick={() => this.bassHandler()}>Bass Clef</Clef>
            <Button id="next" onClick={() => this.increment()}>NEXT &#8594;</Button>
          </Container>
        </ButtonDiv>
        <Lessons>
          <Staff clef={this.state.clef} note={this.state.note} noteIndex={this.state.noteIndex} start={this.state.start} end={this.state.end} />
        </Lessons>
      </div>
    )
  }
}

export default Lesson
