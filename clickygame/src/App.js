import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json"


class App extends Component {
  //setting this.state.characters to characters json array
  state = {
    characters,
    clickedImgs: [],
    score: 0,
    highScore: 0
  };

shuffleImages = id => {
  let clickedImgs = this.state.clickedImgs;

  if (clickedImgs.includes(id)) {
    this.setState({
      clickedImgs: [],
      score: 0,
      status: "Gmae Over! Click again!"
    });
    return;
  } else {
    clickedImgs.push(id)
    if (clickedImgs.length === 12) {
      this.ListeningStateChangedEvent({
        score: 12,
        status: "You matched all the characters!",
        clickedImgs: []
      });
      console.log("WON");
      return;
    }

    this.setState({
      characters,
      clickedImgs,
      score: clickedImgs.length,
      status: " "
    });

    for (let i = characters.length - 1; i > 0; i--) {
      let k = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  }
};






//need a function to shuffle images once one is clicked on

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
          shuffleImages={this.shuffleImages}
          id={characters.id}
          key={characters.id}
          image={characters.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
