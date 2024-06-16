import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Splash from 'screens/Splash';
// import Login from 'screens/Login';
// import Main from 'screens/Main';
import Signup from './Signup';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Entry">
        {/* <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        /> */}
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{title: '회원가입', headerTitleAlign: 'center'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
