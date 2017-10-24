import React, {Component} from 'react';
import {
    Text,View,StyleSheet
} from 'react-native'

import DigitSquare from './DigitSquare'

const styles = StyleSheet.create({
    mainStyle:{
        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
    },
    wrapper:{
        position:'relative',
        top:130,
        flexDirection:'row',
        paddingRight:20
    }
})

export default class RightCol extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {mainStyle,wrapper}=styles
        return(
            <View style={mainStyle}>
                <View style={wrapper}>
                    <DigitSquare type="Personal" num={10}/>
                    <DigitSquare type="Business" num={10}/>
                </View>
            </View>
        )
    }
}