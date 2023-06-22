import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BluetoothSearch = () => {
  return (
    <View>
        <View style={styles.upperview}>
            <Text style={styles.uppertext}>Bluetooth Name Address</Text>
        </View>
      
    </View>
  )
}

export default BluetoothSearch

const styles = StyleSheet.create({
    upperview:{
        height:35,
        backgroundColor:'#248EFF'
    },
    uppertext:{
        fontSize:16,
        color:'#FFFFFF',
        paddingVertical:3,
        paddingHorizontal:12,
    },
})