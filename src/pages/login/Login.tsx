import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import {styles}  from '../SignUp/styles';

const Login = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // axios.post('API_URL', { email, password })
        //     .then(response => {
        //         // 로그인 성공 시 수행할 작업
        //         navigation.navigate('Home');
        //     })
        //     .catch(error => {
        //         // 로그인 실패 시 수행할 작업
        //         console.error(error);
        //     });
    };

    return (
        <View style={Localstyles.EmailContainer}>
    
            <Text style={styles.label}>이메일</Text>
            <TextInput
                style={styles.input}
                placeholder="이메일 계정을 입력해주세요"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
                style={styles.input}
                placeholder="비밀번호를 입력해주세요"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={Localstyles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity >

            <View style={Localstyles.LoginFind}>
                <Text style={Localstyles.LoginFind}>이메일 찾기</Text>
                <Text style={Localstyles.LoginFind}>|</Text>
                <Text style={Localstyles.LoginFind}>비밀번호 찾기</Text>
            </View>

        </View>
    );
};

const Localstyles= StyleSheet.create({
    EmailContainer: {
        padding:30,
        marginTop:30,
    },
    LoginFind: {
        paddingRight:10,
        flexDirection:"row",
        justifyContent:"center",
        marginTop:3,
        

    },
    button: {
        marginBottom:10,
        marginTop:60,
        borderRadius:10,
        backgroundColor: 'black',
        paddingVertical: 20,
        alignItems:"center",
    }
    

});

export default Login;

/*
req body
{
	email: "aaa@naver.com",
	password: "",
}

res body
{
status_code: 200 / 209 / 500,
data: {
		email: "aaa@naver.com",
		nickname:"",
		myteam:"",
		accessToken:"",
		refreshToken:"",
		datetime:""
	}
}
*/



