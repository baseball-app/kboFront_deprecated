import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

interface HeaderProps {
    onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
    return (
        <SafeAreaView style={localStyles.safeArea}>
            <View style={localStyles.headerContainer}>
                <TouchableOpacity onPress={onBack} style={localStyles.backButton}>
                    <Text style={localStyles.backButtonText}>〈</Text>
                    <Text style={localStyles.backButtonLabel}>뒤로가기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const localStyles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white',
    },
    headerContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
        marginRight: 8,
    },
    backButtonLabel: {
        fontSize: 16,
        color: '#000',
    },
});

export default Header;

