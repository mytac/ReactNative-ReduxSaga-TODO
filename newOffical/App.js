import React, {Component} from 'react';
import {
    Button,AppRegistry, Text, TextInput, View,ScrollView,FlatList,SectionList,Image
} from 'react-native';

import {StackNavigator,DrawerNavigator} from 'react-navigation'

import Form from './js/Form'
import Panel from './js/Panel'
const uri = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1913196465,1576510051&fm=173&s=77C6D81FCE0A1AC84C014FFB0300702D&w=218&h=146&img.jpg'

class App extends Component {
    static navigationOptions={
        title:'TO DO THINGS',
        drawerLabel:'App',
        drawerIcon:()=>{
            return(
                <Image
                    style={{width:50,height:50}}
                    source={{uri:uri}}
                />
            )
        }
    }

    constructor(props) {
        super(props);
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={{padding: 10}}>
                <Panel/>
                <Text>dsds</Text>
                <Button
                    onPress={()=>navigate('Form')}
                    title="Greeting~~~"
                />
            </ScrollView>
        );
    }
}

export default DrawerNavigator({
    App:{screen:App},
    Form:{screen:Form},
})
