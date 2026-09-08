import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

import AntDesign from '@expo/vector-icons/AntDesign';

const headerBook = () => {
    return (
        <View>
          <View style={styles.container}>
            <View>
              <Image style={styles.imgLogo} source={require('../../imgs/Logo.png')} />
            </View>
            <View style={styles.seachAndCart}>
              <Text><Feather name="search" size={24} color="white" /></Text>
              <Text><AntDesign name="shopping-cart" size={24} color="white" /></Text>
            </View>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: 'indigo',
      height: 56,
    },
  
    seachAndCart: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      // paddingHorizontal: 16
    },
  
    textColor: {
      color: "white",
      fontSize: 16,
    },
  
    imgLogo: {
      width: 80,
      height: 40,
      // resizeMode: "contain"
  
    }
  })

export default headerBook