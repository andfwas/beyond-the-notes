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
var Clef= styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
`
// var trebleList = ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E']
// var altoList = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F']
// var tenorList = ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D']
// var bassList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']


class Staff extends React.Component {
  render() {
    var clef = this.props.clef
    var note = this.props.noteIndex
    var index = this.props.noteIndex
    console.log(index);

    return (
      <ImageContainer>
        <Clef src={images[clef]} />
        <Note src={images[index]} />
      </ImageContainer>
    );
  }
}

export default Staff
