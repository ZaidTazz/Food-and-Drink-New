import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({cityHandler}) {
    return (
        <View style={{
            marginTop: 18,
            flexDirection: 'row',
            
        }}>
            <GooglePlacesAutocomplete 
            query={{key: 'AIzaSyBUr_mZYrqn1SwPG8VO0Ubv-eRj5ZHItzA'}} 
            onPress={(data, details = null) => {
                console.log(data.description)
                const city = data.description.split(",")[0];
                cityHandler(city);
            }}
            placeholder='Search' 
            styles={{
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: "700",
                    marginTop: 7,
                },
                textInputContainer: {
                    backgroundColor: "#eee",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                }
            }}
            // JSF Element
            renderLeftButton={() => (
                <View style={{
                    marginLeft: 10.0,
                }}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}

            // JSF Element
            renderRightButton={() => (
                <View style={{
                    marginRight: 15,
                }}>
                    <Ionicons name="search" size={24} />
                </View>

            )}

            />
        </View>
    )
}
