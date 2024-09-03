import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { styles } from '../SignUp/styles';
import { login } from '../../api/api';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('오류', '이메일과 비밀번호를 모두 입력해주세요.');
            return;
        }

        try {
            const response = await login(email, password);
            console.log('Login response:', response); // 응답 데이터 확인용
            if (response.status === 200) { // 로그인 성공
                navigation.replace('Main');
            } else { // 실패
                Alert.alert('로그인 실패', response.data.message || '로그인에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('Error during login: ', error);
            Alert.alert('오류', '로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    const handleFindEmail = () => {
        console.log('이메일 찾기');
    };

    const handleFindPassword = () => {
        console.log('비밀번호 찾기');
    };

    return (
        <View style={localStyles.EmailContainer}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
                style={styles.input}
                placeholder="이메일 계정을 입력해주세요"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
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
            <TouchableOpacity style={localStyles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>

            <View style={localStyles.LoginFind}>
                <TouchableOpacity onPress={handleFindEmail}>
                    <Text style={localStyles.LoginFindText}>이메일 찾기</Text>
                </TouchableOpacity>
                <Text style={localStyles.LoginFindText}>|</Text>
                <TouchableOpacity onPress={handleFindPassword}>
                    <Text style={localStyles.LoginFindText}>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    EmailContainer: {
        padding: 30,
        marginTop: 30,
    },
    LoginFind: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    LoginFindText: {
        paddingHorizontal: 10,
    },
    button: {
        marginBottom: 10,
        marginTop: 60,
        borderRadius: 10,
        backgroundColor: 'black',
        paddingVertical: 20,
        alignItems: "center",
    }
});

export default Login;
