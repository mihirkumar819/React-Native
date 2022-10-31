import React,{useState} from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Flex = () => {
  let [color, setColor] = useState("")
  return (
    <View style={[styles.container, {
      flexDirection: "row",
      backgroundColor: color
    }]}>
      <Pressable onPress={()=>setColor("#85C5BB")} >
        <View style={{ width:82, height:105, backgroundColor: "#85C5BB" }}/>
      </Pressable>
      <Pressable onPress={()=>setColor("#82B4B3")} >
      <View style={{ width:82, height:105, backgroundColor: "#82B4B3" }} />
      </Pressable>
        <Pressable onPress={()=>setColor("#80ABAF")} >
      <View style={{ width:82, height:105, backgroundColor: "#80ABAF" }} />
      </Pressable>
       <Pressable onPress={()=>setColor("#7EA2AA")} >
      <View style={{ width:82, height:105, backgroundColor: "#7EA2AA" }} />
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default Flex;