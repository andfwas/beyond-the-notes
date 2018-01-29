import React from 'react'
import styled from 'styled-components'
import * as data from './Note'

var images = data.default

var ImageContainer = styled.div`
  width: 100%;
  position: relative;
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
    var currentClef = this.props.props.props.state.clef

    return (
      <ImageContainer>
        <Clef src={images[currentClef]} />
        <Note src={images[17]} />
      </ImageContainer>
    );
  }
}

export default Staff
