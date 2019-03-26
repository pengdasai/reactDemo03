import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';

export default class Test extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <TextInput style={styles.inputStyle}>

                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   inputStyle:{
       width:100,
       height:100,
       borderWidth:1,
       borderColor:'blue'
   }
});