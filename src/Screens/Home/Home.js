import React from "react";
import {View , Text, TouchableOpacity ,Image} from "react-native";
import HeaderComp from "../../Components/HeaderComp";
import { Styles } from "../../style/style";
import imagePath from "../../constants/imagePath";


function Home(){
    return(
        <View style={Styles.container}>
          <HeaderComp 
          title="To Do List"
        
          />
        {/* <View style={{flex:1}}>
        </View> */}
          <TouchableOpacity style={Styles.Image}>
            <Image style={{height:100, width:100 ,borderRadius:50}} source={imagePath.iadd}></Image>
            {/* <Text style={{fontSize:42}}>+</Text> */}

          </TouchableOpacity>
          
        </View>
    )
}


export default Home