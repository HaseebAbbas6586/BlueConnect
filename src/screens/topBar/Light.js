import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Light = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: 200, width: 200}}
        source={require('../../images/light.png')}
      />
    </View>
  );
};

export default Light;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
