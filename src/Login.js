import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image} from 'react-native';

export default class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.LoginView}>
                <Image source={require('../assets/images/哆啦A梦.jpg')} style={styles.Touxiang}/>
                <TextInput placeholder = '请输入账号' style={styles.Text} />
                <TextInput placeholder = '请输入密码' password={true} style={styles.Text}/>
                <View style={styles.LoginStyle}>
                    <Text style={styles.LoginText}>登录</Text>
                </View>
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                <View style={styles.Other}>
                    <Text>其他方式登录:</Text>
                    <Image source={require('../assets/images/哆啦A梦.jpg')} style={styles.image}></Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    LoginView:{
        flex:1,
        backgroundColor:'#dddddd',
        width:400,
        height:800,
        alignItems:'center',


    },
    Touxiang:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
        marginTop:20,
        marginBottom:20
    },
    Text:{
        height:38,
        width:1000,
        backgroundColor: 'white',
        marginBottom: 2,
        textAlign: 'center'
    },
    image:{
        width: 30,
        height: 30,
        borderRadius:40
    },
    Other:{
        flexDirection: 'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:20
    },
    LoginStyle:{
        width:400,
        height:30,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop:5
    },
    LoginText:{

    },
    settingStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:400,
        marginTop: 5
    }
});