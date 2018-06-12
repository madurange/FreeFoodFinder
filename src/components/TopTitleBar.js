import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styles/styles.js';
import config from '../config';


class TopTitleBar extends Component{
    render(){
        return(
            <View style={styles.topTitleBar}>
                <TouchableOpacity>
                    <Image style={[styles.topBarIcons,{marginLeft:10}]} source={config.icons.infoIcon} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.appName}>Free Food Finder</Text>
                </View>
                <TouchableOpacity>
                    <Image style={[styles.topBarIcons,{marginRight:10}]} source={config.icons.settingsIcon} />
                </TouchableOpacity>
            </View>
        );
    }
}


export default TopTitleBar;