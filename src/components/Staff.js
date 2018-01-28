import React from 'react'
import styled from 'styled-components'
import * as data from './Note'

var images = data.default

console.log(images);

var ImageContainer = styled.div`
  width: 100%;
  position: relative;
`

var Image1 = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
`
var Image2 = styled.img`
  width: 100%;
  position: absolute;
  z-index: 1;
`


class Staff extends React.Component {
  constructor() {
    super()
    this.state = {
      treble: ['F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'],
      alto: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F'],
      tenor: ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'],
      bass: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
    }
  }

  render() {
    return (
      <ImageContainer>
        <Image1 src={images[12]} />
        <Image2 src={images[21]} />
      </ImageContainer>
    );
  }
}

export default Staff
