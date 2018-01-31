import React from 'react'
import styled from 'styled-components'
import Staff from './Staff'

const notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const upDown = [6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 12, 11, 10, 9, 8, 7, 6]

var currentIndex = 0

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
var H3 = styled.h2`
  margin-left: 3vw;
  margin-top: 6vw;
`
class Lesson extends React.Component {
  constructor() {
    super()
    this.state = {
      clef: 21,
      note: 4,
      noteNum: 6,
      showHide: false,
      noteDisplay: 'SHOW NOTE',
      currentLesson: 'updown',
      thisLesson: 'Up & Down',
      lessonList: upDown,
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
  handleClef = (e) => {
    var current = Number(e.target.value)
    this.setState({
      clef: current
    })
  }
  updown = (lesson) => {
    // this.setState({
    //   note: thisLesson[0]
    // })
    var thisLesson = upDown
    this.setState({
      lessonList: thisLesson,
      thisLesson: 'Up & Down',
      noteNum: thisLesson[0]
    })

  }
  lines = (lesson) => {
    var thisLesson = [6, 8, 10, 12, 14, 12, 10, 8, 6]
    this.setState({
      lessonList: thisLesson,
      thisLesson: 'All the Lines',
      noteNum: thisLesson[0]
    })
  }
  spaces = (lesson) => {
    var thisLesson = [7, 9, 11, 13, 11, 9, 7]
    this.setState({
      lessonList: thisLesson,
      thisLesson: 'All the Spaces',
      noteNum: thisLesson[0]
    })
  }
  ledgers = (lesson) => {

    var thisLesson = [0, 1, 2, 3, 4, 16, 17, 18, 19, 20]
    this.setState({
      lessonList: thisLesson,
      thisLesson: 'Ledger Lines',
      noteNum: thisLesson[0]
    })
  }
  random = (lesson) => {
    // this.setState({
    //   note: thisLesson[0]
    // })
    var thisLesson = notes
    for (var i = notes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = thisLesson[i];
      thisLesson[i] = thisLesson[j];
      thisLesson[j] = temp;
    }
    this.setState({
      lessonList: thisLesson,
      thisLesson: 'Random',
      noteNum: thisLesson[0]
    })
  }
  all = () => {
    var thisLesson = notes
    this.setState({
      lessonList: thisLesson,
      thisLesson: 'All Notes',
      noteNum: thisLesson[0]
    })
  }
  makeLesson = (lesson) => {
    currentIndex = 0
    this.setState({
      start: true,
      end: false
    })
    if (lesson == 'updown') {
      this.updown(lesson)
    } else if (lesson == 'lines') {
      this.lines(lesson)
    } else if (lesson == 'spaces') {
      this.spaces(lesson)
    } else if (lesson == 'ledgers') {
      this.ledgers(lesson)
    } else if (lesson == 'random') {
      this.random(lesson)
    } else {
      this.all(lesson)
    }
  }
  handleLesson = (e) => {
    var lesson = e.target.value
    this.setState({
      currentLesson: lesson,
      start: true
    })
    var current = this.state.currentLesson
    this.makeLesson(lesson)
  }
  increment = () => {
    var thisLesson = this.state.lessonList
    var end = thisLesson.length - 2
    if (currentIndex === (end)) {
      this.setState({
        noteNum: thisLesson[end + 1],
        start: false,
        end: true
      })
      currentIndex += 1
    } else {
      currentIndex += 1
      this.setState({
        noteNum: thisLesson[currentIndex],
        start: false,
        end: false
      })
    }
  }
  decrement = () => {
    var thisLesson = this.state.lessonList
    if (currentIndex === 1) {
      this.setState({
        noteNum: thisLesson[0],
        start: true,
        end: false
      })
    } else {
      currentIndex -= 1
      this.setState({
        noteNum: thisLesson[currentIndex],
        start: false,
        end: false
      })
    }
  }
  pickRandom = () => {
    var random = Math.floor(Math.random()*21)
    this.setState({
      noteNum: random
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
    var index = this.state.noteNum
    return (
      <div>
        <Container>
          <DropDown>
            <H>LESSONS</H>
            <Select onChange={(e) => this.handleLesson(e)}>
              <Option value='updown'>UP & DOWN</Option>
              <Option value='lines'>LINES</Option>
              <Option value='spaces'>SPACES</Option>
              <Option value='ledgers'>LEDGER LINES</Option>
              <Option value='random'>RANDOM</Option>
              <Option value='all'>ALL NOTES</Option>
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
          { !this.state.start ? (
            <Button id="back" onClick={() => this.decrement()}>&#8592; BACK</Button>
          ) : <NoButton />}
          { !this.state.end ? (
            <Button id="next" onClick={() => this.increment()}>NEXT &#8594;</Button>
          ) : <NoButton />}
          <Button onClick={() => this.pickRandom()}>RANDOM</Button>
          <Button onClick={() => this.showHide()}>{this.state.noteDisplay}</Button>
        </Container>
        <H3>NAME THAT NOTE -  <em>{this.state.thisLesson}</em></H3>
        <Lessons>
          <Staff clef={this.state.clef} note={this.state.note} noteIndex={this.state.noteNum} start={this.state.start} end={this.state.end} showHide={this.state.showHide}/>
        </Lessons>
      </div>
    )
  }
}

export default Lesson
