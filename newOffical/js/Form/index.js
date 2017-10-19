import React, {Component} from 'react';
import {
    Text,View,Image,Button
} from 'react-native'

import {StackNavigator,DrawerNavigator} from 'react-navigation'

import App from '../../App'
const uri = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1913196465,1576510051&fm=173&s=77C6D81FCE0A1AC84C014FFB0300702D&w=218&h=146&img.jpg'

class Form extends React.Component{
    static navigationOptions={
        title:'Form',
        drawerLabel:'Form',
        drawerIcon:()=>{
            return(
                <Image
                    style={{width:50,height:50}}
                    source={{uri:uri}}
                />
            )
        }
    }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>Form</Text>
                <Button
                    onPress={()=>this.props.navigation.goBack()}
                    title="Go back"
                />
            </View>
        )
    }
}

export default Form