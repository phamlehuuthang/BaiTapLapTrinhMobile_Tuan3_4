import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const books = [
    { id: 1, name: 'Tên-Giá', price: '99.000' },
    { id: 2, name: 'Tên-Giá', price: '99.000' },
    { id: 3, name: 'Tên-Giá', price: '99.000' },
    { id: 4, name: 'Tên-Giá', price: '99.000' },
];

const BookGrid = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Book Grid</Text>

        <View style={styles.grid}>
            {books.map((book) => (
                <View key={book.id} style={styles.card}>
                    <View style={styles.imageBox}>
                        <Image source={require("../../imgs/mau-bia-sach-dep.png")} style={styles.image} />
                    </View>

                    <View style={styles.priceBox}>
                        <Text style={styles.priceText}>{book.name} - {book.price}</Text>
                    </View>
                </View>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 18,
        alignItems: 'center',
    },

    title:{
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 14,
        color: "#000"
    },

    grid: {
        width: '100%',
        maxWidth: 520,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 14,
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#2A7BF6',
        borderStyle: 'dashed',
        borderRadius: 12,
    },

    card: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#2A7BF6',
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  imageBox: {
    width: '100%',
    height: 170,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  priceBox: {
    height: 36,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#60c77c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceText: {
    color: '#2f7d32',
    fontSize: 14,
    fontWeight: '500',
  },
})

export default BookGrid