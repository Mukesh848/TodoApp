import React from "react";
import {Text , View , StyleSheet} from "react-native";
import {Styles} from "../style/style";


const HeaderComp=(
    {title,
    titlestyle}
)=>{

    return(
        <View style={{...Styles.header}}>
            <Text style={Styles.headerText}>{title}</Text>
        </View>
    )  
}

export default HeaderComp