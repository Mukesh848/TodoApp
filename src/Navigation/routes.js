import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Navigationstrings from "../Navigation/Navigationstrings";
import Home from "../Screens/Home/Home";
import * as Screens from "../Screens"


function Routes()
{
    const Stack= createNativeStackNavigator();
return(
<NavigationContainer>
    <Stack.Navigator initialRouteName={Navigationstrings.HOME}>
        <Stack.Screen name={Navigationstrings.HOME} component={Screens.Home}/>
        <Stack.Screen name={Navigationstrings.ADD_TASK} component={Screens.addTask}/>
    </Stack.Navigator>
</NavigationContainer>
)
}

export default Routes