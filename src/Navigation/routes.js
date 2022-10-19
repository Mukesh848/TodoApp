import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Navigationstrings from "../Navigation/Navigationstrings";
import Home from "../Screens/Home/Home";
// import index from '../Screens/index'



function Routes(){
    const Stack= createNativeStackNavigator();
return(
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name={Navigationstrings.HOME} component={Home}/>
        {/* <Stack.Screen name={Navigationstrings.ADD_TASK} component={}/> */}

    </Stack.Navigator>
</NavigationContainer>
)
}

export default Routes