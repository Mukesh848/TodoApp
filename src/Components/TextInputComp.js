import React from "react";
import { View , Text ,TextInput } from "react-native";
import { Styles } from "../style/style";



const TextInputComp=(
{
    value ,
  placeholder={},
    onChangeText=()=>{},
    txtInputstyle
}
)=>
{
    return(
        <View>
            <TextInput 
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={{...Styles.txtInputstyle,...txtInputstyle}}
            >
            </TextInput>
        </View>
    )
}

export default TextInputComp