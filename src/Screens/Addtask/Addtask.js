import React ,{useState} from "react";
import {Text  ,TouchableOpacity,View} from "react-native";
import TextInputComp from "../../Components/TextInputComp";
import { Styles } from "../../style/style";
import HeaderComp from "../../Components/HeaderComp";
import Navigationstrings from "../../Navigation/Navigationstrings";

function Addtask({navigation , routes}){
  const[title , setTitle]=useState('')
  const[desc, setDesc]=useState('')


  function validation(){
    if(title=='')
    {
        alert("Enter title  of the task ")
        return;
    }
    if(desc=='')
    {
        alert("enter the description")
        return;
    }
  }

    return(
        <View style={Styles.container}>
            <HeaderComp 
            title='Add New Task'
            />

           <TextInputComp
           value={title}
           placeholder='Enter Title'
           onChangeText={(value)=>{
            setTitle(value)
           }}
            />
    <TextInputComp
           value={desc}
           placeholder='Enter the description'
           onChangeText={(desc)=>
            {
            setDesc(desc)
           }}
           txtInputstyle={{height:150}} />
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.savebtn} onPress={()=>{
                navigation.navigate(Navigationstrings.HOME ,{head:{title} , description:{desc}})
            }}>
                <Text style={{color:'Black'}}>SAVE</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default Addtask