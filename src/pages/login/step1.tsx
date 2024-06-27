import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface Step1Props {
    nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
    const { control, handleSubmit, watch } = useForm();
    const terms1 = watch('terms1', false);
    const terms2 = watch('terms2', false);
    const terms3 = watch('terms3', false);

    const onSubmit = (data: any) => {
        console.log(data);
        nextStep();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>오늘의 야구 서비스 이용에 동의해 주세요</Text>
            <View>
                {[{name: 'terms1', label: '(필수) 약관 모두 동의'}, 
                  {name: 'terms2', label: '(필수) 오늘의 야구 이용약관'}, 
                  {name: 'terms3', label: '(필수) 오늘의 야구 개인정보 수집 및 이용에 대한 동의'}]
                  .map((term, index) => (
                    <Controller
                        key={index}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TouchableOpacity onPress={() => onChange(!value)} style={styles.checkboxContainer}>
                                <View style={[styles.checkbox, value && styles.checkboxChecked]}>
                                    {value && <View style={styles.checkboxInner} />}
                                </View>
                                <Text style={value ? styles.labelSelected : styles.labelUnselected}>
                                    {term.label}
                                </Text>
                            </TouchableOpacity>
                        )}
                        name={term.name}
                        defaultValue={false}
                    />
                ))}
                <TouchableOpacity
                    style={terms1 && terms2 && terms3 ? styles.button : styles.buttonDisabled}
                    onPress={handleSubmit(onSubmit)}
                    disabled={!terms1 || !terms2 || !terms3}
                >
                    <Text style={styles.buttonText}>동의</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        margin: 30
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 30,
    },
    checkbox: {
        width: 30,
        height: 30,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        color: 'black',
        backgroundColor: 'black',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: '#fff',
    },
    labelSelected: {
        color: '#000',
    },
    labelUnselected: {
        color: '#ccc',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#CCCCCC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default Step1;
