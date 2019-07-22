import React, { Component } from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native';


class Splash extends Component {
  state = {
    opacity: new Animated.Value(1),
    scale: new Animated.Value(1)
  }
  componentDidMount() {
    setTimeout(function () {
      Animated.timing(this.state.scale, {
        toValue: 7,
        duration: 350
      }).start();
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 500
      }).start();
    }.bind(this), 1000);
  }
  render() {
    const iconStyle = {
      height: 100,
      width: 100,
      opacity: this.state.opacity,
      transform: [
        {
          scale: this.state.scale
        }
      ]
    }
    return(
      <View style={styles.container}>
        <Animated.Image
          style={iconStyle}
          source={require('./../../assets/icon.png')}
          />
      </View>
    )
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
