import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';

const windowHeight = Dimensions.get('window').height;
const Splash = ({navigation}) => {
  useEffect(() => {
    const movetohome = () => {
      navigation.replace('Home');
    };
    setTimeout(() => {
      movetohome();
    }, 3000);
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#248EFF" />
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image
            style={styles.logoupper}
            source={require('../images/upper.png')}
          />
          <Image
            style={styles.logolower}
            source={require('../images/lower.png')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.text, {color: '#1480F3', fontWeight: 'bold'}]}>
            Blue
          </Text>
          <Text style={styles.text}>Connect</Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    height: windowHeight,
  },
  text: {
    fontSize: 16,
    margin: 3,
    marginTop: 5,
  },
  logocontainer: {
    height: 150,
    width: 150,
    backgroundColor: '#1480F3',
    borderRadius: 25,
    flexDirection: 'row',
  },
  statusbar: {
    backgroundColor: '#1480F3',
  },
  logoupper: {
    marginTop: 20,
    marginLeft: 26,
  },
  logolower: {
    marginTop: 40,
    marginLeft: -50,
  },
});
