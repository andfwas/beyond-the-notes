import React from 'react'
import styled from 'styled-components'

var Star = styled.div`
  display: flex;
  flex-flow: row;
  align-items: baseline;
`

class Ideal extends React.Component {
  constructor() {
    super()
    this.state =  {

    }
  }
  render() {
    return (
      <div>
        <h3>Ideal for...</h3>
        <Star>
          <span className="glyphicon glyphicon-star" aria-hidden="true">
              </span> &nbsp;&nbsp;
          <h4>Jr. High & High School Music Classroom</h4>
        </Star>
        <Star>
          <span className="glyphicon glyphicon-star" aria-hidden="true">
              </span> &nbsp;&nbsp;
          <h4>Music Tech / Computer Lab</h4>
        </Star>
        <Star>
          <span className="glyphicon glyphicon-star" aria-hidden="true">
              </span> &nbsp;&nbsp;
          <h4>Private Lesson Students</h4>
        </Star>
        <Star>
          <span className="glyphicon glyphicon-star" aria-hidden="true">
              </span> &nbsp;&nbsp;
          <h4>At School & At Home</h4>
        </Star>
      </div>
    )
  }
}

export default Ideal
