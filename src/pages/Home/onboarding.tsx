import React from 'react';
import {View, Text, Button,SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View >
        <Text>오늘의야구 온보딩화면</Text>
        <Text>이미 회원이신가요?</Text>
        <Button
          title="로그인하기"
          onPress={() => navigation.navigate('Login' as never)}
        />
        <Button
          title="시작하기"
          onPress={() => navigation.navigate('SignUp' as never)}
        />
      </View>
    </SafeAreaView>
  );
};


export default WelcomeScreen;
