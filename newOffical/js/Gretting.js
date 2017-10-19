import React,{Component} from 'react'
import {
    Text,View,Button,Image
} from 'react-native'
import {StackNavigator,TabNavigator} from 'react-navigation'
import AddTodo from './AddTodo'

class Gretting extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>Hello~man</Text>
            </View>
        )
    }
}

class Business extends Component{
    render(){

        return(
            <View>
                <Text>Business</Text>
                <Gretting/>
                <Image source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2740860250,1342107311&fm=27&gp=0.jpg'}}
                       style={{width: 400, height: 400}} />

                <Button
                    onPress={()=> this.props.navigation.navigate('AddTodo')}
                    title="chat"
                />
            </View>
        )
    }
}

class Private extends Component{
    render(){
        return(
            <Text>Private</Text>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Business: { screen: Business },
    Private: { screen: Private },
});

export default MainScreenNavigator