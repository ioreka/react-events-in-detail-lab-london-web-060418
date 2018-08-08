// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
//initial state
constructor() {
  super()
}

render() {
  return (
    <button onClick={ this.clickHandler }> Coordinates Button</button>
  )
}

clickHandler = (e) => {
  let x = e.clientX
  let y = e.clientY
  let coordinateArray = []
  coordinateArray.push(x, y)
  // console.log(coordinateArray);
  this.props.onReceiveCoordinates(coordinateArray)
}




}
