import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image,
} from 'react-native'

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
        flexDirection:'row'
    },
    subStyle:{
        flex:1,
    },
    rightColStyle:{
        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
    }
})

const RightCol=()=>{
    return(
        <View style={styles.rightColStyle}>
            <Text style={{color:'#fff'}}>right</Text>
        </View>
    )
}

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
                    <View style={styles.subStyle}><RightCol/></View>
                </Image>
            </View>
        )
    }
}