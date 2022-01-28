import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItem'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const YELP_API_KEY = "WMl_pwMh6AfJIYH-4HDiCsrgOlhQVo0zAZMOFLKb1hFMD1MLwD9GMaKshJwg1DkfSr7D4k7FoRDD69uqLHeMSDhJ3tV25MpBJwfotIaGXj6ZU6DiNOsLoTHRW1PsYXYx"

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = React.useState(localRestaurants)
    const [city, setCity] = React.useState("Hollywood");
    const [activeTab, setActiveTab] = React.useState("Delivery")


    // API Integration
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) =>
            setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

    // React Hook
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{backgroundColor: "#2E2828", flex: 1}}>
            <View style={{backgroundColor: "#503A3A", padding: 10}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            {/* <BottomTabs /> */}

            
        </SafeAreaView>
    )
}