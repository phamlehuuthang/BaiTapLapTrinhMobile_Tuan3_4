import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

import AntDesign from '@expo/vector-icons/AntDesign';



const index = () => {
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

      <View style = {styles.bodyBookStore}>
        <View>
          <Image style={styles.biaSach} source={require("../../imgs/mau-bia-sach-dep.png")}/>
        </View>
        <View style = {styles.thongTinSach}>
          <Text numberOfLines={2}>Tên sách mẫu có tiêu đề dài để kiểm tra hiển thị</Text>
          <Text>Tac gia</Text>
          <Text>Gia</Text>
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

  },

  bodyBookStore: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  biaSach: {
    height: 100,
    width: 80,
    borderRadius: 10,
  },

  thongTinSach: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "column",
    marginLeft: 40,
    height: 110,
  }
})

export default index