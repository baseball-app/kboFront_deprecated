import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { styles } from './styles';
import { termsData } from './terms';

interface Step1Props {
    nextStep: () => void;
}

interface Terms {
  [key: string]: boolean;
}

const Step1: React.FC<Step1Props> = ({ nextStep }) => {
    const [terms, setTerms] = useState<Terms>({ terms1: false, terms2: false, terms3: false });
    const [showTerms, setShowTerms] = useState({ terms2: false, terms3: false });

    const handleCheckboxChange = (name: string) => {
        setTerms({ ...terms, [name]: !terms[name] });
    };

    const onSubmit = () => {
        console.log(terms);
        nextStep();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>오늘의 야구 서비스 이용에 동의해 주세요</Text>
            <View style={styles.terms}>
                {[
                    { name: 'terms1', label: '(필수) 약관 모두 동의' },
                    { name: 'terms2', label: '(필수) 오늘의 야구 이용약관' },
                    { name: 'terms3', label: '(필수) 오늘의 야구 개인정보 수집 및 이용에 대한 동의' }
                ].map((term, index) => (
                    <View key={index}>
                        <View style={[styles.checkboxContainer, terms[term.name] && styles.checkboxContainerSelected]}>
                            <View style={localStyles.checkboxAndButtonContainer}>
                                <TouchableOpacity 
                                    onPress={() => handleCheckboxChange(term.name)} 
                                    style={localStyles.checkboxContainer}
                                >                        
                                    <View style={[styles.checkbox, terms[term.name] && styles.checkboxChecked]}>
                                        {terms[term.name] && <View style={styles.checkboxInner} />}
                                    </View>
                                    <Text style={[terms[term.name] ? styles.labelSelected : styles.labelUnselected, localStyles.label]}>
                                        {term.label}
                                    </Text>
                                </TouchableOpacity>
                                
                                {term.name !== 'terms1' && (
                                    <TouchableOpacity onPress={() => setShowTerms({ ...showTerms, [term.name]: !showTerms[term.name] })}>
                                        <Text style={localStyles.moreButton}>{showTerms[term.name] ? '확인' : '더보기'}</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                        {showTerms[term.name] && (
                            <View style={localStyles.scrollContainer}>
                                <ScrollView>
                                    <Text style={localStyles.termsText}>{termsData[term.name]}</Text>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                ))}
            </View>
            <TouchableOpacity
                style={terms.terms1 && terms.terms2 && terms.terms3 ? styles.button : styles.buttonDisabled}
                onPress={onSubmit}
                disabled={!terms.terms1 || !terms.terms2 || !terms.terms3}
            >
                <Text style={styles.buttonText}>동의</Text>
            </TouchableOpacity>
        </View>
    );
};

//이용약관에 대한 스타일링
const localStyles = StyleSheet.create({
    termsText: {
        color: '#666',
    },
    moreButton: {
        color: '#666',
        marginLeft: 10,
    },
    checkboxAndButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    label: {
        flex: 1,
        flexWrap: 'wrap',
    },
    scrollContainer: {
        maxHeight: 150,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
});

export default Step1;
