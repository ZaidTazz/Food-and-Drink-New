import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: 'Pick-up'
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods",
    }
];

export default function Categories() {
    return (
        <View style={{
            marginTop: 10.0,
            backgroundColor: '#FEF4F4',
            paddingVertical: 10,
            paddingHorizontal: 20,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{
                        alignItems: "center",
                        marginRight: 30.0, 
                    }}>
                    <Image source={item.image} style={{
                        width: 50,
                        height: 40,
                        resizeMode: "contain"
                    }} />
                    <Text style={{
                        fontSize: 13,
                        fontWeight: 'bold'
                    }}>{item.text}</Text>
                </View>
                ))}
                
            </ScrollView>
        </View>
    )
}
