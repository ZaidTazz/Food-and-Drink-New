import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Welcome() {
  return (

        <View style={{ flex: 1, backgroundColor: '#2E2828'}}>
            <Image 
            source={require('../assets/images/logo.jpg')}
            style={{width:250, height:250, resizeMode : 'contain', alignSelf: 'center', marginTop: 50, borderRadius: 10}}
          />
            <View style={{
              marginTop: 50, backgroundColor: "#503A3A",
            }}>
              <Text style={{color: '#FEF4F4', fontSize: 25, alignSelf: 'center', paddingVertical: 15}}>Welcome to Food & Drink App</Text>
            </View>
        </View>

  );
}
