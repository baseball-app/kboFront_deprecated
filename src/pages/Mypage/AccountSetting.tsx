import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountSetting: React.FC = () => {
  const email = 'aliceyoo01@naver.com'; // 사용자 이메일

  const menuItems = [
    {title: '나의 프로필', icon: 'person'},
    {title: '비밀번호 재설정', icon: 'lock'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>계정 설정</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>내가 로그인한 이메일 계정</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Icon name={item.icon} size={24} color="#000" style={styles.icon} />
          <Text style={styles.menuText}>{item.title}</Text>
          <Icon
            name="chevron-right"
            size={24}
            color="#000"
            style={styles.chevron}
          />
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  emailContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  emailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#000',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  icon: {
    marginRight: 16,
  },
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  chevron: {
    marginLeft: 'auto',
  },
});

export default AccountSetting;
