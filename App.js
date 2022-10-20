import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import {Styles} from "./src/style/style";
import Home from "./src/Screens/Home/Home";
import Routes from "./src/Navigation/routes"

function App(){
  return(
   <SafeAreaView style={Styles.container}>
    <Routes /> 
    </SafeAreaView>
  )
}
export default App