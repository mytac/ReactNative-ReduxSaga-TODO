import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image,
} from 'react-native'

import LeftCol from './LeftCol'
import RightCol from './RightCol'
const url = require('../../../static/back.jpg')
const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
    },
    backgroundStyle: {
        resizeMode: 'cover',
        flex: 1,
        width: null,
        height: null,
    },
    subStyle:{
        flex:1,
    },
    rightColStyle:{
        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
    }
})

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.mainStyle}>
                <Image
                    source={url}
                    style={styles.backgroundStyle}
                >
                    <View style={{flexDirection:'row',flex:1}}>
                        <View style={styles.subStyle}><LeftCol/></View>
                        <View style={styles.subStyle}><RightCol/></View>
                    </View>
                    <View style={{height:5,backgroundColor:'pink'}}></View>
                </Image>
            </View>
        )
    }
}