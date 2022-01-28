import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export default function MenuItem({ restaurantName, foods, hideCheckbox, marginLeft }) {

    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) =>
    dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue},
    });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );
  
    const isFoodInCart = (food, cartItems) => 
        Boolean(cartItems.find((item) => item.title === food.title));

  return (
      <ScrollView>
        {foods.map((food, index) => (
        <View key={index}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,  
            }}>
            {hideCheckbox? (<></>) : (<BouncyCheckbox iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="#503A3A" 
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
                />)}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider width={0.5} style={{
                marginHorizontal: 20
            }}  />
        </View>
    ))}
    </ScrollView>);

}

const FoodInfo = (props) => (
    <View style={{
        width: 240,
        justifyContent: 'space-evenly'
    }}>
        <Text style={{
        fontSize: 19,
        fontWeight: 'bold'
        }}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>

    </View>
)

const FoodImage = ({marginLeft, ...props}) => (
    <View>
        <Image source={{uri: props.food.image}} style={{height: 100, width: 100, resizeMode: 'cover', borderRadius: 8.0, marginLeft: marginLeft}} />
    </View>
)
