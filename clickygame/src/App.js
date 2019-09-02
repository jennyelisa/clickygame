import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header"
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json"



const shuffleImages = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    let j = array[k];

    array[k] = array[i]
    array[i] = j
  }

  return array;
}


class App extends Component {
  //setting this.state.characters to characters json array
  state = {
    characters,
    clickedImgs: [],
    wins: 0,
    losses: 0,
    highScore: 0,
    score: 0
  };

userClicks = (id) => {
  let clickedImgs = this.state.clickedImgs;
  let score = this.state.score;
  let highScore = this.state.highScore;
  // console.log(shuffleImages)
  

  if (clickedImgs.indexOf(id) === -1) {
    clickedImgs.push(id);
    this.incrementScore();
    this.charaShuffle();
  } 
  else if (this.state.score === 12 ){
    alert("You Win 🥳 🏆");
    this.setState({ 
      score: 0,
      wins: 1,
      clickedImgs: []
    });

    //getting all 12 images correct works, but it adds the highscore up not score
    //score now increaments as you click a correct image, need to work on highscore and wins/losses
    //at the moment score and highscore both ++ when clicked. 
  } else {
    this.setState({
      score: 0,
      clickedImgs: []
    });
    alert("I won't sugarcoat it...you never stood a chance! - Baroness Von Bon Bon, Try Again!")
  } 
  if ( score > highScore) {
  this.setState({ highScore: score })
} 
};

incrementScore = () => {
  this.setState({ score: this.state.score + 1 });
};

charaShuffle = () => {
  this.setState({ characters: shuffleImages(characters)})
};

  render() {
    return (

      <div>
        <Header
        score={this.state.score}
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
