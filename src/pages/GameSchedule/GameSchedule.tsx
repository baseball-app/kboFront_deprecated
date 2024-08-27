import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

const GameSchedule: React.FC = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('2024.05.23');
  const [showCalendar, setShowCalendar] = useState(false);

  const dates = ['5/22', '5/23', '5/24', '5/25', '5/26', '5/27'];
  const games = [
    {id: '1', team1: 'Team1', team2: 'Team2', time: '17:00'},
    {id: '2', team3: 'Team3', team4: 'Team4', time: '17:00'},
    {id: '3', team5: 'Team5', team6: 'Team6', time: '17:00'},
  ];

  const renderDateItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.dateItem,
        selectedDate.includes(item) && styles.selectedDateItem,
      ]}
      onPress={() => setSelectedDate(`2024.${item}`)}>
      <Text
        style={[
          styles.dateText,
          selectedDate.includes(item) && styles.selectedDateText,
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderGameItem = ({item}) => (
    <View style={styles.gameItem}>
      <View style={styles.teamContainer}>
        <Image
          source={require('@/assets/images/baseball.png')}
          style={styles.teamLogo}
        />
        <Text style={styles.vsText}>VS</Text>
        <Image
          source={require('@/assets/images/baseball.png')}
          style={styles.teamLogo}
        />
      </View>
      <Text style={styles.gameTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>경기 일정 보기</Text>
        <TouchableOpacity onPress={() => setShowCalendar(true)}>
          <Text style={styles.dateTitle}>{selectedDate} ▼</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dateListContainer}>
        <FlatList
          horizontal
          data={dates}
          renderItem={renderDateItem}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          style={styles.dateList}
        />
      </View>

      <FlatList
        data={games}
        renderItem={renderGameItem}
        keyExtractor={item => item.id}
        style={styles.gameList}
      />

      <Modal visible={showCalendar} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={day => {
              setSelectedDate(day.dateString.replace(/-/g, '.'));
              setShowCalendar(false);
            }}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowCalendar(false)}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  dateListContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
  },
  dateList: {
    paddingHorizontal: 10,
  },
  dateItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  selectedDateItem: {
    backgroundColor: '#FF6B6B',
  },
  dateText: {
    fontSize: 16,
  },
  selectedDateText: {
    color: '#fff',
  },
  gameList: {
    flex: 1,
  },
  gameItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamLogo: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  vsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameTime: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    backgroundColor: '#FF6B6B',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default GameSchedule;
