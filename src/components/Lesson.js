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
var NoButton = styled.div`
height: 5vw;
width: 12vw;
font-size: 1.5vw;
`
var Clef = styled.button`
  width: 4vw;
  font-size: 1vw;
  border-radius: 0.7vw;
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
`
var ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #035460;
`;
var Middle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

`
var ClefRow = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin-top: -4vw;
  margin-bottom: 1vw;
`
var SequenceRow = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;

`
var ShowHide = styled.button`
  font-size: 1vw;
  word-wrap: normal;
  width: 7.5vw;
  margin-bottom: -4vw;
  border-radius: 0.7vw;
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
    background-color: #FFEFEF;
  }
`
class Lesson extends React.Component {
  constructor() {
    super()
    this.state = {
      clef: 21,
      note: 4,
      noteIndex: 4,
      start: false,
      end: false,
      showHide: false
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
    if (this.state.noteIndex == 19) {
      this.setState({
        noteIndex: 20,
        end: true
      })
    } else {
      var i = this.state.noteIndex + 1
      this.setState({
        noteIndex: i,
        start: false,
        end: false
      })
    }
  }
  decrement = () => {
    if (this.state.noteIndex == 1) {
      this.setState({
        noteIndex: 0,
        start: true
      })
    } else {
      var i = this.state.noteIndex - 1
      this.setState({
        noteIndex: i,
        start: false,
        end: false
      })
    }
  }
  pickRandom = () => {
    var random = Math.floor(Math.random()*21)
    this.setState({
      noteIndex: random
    })
  }
  showHide = () => {
    var onOrOff = !this.state.showHide
    this.setState({
      showHide: onOrOff
    })
  }
  render() {
    var start = this.state.start
    var end = this.state.end
    var index = this.state.index

    return (
      <div>
        <ButtonDiv>
          <Container>
            { !start ? (
              <Button id="back" onClick={() => this.decrement()}>&#8592; BACK</Button>
            ) : <NoButton />}
            <Middle>
            <ClefRow>
              <Clef onClick={() => this.trebleHandler()}>Treble Clef</Clef>
              <Clef onClick={() => this.altoHandler()}>Alto Clef</Clef>
              <Clef onClick={() => this.tenorHandler()}>Tenor Clef</Clef>
              <Clef onClick={() => this.bassHandler()}>Bass Clef</Clef>
            </ClefRow>
            <SequenceRow>
              <ShowHide onClick={() => this.pickRandom()}>Pick a Random Note</ShowHide>
              <ShowHide onClick={() => this.showHide()}>Show/Hide Note Name</ShowHide>
            </SequenceRow>
          </Middle>
            { !end ? (
              <Button id="next" onClick={() => this.increment()}>NEXT &#8594;</Button>
            ) : <NoButton />}
          </Container>
        </ButtonDiv>
        <Lessons>
          <Staff clef={this.state.clef} note={this.state.note} noteIndex={this.state.noteIndex} start={this.state.start} end={this.state.end} showHide={this.state.showHide}/>
        </Lessons>
      </div>
    )
  }
}

export default Lesson
