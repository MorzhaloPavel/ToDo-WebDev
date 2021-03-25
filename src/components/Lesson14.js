import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class MyPortal extends Component {
  el = document.createElement('div')

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default class Lesson14 extends Component {
  state = {
    click: 0
  }

  handleClick =() => {
    this.setState(({click}) => ({
      click: click + 1
    })) 
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Click: {this.state.click}</p>
        <span>Text</span>
        <MyPortal>
          <div>TExt</div>
          <button>Click</button>
        </MyPortal>
      </div>
    )
  }
}
