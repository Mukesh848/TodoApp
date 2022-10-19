import { StyleSheet } from "react-native"
import { moderateScale } from "./responsiveSize"

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:16
    },
    header:
    {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    headerText:{
        fontSize:35 ,
        fontWeight:'bold'

    },
    Image:
        { bottom: 20, 
            right: 20, 
            height:moderateScale(60), 
            width:moderateScale(60), 
            backgroundColor: "#90EE90",
            position: 'absolute',
            justifyContent: 'center',
            borderRadius:30 }

}) 