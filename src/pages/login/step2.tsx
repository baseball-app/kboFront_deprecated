import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Header from '../login/headers';
import { styles } from '../login/styles';

interface Step2Props {
    nextStep: () => void;
    prevStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ nextStep, prevStep }) => {
    const { control, handleSubmit, watch, formState: { errors }, trigger } = useForm();
    const email = watch('email', '');
    const password = watch('password', '');
    const confirmPassword = watch('confirmPassword', '');
    const [emailMessage, setEmailMessage] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
        nextStep();
    };

    const isButtonDisabled = !email || !password || !confirmPassword || password !== confirmPassword || !emailMessage.includes('사용 가능한 이메일입니다.');

    const checkEmail = async () => {
        const isValid = await trigger('email');
        if (!isValid) {
            setEmailMessage('올바른 이메일을 입력해주세요');
            return;
        } else {
            setEmailMessage('사용 가능한 이메일입니다.');
        }

        setIsEmailChecked(true);  

        /*
        try {
            const response = await axios.post('/', { email }); // 여긴 후에 채울 예정
            if (response.data.exists) {
                setEmailMessage('이미 사용 중인 이메일주소입니다.');
            } else {
                setEmailMessage('사용 가능한 이메일입니다.');
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setEmailMessage('이메일 확인 중 오류가 발생했습니다.');
        } finally {
            setIsEmailChecked(false);  
        }
        */
    };

    return (
        <View>
            <View style={styles.card}>
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
                    rules={{ 
                        required: true, 
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: '올바른 이메일을 입력해주세요'
                        } 
                    }}
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
                <Text style={styles.subTitle}>새 비밀번호를 입력해주세요</Text>
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
                    rules={{ required: true }}
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
                    rules={{ required: true }}
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
    checkButton: {
        backgroundColor: '#CCCCCC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    checkedButton: {
        backgroundColor: '#AAAAAA',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    emailMessage: {
        color: '#FF0000',
        marginBottom: 10,
    },
});

export default Step2;
