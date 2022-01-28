import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
      title: 'Bacon, Egg & Cheese Biscuit',
      description: "Features a warm, buttermilk biscuit brushed with real butter.",
      price: "$6.5",
      image: 
      "https://cookingmadehealthy.com/wp-content/uploads/2020/06/Healthy-Bacon-and-Egg-Cheese-Biscuit-Sandwiches-4x3-1.jpg"
  },
  {
      title: 'Tandoori Chicken',
      description: "Tandoori chicken is a popular Indian appetizer made with chicken, spices, yogurt and herbs.",
      price: "$11.9",
      image: 
      "http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-LK/Quick-Tandoori-chicken_43_1.1.61_326X580.Jpeg"
    },
    {
      title: 'Fresh Orange Juice',
      description: "Fresh orange juice combined with ginger makes for a sweet and spicy, delicious flavor-filled, ...",
      price: "$5.0",
      image: 
      "https://media.glamour.com/photos/612d343de274243a3defbc8f/master/pass/1225546255"
    },
    {
      title: 'Cheese Pizza',
      description: "Features a chewy crust, sweet and tangy sauce, and plenty of ...",
      price: "$13.7",
      image: 
      "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
    },
    {
      title: 'Classic Roast Turkey',
      description: "Spatchcocking turkey gives you stunningly crisp skin and perfectly cooked white and dark meat.",
      price: "$20.6",
      image: 
      "https://foodchannel.com/wp-content/uploads/sites/78/2018/11/bresse-style-poached-roasted-turkey-recipe.jpg?w=1000&h=600&crop=1"
    },
    {
      title: 'Strawberry Milkshake',
      description: "This fresh, homemade strawberry milkshake is made with strawberry ice cream and a few other simple ...",
      price: "$5.4",
      image: 
      "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/167-double-strawberry-milkshake.jpg"
    },
    {
      title: 'Steak Frites',
      description: "Charolais is a breed of cattle from Burgundy prized for its tender, flavorful and marbled.",
      price: "$16.5",
      image: 
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2015%2F01%2Fsteak-frites-with-black-garlic-butter-FT-RECIPE1019.jpg"
    },
    {
      title: 'Chocolate Milkshake',
      description: "This indulgent masterpiece is one seriously special treat. Perfect your presentation and serve up ...",
      price: "$7.5",
      image: 
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/milkshake-b0d6105.jpg"
    },
    {
      title: 'Beef Tacos',
      description: "This Baked Taco Recipe can be made with ground beef or shredded chicken! They're topped with cheese ...",
      price: "$4.9",
      image: 
      "https://c.recipeland.com/images/r/20632/32846ec5515d5ea12f0c_1024.jpg"
    },


];


export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{
      backgroundColor: "#FEF4F4"
  }}>
      <View>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical: 10}} />
        <MenuItem restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
      </View>
    </View>

  );
}
