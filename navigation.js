import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import Orders from "./screens/Orders";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store"
import OrderCompleted from "./screens/OrderCompleted";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Welcome from "./screens/Welcome";

const store = configureStore();
const Tab = createMaterialBottomTabNavigator();


export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
      <ReduxProvider store={store}>
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Welcome" screenOptions={screenOptions} barStyle={{ backgroundColor: '#FeF4F4' }} activeColor="#000" >
            <Tab.Screen name="Home" component={Welcome} 
            options={{
              tabBarIcon: ({color}) => (
                <Ionicons name="ios-home" color={color} size={24}/>
              ),
            }}/>
            <Tab.Screen name="Search" component={Home} 
            options={{
              tabBarIcon: ({color}) => (
                <Ionicons name="ios-search" color={color} size={24}/>
              ),
            }}/>
            <Tab.Screen name="RestaurantDetail" component={RestaurantDetail}
            options={{
              tabBarIcon: ({color}) => (
                <Fontisto name="shopping-bag" color={color} size={24}/>
              ),
            }} />
            <Tab.Screen name="OrderCompleted" component={OrderCompleted}
            options={{
              tabBarIcon: ({color}) => (
                <Ionicons name="cash-outline" color={color} size={24}/>
              ),
            }} />
            {/* <Tab.Screen name="Account" component={Orders}
            options={{
              tabBarIcon: ({color}) => (
                <Ionicons name="people-circle-outline" color={color} size={24}/>
              ),
            }} /> */}
            </Tab.Navigator>
        </NavigationContainer>
      </ReduxProvider>
  );
}


{/* <Tab.Screen name="Home" component={Home} />
<Tab.Screen name="RestaurantDetail" component={RestaurantDetail} />
<Tab.Screen name="OrderCompleted" component={OrderCompleted} /> */}