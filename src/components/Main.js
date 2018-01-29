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
  render() {
    // console.log(this.props);
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
        { this.props.status ? (<Lesson props={this.props} treble={this.props.treble} alto={this.props.alto} tenor={this.props.tenor} bass={this.props.bass}/>) : null }
      </div>
    </Mains>);
  }
}

export default Main
