import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { styles } from './styles';
import Icon from "react-native-vector-icons/Ionicons";

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
        <View>
            <View style={styles.card}>
                <TouchableOpacity onPress={prevStep} style={styles.backButton}>
                    <Icon name="chevron-back-outline" size={25} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>닉네임을 입력해주세요</Text>
                <Text style={styles.subText}>한글/영어/숫자/밑줄/띄어쓰기를 사용할 수 있습니다.</Text>
                
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
