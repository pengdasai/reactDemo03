import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Alert} from 'react-native';

export default class ButtonDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'default'
        }
    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                this.renderPress('点击');
            }}>
                <View style={styles.innerViewStyle}>
                    <Text>我是按钮</Text>
                </View>
                <View>
                    <Text>{this.state.msg}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderPress(event){
        this.setState({
            msg:event
        })
    }
}

const styles = StyleSheet.create({
    innerViewStyle:{
        backgroundColor:'pink'
    }
});