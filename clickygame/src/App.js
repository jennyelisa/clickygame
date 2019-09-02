import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header"
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json"



const shuffleImages = chara => {
  for (let i = chara.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    let j = chara[k];

    chara[k] = chara[i]
    chara[i] = j
  }

  return chara;
}


class App extends Component {
  //setting this.state.characters to characters json array
  state = {
    characters,
    clickedImgs: [],
    clickCount: 0,
    wins: 0,
    losses: 0,
    highScore: 0
  };

userClicks = (id) => {
  let clickedImgs = this.state.clickedImgs;
  let { highScore, clickCount } = this.state

  console.log(shuffleImages)

  if (clickedImgs.indexOf(id) > -1) {
    this.setState({ clickedImgs: [], clickCount: 0, losses: this.state.losses + 1})
  } else {
    clickCount++
    clickedImgs.push(id)
    this.setState({ clickedImgs: shuffleImages, clickCount: clickCount})

    if (clickCount > highScore) {
      this.setState({ highScore: clickCount })
    }

    if( clickCount % characters.length === 0) {
      this.setState({clickedImgs: [], wins: this.state.wins + 1})
    }
  }

  this.setState({ characters: shuffleImages(characters)});

  
};

  render() {
    return (

      <div>
        <Header
        clickedImgs={this.state.clickCount}
        highScore={this.state.highScore}
        wins={this.state.wins}
        losses={this.state.losses}
        />
        <Title />
      {this.state.characters.map(characters => (
          <CharacterCard
          key={characters.id}
          name={characters.name}
          img={characters.image}
          userClicks={this.userClicks}
          id={characters.id}
          />
        ))}

      </div>
    )
  }
}

export default App;
