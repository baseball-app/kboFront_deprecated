import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPage from '@/pages/Mypage/Mypage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* 다른 스크린들 */}
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{title: '마이페이지'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
