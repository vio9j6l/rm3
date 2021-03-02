import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Game from './Game';

class App extends React.Component {
  state = {
    gameId: 1,
  };
  // resetGame function
  resetGame = () => {
    this.setState((prevState) => {
      return {gameId: prevState.gameId + 1};
    });
  };
  render() {
    return (
        <Game 
          key={this.state.gameId}     // incredment the key from app component
          onPlayAgain={this.resetGame} // behavior to envoke to reset the game - onPlayAgain
          randomNumberCount={6}  
          initialSeconds={10}
        />
    );
  }
};


export default App;
