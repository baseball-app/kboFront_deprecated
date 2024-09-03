import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, Dimensions } from 'react-native';
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
    const [modalVisible, setModalVisible] = useState<string | null>(null);

    const handleCheckboxChange = (name: string) => {
        if (name === 'terms1') {
            const allChecked = !terms.terms1;
            setTerms({ terms1: allChecked, terms2: allChecked, terms3: allChecked });
        } else {
            const newTerms = { ...terms, [name]: !terms[name] };
            const allChecked = newTerms.terms2 && newTerms.terms3;
            setTerms({ ...newTerms, terms1: allChecked });
        }
    };

    const onSubmit = () => {
        console.log(terms);
        nextStep();
    };

    const openModal = (name: string) => {
        setModalVisible(name);
    };

    const closeModal = () => {
        setModalVisible(null);
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
                                    <TouchableOpacity onPress={() => openModal(term.name)}>
                                        <Text style={localStyles.moreButton}>보기</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
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
            
            <Modal
                visible={modalVisible !== null}
                animationType="slide"
                transparent={true}
            >
                <View style={localStyles.modalContainer}>
                    <View style={localStyles.modalContent}>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={localStyles.closeButton}>X</Text>
                        </TouchableOpacity>
                        <ScrollView>
                            <Text style={localStyles.termsText}>{termsData[modalVisible]}</Text>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: width * 0.9,  // 화면 크기의 90%
        height: height * 0.7,  // 화면 크기의 70%
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'flex-start',
    },
    closeButton: {
        alignSelf: 'flex-end',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Step1;
