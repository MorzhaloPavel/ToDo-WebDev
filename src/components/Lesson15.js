import React, { Component } from 'react'

const Title = React.createContext()

const LevelThree = () => (
  <Title.Consumer>
    { ({title, subTitle, click}) => (
      <div>
        <h1 onClick={click} >{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    ) }
  </Title.Consumer>
)

const LevelTwo = () => <LevelThree/>

const LevelOne = () => <LevelTwo />

export default class Lesson15 extends Component {
  render() {
    return (
      <div>
        <Title.Provider value={{ title: "Simple title!", subTitle: 'Sub TITle', click: ()=>{console.log('Hello !')}}} >
          <LevelOne/>
        </Title.Provider>
        
      </div>
    )
  }
}
