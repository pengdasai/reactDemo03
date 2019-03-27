import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ScrollView,Alert,Button,ListView} from 'react-native';
//导入数据
var wine = require('../wine.json')

export default class ListViewDemo extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    //设置数据源
    GListViewDemo = React.createClass({
        //设置初始值
        getInitialState(){
            var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
            //设置返回数据
            return{
                dataSource:ds.cloneWithRows(wine)
            }
        }
    });
    render(){
        return(
            <ListView
                //数据源
                dataSource={this.state.dataSource}
                //renderRow
                renderRow={this.renderRow}
            >

            </ListView>
        )
    }
    //返回具体的cell
    renderRow(rowID,sectionID,hightlightRow){
        return(
            <ListView>
                dataSource={}
            </ListView>
        )
    }
}

const styles = StyleSheet.create({
    bigView:{
        justifyContent:'center',
        alignItems:'center'
    }
});
