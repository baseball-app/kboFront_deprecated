import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
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
      <Button
        title="캘린더"
        onPress={() => navigation.navigate('Main' as never)}
      />
      <Button
        title="마이페이지"
        onPress={() => navigation.navigate('MyPage' as never)}
      />
    </View>
  );
};

export default WelcomeScreen;
