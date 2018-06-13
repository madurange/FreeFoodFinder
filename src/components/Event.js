import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import {styles} from '../styles/styles.js';
import config from '../config';

class Event extends Component{

    constructor(props){
        super(props);
        this.state ={
            eventName: props.eventName,
            eventLocation: props.eventLocation,
            eventRoomNumber: props.eventRoomNumber,
            eventDate: new Date("2016-01-04T10:34:23-04:00"),
            eventStartTime: props.eventStartTime,
            eventEndTime: "3.00PM",
            eventImages: props.eventImages,
            eventText: props.eventText,
            votesNum: props.votesNum,
            isVoted: false,
            isActive: true,
            isOwnedByUser: true

        };
    }

    upVoted(){
        this.setState({
            votesNum: this.state.votesNum+1,
            isVoted: true
        });
    }

    downVoted(){
        this.setState({
            votesNum: this.state.votesNum-1,
            isVoted: true
        });
    }

    render(){

        return(
            <View style={styles.eventContainer}>
                <View style={styles.eventTopBar}>
                    <View style={{flex:0.60,alignItems:"flex-start", justifyContent:"center"}}>
                        <Text style={{fontSize:18, marginLeft:4}}>{this.state.eventName}</Text>
                        <Text style={{fontSize:14, marginLeft:4}}>{this.state.eventLocation} - {this.state.eventRoomNumber}</Text>
                    </View>
                    <View style={{alignItems:"flex-end",flex:0.40, justifyContent:"center"}}>
                        <Text style={{fontSize:14, paddingTop:2,marginBottom:-4, marginRight:4}}> {this.state.eventStartTime} </Text>
                        <TouchableOpacity>
                            <Image style={{width:26, height:26, marginRight:4}} source={config.icons.threeDots} />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View>
                    <Image style={{width:100+"%",height:360}} source={{uri:this.state.eventImages[0]}} />
                </View>
                <View style={styles.eventBottomBar}>
                    <View style={{flex:0.87,alignItems:"flex-start"}}> 
                        <Text style={{fontSize:15, marginLeft:4}}>{this.state.eventText}</Text>
                    </View>
                    <View style={{flex:0.13,alignItems:"center", justifyContent:"center"}} >
                        <TouchableOpacity onPress={()=>{this.upVoted();}} disabled={this.state.isVoted}>
                            <Image style={{width:26, height:26}} source={config.icons.upVote} />
                        </TouchableOpacity>
                        <Text style={{fontSize:16,fontWeight:"800",color:"mediumseagreen",marginBottom:-8,marginTop:-8}}>{this.state.votesNum}</Text>
                        <TouchableOpacity onPress={()=>{this.downVoted();}} disabled={this.state.isVoted}>
                            <Image style={{width:26, height:26}} source={config.icons.downVote} /> 
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}


export default Event;
