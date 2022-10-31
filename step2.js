import { useState } from "react";
import { Text, View , SafeAreaView, ActivityIndicator, Pressable} from "react-native";
export default function App(){
  let [scale,setScale]=useState(10)
  return  <View style={{paddingTop:30}}>
      
            <Pressable onPress={()=>setScale(scale +5)}>
            <ActivityIndicator size={scale}/>
            </Pressable>
          
          </View>
 
}
