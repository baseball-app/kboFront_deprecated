import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const MyPage: React.FC = () => {
  const navigation = useNavigation();
  const menuItems = [
    {title: '계정 설정', screen: 'AccountSetting'},
    {title: '초대하기', screen: 'InviteSetting'},
    {
      title: '친구 관리',
      screen: 'FriendManagement',
    },
    {
      title: '데이터 초기화',
      screen: '#',
      textColor: '#FF6B6B',
    },
  ];
  const handleNavigation = (screen: string, title: string) => {
    if (title === '데이터 초기화') {
      Alert.alert(
        '안내',
        '데이터를 초기화하시겠습니까? 초기화된 데이터는 복구할 수 없습니다.',
        [
          {
            text: '취소',
            style: 'cancel',
          },
          {
            text: '초기화',
            onPress: () => console.log('데이터 초기화 로직 실행'),
            // 여기에 데이터 초기화 로직
          },
        ],
      );
    } else if (screen !== '#') {
      navigation.navigate(screen as never);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>마이페이지</Text> */}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleNavigation(item.screen, item.title)}>
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
