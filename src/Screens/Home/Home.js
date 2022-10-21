import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View ,FlatList } from "react-native";
import HeaderComp from "../../Components/HeaderComp";
import imagePath from "../../constants/imagePath";
import Navigationstrings from "../../Navigation/Navigationstrings";
import { Styles } from "../../style/style";

function Home({navigation ,route}){
  const[data , setdata]=useState([])

  useEffect(()=>{
    fetchdata();
  },[route?.params])
  const fetchdata=()=>
  {
    const Paramdata= route?.params
    console.log("params from add task screen",Paramdata)
    if(!!Paramdata){
    setdata(Paramdata)
  }
  }

  console.log("flat data",data)
  //render item function of flat list
  const renderItemfunction=({item , index})=>{
    return(
      <View style={{backgroundColor:'#DCDCDC',justifyContent:'center' ,borderRadius:20, marginTop:30 ,paddingHorizontal:12 , paddingVertical:12}}>
        <Text style={{fontSize:15}}>TITLE:{item?.head}</Text>
        <Text style={{marginTop:10}}>DESCRIPTION:{item.description}</Text>
      </View>
    )
  }

  //empty list function of flat list
  const emptyListFunction=()=>{
      
      return(
        <View style={{alignItems:'center' ,backgroundColor:'#DCDCDC',height:60,justifyContent:'center' ,borderRadius:20}}>
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
      data={data}
      renderItem={renderItemfunction}
      ListEmptyComponent={emptyListFunction}
      />
          <TouchableOpacity style={Styles.Image} onPress={()=>{
            navigation.navigate(Navigationstrings.ADD_TASK ,{homeData:data})
          }}>
            <Image style={{height:100, width:100 ,borderRadius:50}} source={imagePath.iadd}></Image>
          </TouchableOpacity> 
        </View>
    )
}

export default Home