import React from 'react';

import PropTypes from 'prop-types';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// TouchableOpacity
// TouchableHighlight

class RandomNumber extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired, // func is property for PropTypes
  };
  handlePress = () => {
    //console.log(this.props.number);
    // if num is pressed, do nothing. otherwise, call the onPress behavior
    if (this.props.isDisabled)  {return; }
    this.props.onPress(this.props.id);
  };
  render() {
    return(
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 25,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber
