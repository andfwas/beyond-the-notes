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
class Lesson extends React.Component {
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
            <Button id="back">&#8592; BACK</Button>
            <Button id="next">NEXT &#8594;</Button>
          </Container>
        </ButtonDiv>
        <Lessons>
          <Staff />
        </Lessons>
      </div>
    )
  }
}

export default Lesson
