import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";



const HomePage = ()=>{
  function onPressLearnMore(){
    alert("BOnjour les zozos")
  }
  return(
    <View style={style.container}>
      <View>
        <Text>5Sens pas de sens</Text>
      </View>
      <View>
      <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default HomePage