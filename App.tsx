//로그인이 되어있을 때 페이지 안했을 때의 조건부 렌더링 해야함..

import React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/pages/Home/onboarding';
import SignUpScreen from './src/pages/SignUp/SignUp';
import Login from './src/pages/login/Login';
import Main from './src/pages/Main/Main';
import MyPage from './src/pages/Mypage/Mypage';
import AccountSetting from './src/pages/Mypage/AccountSetting';
const Stack = createStackNavigator();

const App = () => {
  //const [IsSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="  "
          component={WelcomeScreen} //options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPage}
          options={{title: '마이페이지'}}
        />
        <Stack.Screen
          name="AccountSetting"
          component={AccountSetting}
          options={{title: '계정 설정'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
