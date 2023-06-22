import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#248EFF" />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('topbar');
        }}>
        <Text style={styles.btntext}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#1480F3',
    width: 125,
    height: 55,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
