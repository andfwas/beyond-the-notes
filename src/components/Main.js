import React from 'react'
import styled from 'styled-components'
import titleImage from '../images/titleImage.png'
import BeyondTheNotes from './BeyondTheNotes'
import Included from './Included'
import Lesson from './Lesson'

var Mains = styled.div `

`;
var TitleImage = styled.img `
  width: 70%;
  margin: 2vw 0 2vw 15%;
`;

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    // console.log(this.state.main);
    return (
      <Mains>
      <div className=''>
        { this.props.page ? (
            <div>
              <TitleImage src={titleImage}/>
              <BeyondTheNotes/>
              <Included/>
            </div>
          ) : null
        }
        { this.props.status ? (<Lesson />) : null }
      </div>
    </Mains>);
  }
}

export default Main
