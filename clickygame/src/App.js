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
    characters
  };

  //need a function to shuffle images once one is clicked on

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
        ))}
      </Wrapper>
    )
  }



}

export default App;
