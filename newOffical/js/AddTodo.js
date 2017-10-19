import React,{Component} from 'react'
import {StackNavigator,TabNavigator} from 'react-navigation'
import {
    Text,View
} from 'react-native'

import FadeView from './FadeView'

class AddTodo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>AddTodo</Text>
                <FadeView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeView>
            </View>
        )
    }
}

export default AddTodo