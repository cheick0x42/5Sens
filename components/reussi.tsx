import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Reussi = ()=>{
    return(
        <View style={Style.container}>
            <Text> Page reussi</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        color : "red",
        backgroundColor: "yellow"
    }
})

export default Reussi