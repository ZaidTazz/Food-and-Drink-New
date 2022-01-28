import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs(props) {

    // const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 40.0}}>
            <HeaderButton text="Delivery" btnColor="#2E2828" textColor="#FEF4F4" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
            <HeaderButton text="Pickup" btnColor="#FEF4F4" textColor="#2E2828" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
        </View>
    )
}

const HeaderButton = (props) => (
        <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.text ? "#2E2828" : "rgba(46, 40, 40, 0.5)",
            paddingVertical: 6,
            paddingHorizontal: 16,      
            borderRadius: 25.0,
        }}
        onPress={() => props.setActiveTab(props.text)}>
            <Text
            style={{
                color: props.activeTab === props.text ? "#FEF4F4" : "rgba(254, 244, 244, 0.5)",
                fontSize: 16.0,
                fontWeight: "700",
            }}>{props.text}</Text>
        </TouchableOpacity>
);      