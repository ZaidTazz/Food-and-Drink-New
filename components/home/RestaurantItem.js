import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: 'Beachside Bar',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg',
        categories: ["Cafe", "Bar"],
        price: '$$',
        reviews: 1244,
        rating: 4.5
    },

    {
        name: 'Highport Resort',
        image_url: 'https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg',
        categories: ["Cafe", "Bar"],
        price: '$$',
        reviews: 1244,
        rating: 3.7
    }

]

export default function RestaurantItem({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{
                    marginBottom: 4.0,
                    marginTop: 10,
                }} onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      name: restaurant.name,
                      image: restaurant.image_url,
                      price: restaurant.price,
                      reviews: restaurant.review_count,
                      rating: restaurant.rating,
                      categories: restaurant.categories,
                    })
                  }>
                <View 
                style={{
                marginTop: 10,
                padding: 15,
                backgroundColor: '#FEF4F4'
        }}>
                <RestaurantImage 
                    image={restaurant.image_url}
                />
                <RestaurantInfo 
                    name={restaurant.name}
                    rating={restaurant.rating}
                    reviews={restaurant.reviews}
                />
            </View>
            </TouchableOpacity>
            ))}
               </> 
    );

}

const RestaurantImage = (props) => (
    <><Image
        source={{
            uri: props.image,
        }}
        style={{
            width: "100%",
            height: 180,
            borderRadius: 10.0
        }} />
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold'
            }}>{props.name}</Text>
            <Text style={{
                fontSize: 13,
                color: '#808080'
            }}>Island-Wide Delivery</Text>
        </View>
        <View style={{
            backgroundColor: "#fff",
            height: 30,
            width: 30,
            alignItems: 'center',
            borderRadius: 20,
            justifyContent: 'center'
            }}>
        <Text>{props.rating}</Text>
        </View>
    </View>
);