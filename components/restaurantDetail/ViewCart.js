import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import OrderItem from './OrderItem';
import firebase from "../../firebase";
// import { NavigationContainer } from '@react-navigation/native';

export default function ViewCart({ navigation }) {

const [modalVisible, setModalVisible] = useState(false);

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

  const addOrderToFireBase = () => {
      const db = firebase.firestore();
      db.collection("orders").add({
          items: items,
          restaurantName: restaurantName,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log('Database Updated');
      setModalVisible(false);
      navigation.navigate("OrderCompleted"); 
  };

  console.log(totalUSD);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "#FEF4F4",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantTitle: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "700",
      fontSize: 18,
      marginBottom: 10,
    },
  });

  const checkoutModalContent = () => {
      return (
          <>
          <View style={styles.modalContainer}>
              <View style={styles.modalCheckoutContainer}>
                  <Text style={styles.restaurantTitle}>{restaurantName}</Text>
                  {items.map((item, index) => (
                      <OrderItem key={index} item={item} />
                  ))}
                  <View style={styles.subtotalContainer}>
                      <Text style={styles.subtotalText}>SubTotal</Text>
                      <Text style={{
                          fontWeight: '700',
                          fontSize: 18
                      }}>${totalUSD}</Text>
                  </View>
                  <View style={{
                      justifyContent: 'center',
                      alignItems: 'center'
                  }}>
                      <TouchableOpacity style={{
                          marginTop: 20,
                          backgroundColor: '#2E2828',
                          padding: 13,
                          borderRadius: 35,
                          width: 300,
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          
                      }}

                      onPress={() => {addOrderToFireBase();
                    }}>
                            <Text style={{
                                fontSize: 24,
                                color: '#fff'
                            }}>CheckOut</Text>
                            <Text style={{
                                position: 'absolute',
                                right: 20,
                                color: '#fff',
                                fontSize: 18,
                                top: 17,
                            }}>${total ? totalUSD : ""}</Text>
                        
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
          </>
          
      )
  };


  return (
    <>
    <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
    </Modal>
    {total ? (
    <View style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 21,
        zIndex: 999,
        justifyContent: 'center',
    }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
        }}>
            <TouchableOpacity style={{
                backgroundColor: '#000',
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "space-around",
                padding: 13,
                width: 300,
                position: 'relative',
                borderRadius: 35,
                backgroundColor: '#2E2828'
            }} onPress={() => setModalVisible(true)}>
        <Text style={{
            color: '#FEF4F4',
            fontSize: 20
        }}>VIEW CART</Text>
        <Text style={{
            color: '#FEF4F4',
            fontSize: 20
        }}>${totalUSD}</Text>
        </TouchableOpacity>
        </View>
    </View>
    ):
    (<></>)}
    </>
  );
}
