import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
    
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "#FFA69E" }}/>
      <View style={{ flex: 5, backgroundColor: "#D57582" }} />
      <View style={{ flex: 3, backgroundColor: "#AA4465" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  
});

export default Flex;