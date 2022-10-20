import React from "react";
import {View , Text, TouchableOpacity ,Image, FlatList} from "react-native";
import HeaderComp from "../../Components/HeaderComp";
import { Styles } from "../../style/style";
import imagePath from "../../constants/imagePath";
import { verticalScale } from "../../style/responsiveSize";
import Addtask from "../Addtask/Addtask";
import Navigationstrings from "../../Navigation/Navigationstrings";



function Home({navigation ,route}){
  
  console.log("values that passed in add task screen",route.params)
    return(
        <View style={Styles.container}>
          <HeaderComp 
          title="To Do List"
          />
         
      {/* <FlatList
      data={dataTitle}
      renderItem={(item , index)=>{

        // return
        // (
        //   <View>
        //      <Text>{item.head}</Text>
        //   </View>

        // )
        return(
          <View>
            <Text>{item.title}</Text>
          </View>
        )
      }}
    >

      </FlatList> */}
          <TouchableOpacity style={Styles.Image} onPress={()=>{
            navigation.navigate(Navigationstrings.ADD_TASK)
          }}>
            <Image style={{height:100, width:100 ,borderRadius:50}} source={imagePath.iadd}></Image>
          
          </TouchableOpacity>
          
        </View>
    )
}


export default Home