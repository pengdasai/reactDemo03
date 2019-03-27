import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ScrollView,Alert,Button,ListView,TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
export default class BarDemo extends Component{
    constructor(props){
        super(props)
    }
    state={
        first:'',
        second:''
    };

    render(){
        return(
            <View style={styles.mainView}>
                <View>
                    <Text>111</Text>
                </View>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.first === 'home'}
                        title="我的"
                        renderIcon={() => <Image source={require('../assets/images/哆啦A梦.jpg')} />}
                        renderSelectedIcon={() => <Image source={require('../assets/images/哆啦A梦.jpg')} />}
                        badgeText="1">
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.second === 'home'}
                        title="分类"
                        renderIcon={() => <Image source={require('../assets/images/哆啦A梦.jpg')} />}
                        renderSelectedIcon={() => <Image source={require('../assets/images/哆啦A梦.jpg')} />}
                        badgeText="1">
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView:{

    }
});