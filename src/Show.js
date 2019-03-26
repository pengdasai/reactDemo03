import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
var Dimensions = require('Dimensions')
export default class Show extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.ViewStyle}>
                <Text>当前屏幕的宽-度：{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高-度：{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
                <Image source={require('../assets/images/哆啦A梦.jpg')} style={{width:100,height:80}}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ViewStyle:{
        //沾满屏幕
        flex:1,
        //主轴
        justifyContent:'center',
        //侧轴
        alignItems:'center'
    }
});