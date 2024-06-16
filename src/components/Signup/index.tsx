import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>화면 출력 확인용 회원가입</Text>
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

export default Signup;
