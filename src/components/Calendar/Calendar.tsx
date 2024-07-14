import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface DotData {
  key: string;
  color: string;
}

interface MarkedDate {
  customStyles: {
    container: {
      backgroundColor: string;
    };
    text: {
      color: string;
    };
  };
  dots: DotData[];
}

interface MarkedDates {
  [date: string]: MarkedDate;
}

const CustomCalendar: React.FC = () => {
  // 스티커(아이콘)를 표시할 날짜와 아이콘 정보
  const markedDates: MarkedDates = {
    '2024-07-16': {
      customStyles: {
        container: {backgroundColor: '#ffebee'},
        text: {color: '#b71c1c'},
      },
      dots: [
        {key: 'birthday', color: 'blue'},
        {key: 'meeting', color: 'red'},
      ],
    },
    '2024-07-20': {
      customStyles: {
        container: {backgroundColor: '#e8f5e9'},
        text: {color: '#1b5e20'},
      },
      dots: [{key: 'vacation', color: 'green'}],
    },
  };

  const renderDay = (date: DateData | undefined): React.ReactNode => {
    if (!date) return null;

    const dateString = date.dateString;
    const markedDate = markedDates[dateString];

    if (markedDate) {
      return (
        <View style={styles.dayContainer}>
          <Text>{date.day}</Text>
          <View style={styles.iconContainer}>
            {markedDate.dots.map((dot, index) => (
              <Icon
                key={index}
                name={getIconName(dot.key)}
                size={12}
                color={dot.color}
              />
            ))}
          </View>
        </View>
      );
    }
    return <Text>{date.day}</Text>;
  };

  const getIconName = (key: string): string => {
    switch (key) {
      case 'birthday':
        return 'cake';
      case 'meeting':
        return 'event';
      case 'vacation':
        return 'beach-access';
      default:
        return 'star';
    }
  };

  return (
    <Calendar
      markedDates={markedDates}
      markingType={'custom'}
      dayComponent={({date}) => renderDay(date)}
    />
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 2,
  },
});

export default CustomCalendar;
