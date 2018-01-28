import React from 'react'
import styled from 'styled-components'
import titleImage from '../images/titleImage.png'
import BeyondTheNotes from './BeyondTheNotes'
import Included from './Included'
import Staff from './Staff'

var Mains = styled.div `
  padding: 21px;
`;
var TitleImage = styled.img `
  width: 70%;
  margin-left: 15%;
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
        { this.props.status ? (<Staff />) : null }
      </div>
    </Mains>);
  }
}

export default Main
