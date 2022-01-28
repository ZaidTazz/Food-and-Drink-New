import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MenuItem from '../components/restaurantDetail/MenuItem';
import firebase from "../firebase";
import { Divider } from 'react-native-elements/dist/divider/Divider'

export default function Orders() {

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
        <Text style={{
        fontSize: 22, fontWeight: 'bold'}}>Completed Orders</Text>
            <Divider width={1} />
        <ScrollView>
            <TouchableOpacity>
                <MenuItem
                    foods={lastOrder.items}
                    hideCheckbox={true}
                    marginLeft={10}
                    />
            </TouchableOpacity>
        </ScrollView>
    </View>



  );
}
