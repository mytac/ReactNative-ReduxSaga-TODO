import React, {Component} from 'react';
import {
    Text,View
} from 'react-native'

export default class Panel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>Panel</Text>
            </View>
        )
    }
}