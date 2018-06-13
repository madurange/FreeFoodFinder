import {StyleSheet} from 'react-native';
import config from '../config';

export const styles=StyleSheet.create({

    mainContainer:{
        flex:1,
        width:100+"%",
        height:100+"%",
        justifyContent:"flex-start",
        alignItems:"center"
    },

    topTitleBar:{
        width:100+"%",
        height:config.styleConstants.barRowHeight,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor: "rgb(30,30,50)",
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"lightgrey"

    },

    appName:{
        color:"white",
        fontWeight:'bold',
        fontSize:20
    },

    topBarIcons:{
        width:20,
        height:20,
        tintColor:"white"

    },

    eventContainer:{
        width:100+"%",
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:"lightgrey",
        marginBottom:10


    },

    eventTopBar:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        width:100+"%",
        height:45,
        backgroundColor:"white"
    },

    eventBottomBar:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        width:100+"%",
        height:55,
        backgroundColor:"white"

    }

});