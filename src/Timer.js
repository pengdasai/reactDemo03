import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ScrollView,Alert} from 'react-native';
import Test from "./Test";
var TimerMixin = require('react-timer-mixin');
var ImageData = require('../ImageData.json');
console.log(Alert.alert(ImageData));
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
export default class Timer extends Component{
    constructor(props){
        super(props)
    }
    //设置可变的初始值
    getInitialState(){
        return{
            //当前的页码
            currentPage:0
        }
    }
    //注册计时器
    mixins:[TimerMixin]
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                    //横向显示
                    horizontal={true}
                    //隐藏滚动条
                    showsHorizontalScrollIndicator={false}
                    //自动分页
                    pagingEnabled={true}
                >
                    {this.getALLImage()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {/*五个圆圈*/}
                    {this.getCircle()}
                </View>
            </View>
        )
    }
    getALLImage(){
        var allImage = [];
        //获取所有图片数组
        var imagesArr = ImageData.data;
        //遍历装数组
        for(let i=0;i<imagesArr.length;i++){
            //取出每一个图片
            var imgItem = imagesArr[i];
            allImage.push(
                <Image key={i} source={{uri:imgItem.img}} style={{width:width,height:120}}></Image>
            )
        }
        return allImage;
    }
    //返回所有圆点
    getCircle(){
        var indicatorArr = [];
        var imaArr = ImageData.data;
        //遍历
        for (let i=0;i<imaArr.length;i++){
            //吧圆点装进数组
            indicatorArr.push(
                <Text style={{fontSize:25,color:'pink'}}>&bull;</Text>
            )
        }
        return indicatorArr;
    }
}

var styles = StyleSheet.create({
    container:{

    },
    pageViewStyle:{
        width:width,
        height: 25,
        backgroundColor:'pink',
        //定位
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center'
    }
});