//로그인이 되어있을 때 페이지 안했을 때의 조건부 렌더링 해야함..

import React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/pages/Home/onboarding';
import SignUpScreen from './src/pages/SignUp/SignUp';
import Login from './src/pages/login/Login';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
