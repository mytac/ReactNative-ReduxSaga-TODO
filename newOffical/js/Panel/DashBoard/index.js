import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image,
} from 'react-native'

const url = require('../../../static/back.jpg')
const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        flexDirection:'column'
    },
    backgroundStyle: {
        resizeMode: 'cover',
        flex: 1,
        width: null,
        height: null,
    },
    subStyle:{
        flex:1,
        flexDirection:'column'
    },
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
                    <View style={styles.subStyle}><Text>title</Text></View>
                    <View style={styles.subStyle}><Text>analize</Text></View>
                </Image>
            </View>
        )
    }
}