import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';

export default class ScrollViewDemo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView
                horizontal={false}
            >
                {this.getScrollChild() }
            </ScrollView>
        )
    }

    getScrollChild(){
        var allChild = [];
        var colors = ['pink','yellow','blue','gray','red']
        for (var i=0;i<5;i++){
            allChild.push(
                <View key={i} style={{backgroundColor:colors[i],width:200,height:200}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return allChild;
    }
}