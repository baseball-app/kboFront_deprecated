import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Calendar, DateData, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
};
LocaleConfig.defaultLocale = 'kr';

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const markedDates: MarkedDates = {
    '2024-05-16': {
      customStyles: {
        container: {backgroundColor: '#ffebee'},
        text: {color: '#b71c1c'},
      },
      dots: [
        {key: 'birthday', color: 'blue'},
        {key: 'meeting', color: 'red'},
      ],
    },
    '2024-05-20': {
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

  const renderWeekDays = () => {
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    return (
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderWeeklyView = () => {
    const startDate = new Date(selectedDate);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    const weekDates = Array.from({length: 7}, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });

    return (
      <View style={styles.weeklyViewContainer}>
        {weekDates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.weeklyDate,
              date.toDateString() === selectedDate.toDateString() &&
                styles.selectedWeeklyDate,
            ]}
            onPress={() => setSelectedDate(date)}>
            <Text style={styles.weeklyDateText}>{date.getDate()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const changeMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentYear, currentMonth - 1);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentMonth(newDate.getMonth() + 1);
    setCurrentYear(newDate.getFullYear());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text
          style={
            styles.headerText
          }>{`${currentYear}년 ${currentMonth}월`}</Text>
        <TouchableOpacity onPress={() => changeMonth('next')}>
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {renderWeekDays()}
      {renderWeeklyView()}
      <Calendar
        current={`${currentYear}-${String(currentMonth).padStart(2, '0')}-01`}
        markedDates={markedDates}
        markingType={'custom'}
        dayComponent={({date}) => renderDay(date)}
        onDayPress={day => setSelectedDate(new Date(day.timestamp))}
        hideArrows={true}
        hideExtraDays={true}
        firstDay={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  weekDay: {
    width: 30,
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 12,
    color: '#333',
  },
  weeklyViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  weeklyDate: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedWeeklyDate: {
    backgroundColor: '#FF6B6B',
  },
  weeklyDateText: {
    fontSize: 14,
  },
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
