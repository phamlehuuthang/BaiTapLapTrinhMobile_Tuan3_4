import { View, Text, Image } from 'react-native'
import React from 'react'

const books = [
    { id: 1, name: 'Tên-Giá', price: '99.000' },
    { id: 2, name: 'Tên-Giá', price: '99.000' },
    { id: 3, name: 'Tên-Giá', price: '99.000' },
    { id: 4, name: 'Tên-Giá', price: '99.000' },
];

const BookGrid = () => {
  return (
    <View>
        <Text>Book Grid</Text>

        <View>
            {books.map((book) => (
                <View key={book.id}>
                    <View>
                        <Image source={require("../../imgs/mau-bia-sach-dep.png")} />
                    </View>

                    <View>
                        <Text>{book.name} - {book.price}</Text>
                    </View>
                </View>
            ))}
        </View>
    </View>
  )
}

export default BookGrid