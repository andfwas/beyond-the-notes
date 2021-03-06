import React from 'react'
import styled from 'styled-components'
import * as data from './Note'


var images = data.default

var ImageContainer = styled.div`
  width: 80%;
  position: relative;
  margin-left: -4.5vw;
`
var Note = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
`
var Clef = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
`
var NoteName = styled.div`
  margin-top: 7vw;
  float: right;
  font-size: 10vw;
  color: black;
`
var NotNoteName = styled.div`
margin-top: 7vw;
float: right;
font-size: 10vw;
color: black;
display: none;
`
var trebleList = ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E']
var altoList = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F']
var tenorList = ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D']
var bassList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']

class Staff extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    var clef = this.props.clef
    var note = this.props.noteIndex
    var show = this.props.showHide

    function findNote(clef, index) {
      if (clef === 21) {
        return trebleList[index]
      } else if (clef === 22) {
        return altoList[index]
      } else if (clef === 23) {
        return tenorList[index]
      } else {
        return bassList[index]
      }
    }

    var noteName = findNote(clef, note)
    return (
      <div>
        <ImageContainer>
            <Clef src={images[clef]} />
            <Note src={images[note]} />
        </ImageContainer>
        { show ? (
          <NoteName>{noteName}</NoteName>
        ) : <NotNoteName>{noteName}</NotNoteName> }
      </div>
    );
  }
}

export default Staff
