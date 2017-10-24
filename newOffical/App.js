import React, {Component} from 'react';
import {
    Button, AppRegistry, Text, TextInput, View, ScrollView, FlatList, SectionList, Image, StyleSheet
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import Form from './js/Form'
import Panel from './js/Panel'
import MyBtn from './js/Component/Button'

const uri = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1913196465,1576510051&fm=173&s=77C6D81FCE0A1AC84C014FFB0300702D&w=218&h=146&img.jpg'

const styles = StyleSheet.create({
    roundBtnInner: {
        backgroundColor: 'rgb(63, 161, 239)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        width: 80,
        height: 80,
    },
    btnPosition:{
        position: 'absolute',
        bottom:75,
        right:50
    }
});

class App extends Component {
    static navigationOptions = {
        header : null,
    }

    constructor(props) {
        super(props);
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Panel/>
                <MyBtn event={() => navigate('Form')}
                       myStyle={styles.roundBtnInner}
                       outerStyle={styles.btnPosition}
                       Ele={()=><Icon name="plus" size={20} color="#fff"/>}
                />
            </View>
        );
    }
}

export default StackNavigator({
    App: {
        screen: App,
    },
    Form: {screen: Form},
})
