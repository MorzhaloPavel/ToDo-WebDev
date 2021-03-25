import React, { Component } from 'react'

const POSITION = [
  {
    id: 'fd',
    value: 'Front-end developer'
  },
  {
    id: 'bd',
    value: 'Back-end developer'
  }
]

export default class Lesson extends Component {
  state = {
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: ''
    }
  }

  inputRef = React.createRef()
  textareaRef = React.createRef()
  selectRef = React.createRef()

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value
    })
  }

  handleShow = (e) => {
    e.preventDefault()
    const {inputText, textareaText, selectText} = this.state
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText
      }
    })
  }


  render() {
    const { inputText, textareaText, showData, selectText } = this.state
    const { name, text, position } = showData

    return (
      <form>
        <label>
          Name:
          <input ref={this.inputRef} type='text' name='name' value={inputText} onChange={this.handleChange} />
        </label> <br />

        <label htmlFor='text'>Text:</label>
        <textarea ref={this.textareaRef} id='text' value={textareaText} onChange={this.handleChange} /> <br/>

        <select ref={this.selectRef} value={selectText} onChange={this.handleChange} >
          {POSITION.map(({id, value}) => (
            <option kay={id} value={value}>{value}</option>
          ))}
        </select>

        <button onClick={this.handleShow}>Show</button>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </form>
    )
  }
}


