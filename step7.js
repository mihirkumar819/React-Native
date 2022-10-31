import { useState } from "react";
import {View, Text,StyleSheet, Platform} from "react-native";

export default function App(){
   console.log(JSON.stringify(Platform))
   
  //  console.log(Dimensions.get)
    return <View style={mystyle.viewstyle}>
      
        <Text>{"Platform"}</Text>
        <Text> {Platform.OS}</Text>
    
    
    </View>
}
let mystyle=StyleSheet.create({
    viewstyle:{
        paddingTop:Platform.OS==="android" ? 30:0
    }
})