import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calendar = ({ dates }) => {
  return (
    <View style={styles.calendarContainer}>
      {dates.map((date, index) => {
        const [calendarDate, calendarDay] = date.split(' ');
        return (
          <View key={index} style={styles.calendarItem}>
            <Text style={styles.calendarDate}>{calendarDate}</Text>
            <Text style={styles.calendarDay}>{calendarDay}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  calendarItem: {
    alignItems: 'center',
  },
  calendarDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarDay: {
    fontSize: 12,
    color: '#6B7280',
  },
});

export default Calendar;
