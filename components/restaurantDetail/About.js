import { View, Text, Image } from 'react-native';
import React from 'react';

// const image = "https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg"

// const name = "Farmhouse Kitchen Thai Cuisine"

// const description = 'Thai * Comfort Food * $$ * Tickket * 4 * (2913+)'


// const yelpRestaurantInfo = {
//     name: 'Farmhouse Kitchen Thai Cuisine',
//     image: "https://zellersrestaurants.com/wp-content/uploads/2019/11/Restaurant.jpg",
//     price: '$$',
//     reviews: "2000",
//     rating: 4.3,
//     categories: [{itle: "Thai"}, {title: "Comfort Food"}],
// };



export default function About(props) {

    const {name, image, price, reviews, rating, categories} = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const ratings = `⭐ ${rating}`;
    
    const description = `${formattedCategories} ${
        price ? " • " + price : ""
      } • 🎫 • (${reviews}+)`;

  return (
    <View style={{
        backgroundColor: "#503A3A",
        paddingBottom: 15.0
    }}>
      <RestauruantImage image={image} />
      <RestaurantName name={name} />
      <Rating rating={ratings} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestauruantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
    )

const RestaurantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 15,
        color: '#fff'
    }}>{props.name}</Text>
)

const Rating = (props) => (
    <Text style={{
        fontSize: 20,
        marginTop: 8,
        marginHorizontal: 15,
        fontWeight: '700',
        color: '#fff'
    }}>{props.rating}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        fontSize: 15,
        marginTop: 8,
        marginHorizontal: 15,
        fontWeight: '700',
        color: '#fff'
    }}>{props.description}</Text>
)
