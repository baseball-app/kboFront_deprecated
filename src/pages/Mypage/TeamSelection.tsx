import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const TeamSelection: React.FC = () => {
  const navigation = useNavigation();
  const teams = [
    '삼성라이온즈',
    'KT 위즈',
    'NC 다이노스',
    '키움 히어로즈',
    'LG 트윈스',
    'SSG 랜더스',
    'KIA 타이거즈',
    '롯데 자이언츠',
    '두산 베어스',
    '한화 이글스',
  ];

  const renderTeamItem = ({item, index}: {item: string; index: number}) => (
    <TouchableOpacity style={styles.teamItem}>
      <View style={styles.teamIcon} />
      <Text style={styles.teamName}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>마이팀 재선택</Text>
        <View style={{width: 24}} />
      </View>

      <Text style={styles.subtitle}>마이팀 설정하기</Text>
      <Text style={styles.description}>
        1개의 팀만 선택 가능하며 기존에 있던 데이터는 초기화됩니다.
      </Text>

      <FlatList
        data={teams}
        renderItem={renderTeamItem}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={styles.teamList}
      />

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>변경하기</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 20,
  },
  teamList: {
    paddingHorizontal: 8,
  },
  teamItem: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  teamIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#FF6B6B',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TeamSelection;
