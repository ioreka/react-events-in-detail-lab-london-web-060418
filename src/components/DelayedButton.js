// Code DelayedButton Component Here
import React from 'react'


export default class DelayedButton extends React.Component {
constructor() {
  super()
}

render() {
  return (
    <button onClick={ this.clickHandler }></button>
  )
}

clickHandler = (e) => {
  e.persist()
  setTimeout(
    () => {this.props.onDelayedClick(e)},
    this.props.delay
  )}

}
