/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,AppRegistry, Text, TextInput, View,ScrollView,FlatList,SectionList
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import Gretting from './js/Gretting'
import AddTodo from './js/AddTodo'
import Form from './js/Form'
import Panel from './js/Panel'

class App extends Component {
    static navigationOptions={
        title:'Welcome'
    }

    constructor(props) {
        super(props);
    }


    render() {
        const { navigate } = this.props.navigation;
        const uri = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1913196465,1576510051&fm=173&s=77C6D81FCE0A1AC84C014FFB0300702D&w=218&h=146&img.jpg'
        return (
            <ScrollView style={{padding: 10}}>
                <Panel/>
                <Button
                    onPress={()=>navigate('Gretting',{name:'Luna chan~~'})}
                    title="Greeting~~~"
                />
            </ScrollView>
        );
    }
}

export default StackNavigator({
    App:{screen:App},
    Form:{screen:Form},
    Panel:{screen:Panel},
    AddTodo:{
        screen:AddTodo,
        navigationOptions:{
            title: 'AddTodo',
        }
    },
    Gretting:{
        screen:Gretting,
        navigationOptions:{
            title: 'Todo types',
            headerRight: <Button title="Info" />,
        }
    }
})
