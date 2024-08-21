import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyPage: React.FC = () => {
  const menuItems = [
    {title: '계정 설정', icon: 'settings'},
    {title: '초대하기', icon: 'person-add'},
    {title: '친구 관리', icon: 'people', textColor: '#FF6B6B'},
    {title: '데이터 초기화', icon: 'refresh'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>마이페이지</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Icon name={item.icon} size={24} color={item.textColor || '#000'} />
          <Text style={[styles.menuText, {color: item.textColor || '#000'}]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },
});

export default MyPage;
