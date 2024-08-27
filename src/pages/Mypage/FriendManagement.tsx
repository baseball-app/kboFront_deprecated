import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

interface Friend {
  id: string;
  name: string;
}

const FriendManagement: React.FC = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'following' | 'followers'>(
    'following',
  );

  const [following, setFollowing] = useState<Friend[]>([
    {id: '1', name: '양반마님 양마님'},
    {id: '2', name: '오스틴딘'},
    {id: '3', name: '안방마님 양마님'},
  ]);

  const [followers, setFollowers] = useState<Friend[]>([
    {id: '4', name: '오스틴딘'},
    {id: '5', name: '안방마님 양마님'},
    {id: '6', name: '오스틴딘'},
  ]);

  const handleDeleteFriend = (id: string) => {
    Alert.alert('안내', '선택하신 친구를 삭제하시겠습니까?', [
      {
        text: '취소',
        style: 'cancel',
      },
      {
        text: '친구 끊기',
        onPress: () => {
          if (activeTab === 'following') {
            setFollowing(following.filter(friend => friend.id !== id));
          } else {
            setFollowers(followers.filter(friend => friend.id !== id));
          }
        },
      },
    ]);
  };

  const renderFriendItem = ({item}: {item: Friend}) => (
    <View style={styles.friendItem}>
      <Image
        source={require('@/assets/images/baseball.png')}
        style={styles.profileImage}
      />
      <Text style={styles.friendName}>{item.name}</Text>
      <TouchableOpacity
        onPress={() => handleDeleteFriend(item.id)}
        style={styles.deleteBtn}>
        <Icon name="close" size={24} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>친구 관리</Text>
        <View style={{width: 24}} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'following' && styles.activeTab]}
          onPress={() => setActiveTab('following')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'following' && styles.activeTabText,
            ]}>
            {following.length} 팔로잉
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'followers' && styles.activeTab]}
          onPress={() => setActiveTab('followers')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'followers' && styles.activeTabText,
            ]}>
            {followers.length} 팔로워
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={activeTab === 'following' ? following : followers}
        renderItem={renderFriendItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#191919',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: '#191919',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 13,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  friendName: {
    fontSize: 16,
  },
  deleteBtn: {
    marginLeft: 'auto',
  },
});

export default FriendManagement;
