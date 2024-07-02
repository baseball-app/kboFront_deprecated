//닉네임 입력회원가입

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller, useWatch } from 'react-hook-form';
import Header from '../login/headers';
import { styles } from '../login/styles';

interface Step3Props {
    nextStep: () => void;
    prevStep: () => void;
}

const Step3: React.FC<Step3Props> = ({ nextStep, prevStep }) => {
    const { control, handleSubmit } = useForm();

    const nickname = useWatch({
        control,
        name: 'nickname',
        defaultValue: ''
    });

    const onSubmit = (data: any) => {
        console.log(data);
        nextStep();
    };

    const isButtonDisabled = !nickname;

    return (
        <View >
            
            <View style={styles.card}>
                <Text style={styles.title}>닉네임을 입력해주세요</Text>
                <View style={styles.inputWrapper}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                value={value}
                                placeholder="닉네임 입력"
                                placeholderTextColor="#999"
                            />
                        )}
                        name="nickname"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
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

export default Step3;


//<Header onBack={prevStep} />