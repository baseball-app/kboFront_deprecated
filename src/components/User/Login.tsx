import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>화면 출력 확인용 로그인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Login;
