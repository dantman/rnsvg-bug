import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Svg, Path} from 'react-native-svg'; // 6.0.0

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg width={24} height={36}>
          <Path
            d='M 12,0 C 5.3657143,0 0,5.634 0,12.6 0,22.05 12,36 12,36 12,36 24,22.05 24,12.6 24,5.634 18.634286,0 12,0 Z'
            fill='#2196F3' />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
