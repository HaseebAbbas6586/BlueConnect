import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Orientation = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../images/orientation.png')}
      />
    </View>
  );
};

export default Orientation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
