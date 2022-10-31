import React, { useState } from "react";
import { StyleSheet, Button, View, Text,Image } from "react-native";
import ironman from "./iron1_tn.jpg";
import batman from "./batman.jpg";
import superman from "./superman.jpg";
import spiderman from "./spiderman.jpg";


export default function App(){
  let [picture, setPicture] = useState({title:'',img:''})
  let changeHeroImg= (hero)=>{
    if (hero==="ironman"){
      setPicture({title:"Ironman", img :ironman})
    }
    else if (hero==="batman"){
      setPicture({title:"Batman", img : batman})
    }
    else if (hero==="superman"){
      setPicture({title:"Superman", img :  superman})
    }
     else {
      setPicture({title:"spiderman", img : spiderman})
    }
   

  }
  return (
    <View style={[styles.container, {
      flexDirection: "column",
      
    }]}>
      <View>
        <Text>{picture.title}</Text>
        <Image source={picture.img} />
      </View>
      
      <Button title="Ironman" onPress={changeHeroImg("ironman")} style={styles.box1} />
      <Button title="Batman" onPress={changeHeroImg("batman")} style={styles.box2} />
      <Button title="Superman" onPress={changeHeroImg("supereman")} style={styles.box3} />
      <Button title="Spiderman" onPress={changeHeroImg("spiderman")} style={styles.box4} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 20
    
  },
  box1 : {
    flex :1,
    backgroundColor : "#a3c4f3",
    height : 100,
    width:100,
    
  },
  box2 : {
    flex :1,
    backgroundColor : "#f1c0e8",
    height : 100
  },
  box3 : {
    flex :1,
    backgroundColor : "#ffcfd2",
    height : 100
  },
  box4 : {
    flex :1,
    backgroundColor : "#fde4cf",
    height : 100
  }
 
});




