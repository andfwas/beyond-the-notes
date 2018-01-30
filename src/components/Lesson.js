import React from 'react'
import styled from 'styled-components'
import Staff from './Staff'

var Lessons = styled.div`
  width: 80%;
  margin-left: 10%;
`
var Container = styled.div`
  margin-left: -4.5vw;
  width: 62.5vw;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 3vw;
  background-color: #035460;
  padding-left: 0;
  padding-right: 1vw;
`
var Button = styled.button`
  height: 5vw;
  width: 8vw;
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
`
var NoButton = styled.div`
height: 5vw;
width: 12vw;
font-size: 1.5vw;
`
var DropDown = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`
var Select = styled.select`
  width: 9vw;
  font-size: 1vw;
`
var Option = styled.option`;
font-size: 1vw;
`
var H = styled.h4`
  color: #DADADA;
`
class Lesson extends React.Component {
  constructor() {
    super()
    this.state = {
      clef: 21,
      note: 4,
      noteIndex: 4,
      showHide: false,
      noteDisplay: 'SHOW NOTE'
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
  handleClef = (e) => {
    var current = Number(e.target.value)
    this.setState({
      clef: current
    })
  }
  handleLesson = (e) => {
    var current = Number(e.target.value)
    console.log(current);
  }
  increment = () => {
    if (this.state.noteIndex === 19) {
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
    if (this.state.noteIndex === 1) {
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
    if (onOrOff) {
      this.setState({
        showHide: onOrOff,
        noteDisplay: 'HIDE  NOTE'
      })
    } else {
      this.setState({
        showHide: onOrOff,
        noteDisplay: 'SHOW NOTE'
      })
    }
  }
  render() {
    var index = this.state.noteIndex

    return (
      <div>
        <Container>
          <DropDown>
            <H>LESSONS</H>
            <Select onChange={(e) => this.handleLesson(e)}>
              <Option value='1'>LINES</Option>
              <Option value='2'>SPACES</Option>
              <Option value='3'>LEDGER LINES</Option>
            </Select>
          </DropDown>
          <DropDown>
            <H>CLEFS</H>
            <Select onChange={(e) => this.handleClef(e)}>
              <Option value='21'>TREBLE</Option>
              <Option value='22'>ALTO</Option>
              <Option value='23'>TENOR</Option>
              <Option value='24'>BASS</Option>
            </Select>
          </DropDown>
          { (index !== 0) ? (
            <Button id="back" onClick={() => this.decrement()}>&#8592; BACK</Button>
          ) : <NoButton />}
          { (index !== 20) ? (
            <Button id="next" onClick={() => this.increment()}>NEXT &#8594;</Button>
          ) : <NoButton />}
          <Button onClick={() => this.pickRandom()}>RANDOM</Button>
          <Button onClick={() => this.showHide()}>{this.state.noteDisplay}</Button>
        </Container>
        <Lessons>
          <Staff clef={this.state.clef} note={this.state.note} noteIndex={this.state.noteIndex} start={this.state.start} end={this.state.end} showHide={this.state.showHide}/>
        </Lessons>
      </div>
    )
  }
}

export default Lesson
