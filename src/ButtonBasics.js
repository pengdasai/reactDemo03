import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component{
    constructor(props){
        super(props)
    }

    _onPressButton(){
        Alert.alert('first,你点我了!')
    }

    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.buttonCon}>
                    <Button title={'First'} onPress={this._onPressButton()} />
                </View>
                
                <Button
                    title={'First'}
                    onPress={this._onPressButton()}
                    color='pink'
                >
                </Button>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    Container:{
        //flex:1,
        justifyContent:'center'
    },
    buttonCon:{
        margin: 20
    }
});