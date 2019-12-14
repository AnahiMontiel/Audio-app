import React, { Component } from 'react';
import './App.css';
import correctAnswer from "./Sounds-game/correctAnswer.mp3";
import errorSound from "./Sounds-game/errorSound.mp3";
import spinningCoint from "./Sounds-game/spinningCoint.mp3";
import spinningRock from "./Sounds-game/spinningRock.mp3";
import {Howl,Howler} from "howler";

const audioClips = [
  {Sound: correctAnswer, label:"correct Answer"},
  {Sound: errorSound, label:"error Sound"},
  {Sound: spinningCoint, label:"spinning Coint"},
  {Sound: spinningRock, label: "spinning Rock"}
]

class App extends Component{
  soundPlay=(src)=>{
    const sound = new Howl({
      src
    })
    sound.play();
  }
  //funtion that render the sound and the button
  renderButtonAndSound= () =>{
    return audioClips.map((soundObj, index)=>{
      return(
        <button key={index} onClick={()=> this.soundPlay(soundObj.Sound)}>
          {soundObj.label}
        </button>
      )
    });
  }

  render(){
    Howler.volume(1.0)

  return <div className="App">
  {this.renderButtonAndSound()}
  </div>;
  }
}

export default App;
