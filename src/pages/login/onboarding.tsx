import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>오늘의야구 온보딩화면</Text>
            <Button
                title="로그인"
                onPress={() => navigation.navigate('Login')}
            /> 
            <Button
                title="회원가입"
                onPress={() => navigation.navigate('Login')}
            />           
        </View>
    );
};

export default WelcomeScreen;

