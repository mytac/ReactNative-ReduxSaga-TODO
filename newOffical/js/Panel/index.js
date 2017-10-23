import React, {Component} from 'react';
import {
    Text,View,StyleSheet
} from 'react-native'

import DashBoard from './DashBoard'
import List from './List'

export default class Panel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex:2}}>
                <DashBoard/>
                <List/>
            </View>
        )
    }
}