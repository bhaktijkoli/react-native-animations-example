import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text, Animated } from 'react-native';

class Example1 extends Component {
  state = {
    opacity: new Animated.Value(0),
    translateY: new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing( this.state.opacity, {
      toValue: 1,
      duration: 300
    }).start();
  }
  startAnimation = () => {
    Animated.timing(this.state.translateY, {
      toValue: -300,
      duration: 500
    }).start();
    Animated.timing( this.state.opacity, {
      toValue: 0,
      duration: 500
    }).start();
  }
  render() {
    let buttonStyle = {
      opacity: this.state.opacity,
      transform: [
        {
          translateY: this.state.translateY,
        },
      ]
    }
    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.button, buttonStyle]}>
            <Text style={styles.buttonText}>Button</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default Example1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 19,
    color: '#FFF'
  }
});
