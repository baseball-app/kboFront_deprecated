import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Clipboard,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const InviteSetting: React.FC = () => {
  const navigation = useNavigation();
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleCopyLink = () => {
    Clipboard.setString('https://your-app-invite-link.com');
    setIsLinkCopied(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>초대하기</Text>
        <View style={{width: 24}} />
      </View>

      <View style={styles.content}>
        <Image
          source={require('@/assets/images/baseball.png')}
          style={styles.img}
        />

        {isLinkCopied ? (
          <View style={styles.copiedContainer}>
            <Text style={styles.copiedText}>초대 링크 복사되었습니다</Text>
            <TouchableOpacity
              style={[styles.button, styles.copiedButton]}
              onPress={handleCopyLink}>
              <Text style={[styles.buttonText, styles.copiedButtonText]}>
                초대 링크 복사하기
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleCopyLink}>
            <Text style={styles.buttonText}>초대 링크 복사하기</Text>
          </TouchableOpacity>
        )}
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
  img: {
    width: 120,
    height: 120,
    borderRadius: 50,
    // backgroundColor: '#E0E0E0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 50,
  },
  mainText: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copiedContainer: {
    alignItems: 'center',
  },
  copiedText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  copiedButton: {
    backgroundColor: '#333',
  },
  copiedButtonText: {
    color: '#fff',
  },
});

export default InviteSetting;
