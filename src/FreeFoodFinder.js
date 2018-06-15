import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native';

import {styles} from '../src/styles/styles.js'
import {Event,TopTitleBar} from './components/componentsIndex.js';

class FreeFoodFinder extends Component{

        
    render(){

        {/* Temp Event Image URLS from Turbo 360 File Storage*/}
        let dc="https://lh3.googleusercontent.com/oVToYSyAXZf9qDg_pBXsl075xgNjVUtbN-R8oB3iagnv-kRVh0Aox1c5Lgyqrkg_XIOmpjyGqyARnAAknBHPfiPt";
        let pk1="https://lh3.googleusercontent.com/YkZ1s0HgtEY47bUb--4VTRsm9FU3Te6hEQyd6GgSRTrpj2gf-VrcOp1Yzf-cXlg4umkKxFhySOvQemRNR1u_alU5Jg";
        let pk2="https://lh3.googleusercontent.com/4TYl3vl2nWZ3IP4vff7uBaTs4lCgL-MsD1aL2PdLmHZlsjCjBi2-B445nC9OhqlBUAlisJ3sY-lSOjpB9KpE7f3Q";
        let pk3="https://lh3.googleusercontent.com/HCfyZWI9pdIwHFH5qhrMYcdL7j-q3LdWNWm1M6nTre8CgtRU7uxyQj0Qdlv3jAvOSJLuTBMBIA2v0XTHq8z2rh49vg";
        let coke="https://lh3.googleusercontent.com/IaIKnw5J7XRUZG7CmfkFx-R01EiVDMRPzfCQVcyvAeo3q636YxrCi2I9OJyz3rkNkHjsRZvlDP9BVROeIerlLd8Vww";

        return(

            <View style={styles.mainContainer}>
                <TopTitleBar/>
                <ScrollView style={{width:100+"%",marginBottom:-10}}>
                    <Event 
                        eventName="Free Donuts and Coffee"
                        eventLocation="Victoria Building"
                        eventRoomNumber="VIC210"
                        eventStartTime="Today - 1.00PM"
                        eventImages={[dc]}
                        eventText="RSU is giving away free donuts to everyone! come and enjoy yours"
                        votesNum={2}
                    /> 
                    <Event 
                        eventName="Pan Cakes for all"
                        eventLocation="Engineering Building"
                        eventRoomNumber="ENG Lobby"
                        eventStartTime="Tomorrow - 10.00AM"
                        eventImages={[pk1,pk2,pk3]}
                        eventText="Come and eat free pan cakes and vote Freedom group"
                        votesNum={13}
                    />
                    <Event 
                        eventName="Grab a coke"
                        eventLocation="SLC"
                        eventRoomNumber="SLC501"
                        eventStartTime="May 30 - 3.00PM"
                        eventImages={[coke]}
                        eventText="A lot of cokes left"
                        votesNum={-1}
                    /> 
                </ScrollView>           

            </View>




        );
    }
}


export default FreeFoodFinder;