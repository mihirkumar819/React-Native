import { Text, View , SafeAreaView,Button,Alert,} from "react-native";
import {useState} from "react";
export default function App(){
  let [message,setMessage]=useState("")
  let presshandler=()=>{
    console.log("Hi Mihir ");
    Alert.alert("Alert Title Comes Here","Is It raining..?",[
      {text:"yes",onPress:()=>setMessage("you said Yes")},
      {text:"no",onPress:()=>setMessage("you said no")},
    ])
  }
  return <SafeAreaView>
          <View style={{paddingTop:30}} >
          <Text>{message}</Text>
              <Button onPress={presshandler} title="Click me"> </Button>
    </View>
  </SafeAreaView>
}
