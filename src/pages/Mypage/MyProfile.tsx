import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const MyProfile: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen as never);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('@/assets/images/baseball.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileImageText}>프로필</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>닉네임</Text>
          <Text style={styles.infoValue}>몽</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>나의 구단</Text>
          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>삼성라이온즈</Text>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>변경하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  confirmButton: {
    color: '#FF6B6B',
    fontSize: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  profileImageText: {
    position: 'absolute',
    top: 40,
    color: '#888',
  },
  infoContainer: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 16,
  },
  infoLabel: {
    fontSize: 16,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    marginRight: 8,
  },
  changeButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  changeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MyProfile;
