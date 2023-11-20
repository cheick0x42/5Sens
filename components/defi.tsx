import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Defi = ()=>{
    return(
        <View style={Style.container}>
            <Text> Page defi</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        color : "red",
        backgroundColor: "yellow"
    }
})

export default Defi