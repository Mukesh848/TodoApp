import React from "react";
import {Text , View , StyleSheet} from "react-native";
import {Styles} from "../style/style";
import { verticalScale } from "../style/responsiveSize";


const HeaderComp=(
    {title,
    titlestyle}
)=>{

    return(
        <View style={{...Styles.header}}>
            <Text style={Styles.headerText}>{title}</Text>
            <View style={Styles.line}>

      </View>
        </View>
    )  
}

export default HeaderComp