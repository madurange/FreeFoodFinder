import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import {styles} from '../styles/styles.js';
import config from '../config';


class TopTitleBar extends Component{
    render(){
        return(
            <View style={styles.topTitleBar}>
                <View>
                    <Image style={[styles.topBarIcons,{marginLeft:10}]} source={config.icons.infoIcon} />
                </View>
                <View>
                    <Text style={styles.appName}>Free Food Finder</Text>
                </View>
                <View>
                    <Image style={[styles.topBarIcons,{marginRight:10}]} source={config.icons.settingsIcon} />
                </View>
            </View>
        );
    }
}


export default TopTitleBar;