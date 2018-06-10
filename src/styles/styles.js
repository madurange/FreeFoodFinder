import {StyleSheet} from 'react-native';
import config from '../config';

export const styles=StyleSheet.create({

    mainContainer:{
        flex:1,
        width:100+"%",
        height:100+"%",
        justifyContent:"space-between",
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
        borderBottomColor:"gray"

    },

    appName:{
        color:"white",
        fontWeight:'bold',
        fontSize:17
    },

    topBarIcons:{
        width:20,
        height:20,
        tintColor:"white"

    }

});