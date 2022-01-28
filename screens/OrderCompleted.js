import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native";
import MenuItem from '../components/restaurantDetail/MenuItem';
import firebase from "../firebase";

export default function OrderCompleted() {

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const {items, restaurantName} = useSelector(
    (state) => state.cartReducer.selectedItems
);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);
  

  return (
    <View style={{ alignSelf: "center", marginTop: 30.0, backgroundColor: '#FEF4F4', flex: 1}}>
      {/* green checkmark */}


      <View style={{margin: 20, alignItems: 'center', height: '100%'}}>
      <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30}}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        
      <Text style={{
        fontSize: 22, fontWeight: 'bold'
      }}>Your Order at {restaurantName} has been placed for ${totalUSD}</Text>

      <ScrollView>
        <Text style={{
          marginTop: 40, marginLeft: 10, fontSize: 15, fontWeight: 'bold', 
        }}>Your Last Placed Orders at {restaurantName}:</Text>
        <MenuItem
              foods={lastOrder.items}
              hideCheckbox={true}
              marginLeft={10}
            />

      </ScrollView>

      
    </View>
    </View>
  );
}
