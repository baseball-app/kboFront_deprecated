import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { styles } from './styles';
import Icon from "react-native-vector-icons/Ionicons";

interface Step2Props {
    nextStep: () => void;
    prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
    const { control, handleSubmit, watch } = useForm();
    const email = watch('email', '');
    const password = watch('password', '');
    const confirmPassword = watch('confirmPassword', '');
    const [emailMessage, setEmailMessage] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    const onSubmit = async (data: any) => {
        try {
            // await axios.post('/password', { password });
            console.log('Password submitted:', password);
            nextStep();
        } catch (error) {
            console.error('Error submitting password:', error);
        }
    };

    const isButtonDisabled = !email || !password || !confirmPassword || password !== confirmPassword || !emailMessage.includes('사용 가능한 이메일입니다.');

    const checkEmail = async () => {
        /*
        try {
            const response = await axios.post('/check-email', { email });
            if (response.data.exists) {
                setEmailMessage('이미 사용 중인 이메일주소입니다.');
            } else {
                setEmailMessage('사용 가능한 이메일입니다.');
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setEmailMessage('이메일 확인 중 오류가 발생했습니다.');
        }
        */
        setEmailMessage('사용 가능한 이메일입니다.');
        setIsEmailChecked(true);
    };

    return (
        <View>
            <View style={styles.card}>
                <TouchableOpacity onPress={prevStep} style={styles.backButton}>
                    <Icon name="chevron-back-outline" size={25} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>이메일 계정을 입력해주세요</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            value={value}
                            placeholder="이메일 계정 입력"
                            keyboardType="email-address"
                            placeholderTextColor="#999"
                        />
                    )}
                    name="email"
                    defaultValue=""
                />
                <TouchableOpacity
                    style={isEmailChecked ? localStyles.checkedButton : localStyles.checkButton}
                    onPress={checkEmail}
                    disabled={isEmailChecked}
                >
                    <Text style={styles.buttonText}>중복확인</Text>
                </TouchableOpacity>
                <Text style={localStyles.emailMessage}>{emailMessage}</Text>
                <Text style={localStyles.title}>새 비밀번호를 입력해주세요</Text>
                <Text style={styles.subText}>영문,숫자 포함 8자 이상 20자 이내로 입력해주세요.</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            value={value}
                            placeholder="새 비밀번호 입력"
                            secureTextEntry
                            placeholderTextColor="#999"
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.input}
                            onChangeText={onChange}
                            value={value}
                            placeholder="새 비밀번호 다시 입력"
                            secureTextEntry
                            placeholderTextColor="#999"
                        />
                    )}
                    name="confirmPassword"
                    defaultValue=""
                />
                <TouchableOpacity
                    style={isButtonDisabled ? styles.buttonDisabled : styles.button}
                    onPress={handleSubmit(onSubmit)}
                    disabled={isButtonDisabled}
                >
                    <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const localStyles = StyleSheet.create({
    emailMessage: {
        marginTop: 5,
        color: 'red',
    },
    checkedButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    checkButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    title:{
        marginTop:60,
        fontSize: 24,
        marginBottom:10,
    }
});

export default Step2;







