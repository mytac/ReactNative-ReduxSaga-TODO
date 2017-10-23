import React, {Component} from 'react';
import {
    Text,View,StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    rightColStyle:{
        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
    }
})

export default class LeftCol extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.mainStyle}>
                <Text style={{color:'#fff',fontFamily:'Never say never'}}>left</Text>
            </View>
        )
    }
}