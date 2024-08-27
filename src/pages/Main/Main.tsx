import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomCalendar from '@/components/Calendar/Calendar';
import FriendList from '@/components/FriendList/FriendList';

const Main: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FriendList />
      <ScrollView>
        <CustomCalendar />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Main;
