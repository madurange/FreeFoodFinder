import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {styles} from '../src/styles/styles.js'
import {Event,TopTitleBar} from './components/componentsIndex.js';


class FreeFoodFinder extends Component{
    render(){
        return(

            <View style={styles.mainContainer}>
                <TopTitleBar/>
                <Event/>
            </View>




        );
    }
}


export default FreeFoodFinder;