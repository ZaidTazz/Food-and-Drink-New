import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function BottomTabs() {
  return (
    
    <View style={{
      backgroundColor: "#FeF4F4",
    }}>
      <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
        {/* Icons */}
        <Icon icon='home' text='Home' />
        <Icon icon='search' text='Browse' />
        <Icon icon='shopping-bag' text='Grocery' />
        <Icon icon='dollar' text='Orders' />
        <Icon icon='user' text='Account' />

      </View>
    </View>
    
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome name={props.icon} size={25} style={{
        marginBottom: 3,
        alignSelf: 'center',
      }} />
      <Text style={{
        fontWeight: '700'
      }}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

