import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
var BagData = require('../BagData.json');
export default class List extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.ViewStyle}>
                {this.getBag()}
            </View>
        )
    }
    //返回所有包
    getBag(){
        //定义数组
        var bags = [];
        //遍历json数据
        for(var i=0;i<BagData.data.length;i++){
            //取出单独的数据
            var bag = BagData[i];
            //装入数组
            bags.push(
                <View style={styles.ViewStyle}>
                    <Image source={{uri:bag.icon}} style={styles.ImageStyle}></Image>
                    <Text style={styles.nameStyle}>
                        {bag.title}
                    </Text>
                </View>
            )
        }
        return bags;
    }
}

const styles = StyleSheet.create({
    ViewStyle:{

    },
    ImageStyle:{

    },
    nameStyle:{

    }
});