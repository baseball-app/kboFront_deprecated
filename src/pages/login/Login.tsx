import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../styles/loginStyles';



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이메일 계정을 입력해주세요</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일 계정 입력"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>중복확인</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>새 비밀번호를 입력해주세요</Text>
      <Text style={styles.subTitle}>영문, 숫자 포함 8자 이상 20자 이내로 입력해주세요.</Text>
      <TextInput
        style={styles.input}
        placeholder="새 비밀번호 입력"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="새 비밀번호 다시 입력"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};




export default LoginScreen;

