import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ScrollView,Alert,Button,ListView,TouchableOpacity,AppRegistry,} from 'react-native';
//var imageData = require('../ImageData.json');
import ImageData from '../test';
//Alert.alert(ImageData.data.toString());
//导入json数据
const Nine = React.createClass({

    getDefaultProps(){
        return{

        }
    },

    getInitialState(){

        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
        return{
            dataSource : ds.cloneWithRows(ImageData.data)
        }
    },

    //开始绘制
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            >
            </ListView>
            )

    },
    //实现renderRow
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacty={0.5}>
                <View>
                    <Image source={{uri:rowData.image}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
            )
    }
});
AppRegistry.registerComponent('Nine',()=>Nine);
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    iconStyle:{
        width:80,
        height:80
    }
});