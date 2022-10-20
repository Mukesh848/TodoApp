import { StyleSheet } from "react-native"
import { moderateScale ,verticalScale } from "./responsiveSize"

export const Styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        marginHorizontal:16,
    },
    header:
    {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 24,
    },
    headerText:
    {
        fontSize:35 ,
        fontWeight:'bold'
    },
    Image:
        { 
        bottom: 20, 
        right: 20, 
        height:moderateScale(60), 
        width:moderateScale(60), 
        backgroundColor: "#90EE90",
        position: 'absolute',
        justifyContent: 'center',
        borderRadius:30 
    },
    txtInputstyle:
    {  
        width:"100%",
        height:40 ,
        marginTop:24 ,
        backgroundColor:'#DCDCDC',
        borderRadius:15,
        alignItems:'center'
    },
    line:
    {
        width:"100%" ,
        backgroundColor:"black" ,
        height:verticalScale(1) ,
        marginTop:10
    },
    savebtn:
    {
        position:'absolute',
        bottom:100,
        width:"100%",
        alignItems:'center',
        backgroundColor:"#FFFFFF",
        height:50,
        justifyContent:'center',
        borderRadius:30
    }
}) 