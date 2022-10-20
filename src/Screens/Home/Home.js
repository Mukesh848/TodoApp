import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View ,FlatList } from "react-native";
import HeaderComp from "../../Components/HeaderComp";
import imagePath from "../../constants/imagePath";
import Navigationstrings from "../../Navigation/Navigationstrings";
import { Styles } from "../../style/style";



function Home({navigation ,route}){
  // const[data , setdata]=useState([])
  // const fetchdata=()=>
  // {
  //   const Paramdata= route?.params
  //   setdata(Paramdata)
  // }

  // useEffect(()=>{
  //   fetchdata();
  // },[data])
  const Paramdata= route?.params
  const renderItemfunction=({item , index})=>{
    return(
      <View style={{alignItems:'center' ,backgroundColor:'#DCDCDC',height:100,justifyContent:'center' ,borderRadius:20}}>
        <Text>Title:{item?.head}</Text>
        <Text>description:{item.description}</Text>
      </View>
    )
  }
    
  const emptyListFunction=()=>{
      
      return(
        <View style={{alignItems:'center' ,backgroundColor:'#DCDCDC',height:100,justifyContent:'center' ,borderRadius:20}}>
          <Text style={{fontSize:20 }}>no task till now</Text>
        </View>
      )
    }
 
    
    
  
  return(
        <View style={Styles.container}>
          <HeaderComp 
          title="To Do List"
          />
     
      <FlatList
      data={Paramdata}
      renderItem={renderItemfunction}
      ListEmptyComponent={emptyListFunction}
      />

 
          <TouchableOpacity style={Styles.Image} onPress={()=>{
            navigation.navigate(Navigationstrings.ADD_TASK )
          }}>
            <Image style={{height:100, width:100 ,borderRadius:50}} source={imagePath.iadd}></Image>
          
          </TouchableOpacity>
          
        </View>
    )
}


export default Home