import { useState } from "react";
import { Button, Dimensions, Text} from "react-native";

export default function App(){
   
    let [sdimensions,setDimensions]=useState({})
    let [wdimensions,setDimensions]=useState({});
    let getDimensions=()=>{
        setSDimensions(Dimensions.get("screen"));
        setWDimensions(Dimensions.get("window"));
    }
  //  console.log(Dimensions.get)
    return <View style={{paddingTop:30}}>
        <Text>{" Screen Dimensions"}</Text>
        <Text> Screen width:{sdimensions.width}</Text>
        <Text> Screen Heigth:{sdimensions.height}</Text>
        <Text>{" Window Dimensions"}</Text>
        <Text> Screen width:{wdimensions.width}</Text>
        <Text> Screen Heigth:{wdimensions.height}</Text>
        <Button title="Get Dimensions" onPress={getDimensions}></Button>

      
    </View>
}