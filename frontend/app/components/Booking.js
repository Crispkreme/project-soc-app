import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booking = () => {
  return (
    <View style={styles.calendarEventRow}>
      <View style={styles.calendarContainer}>
        {['9 MON', '10 TUE', '11 WED', '12 THU', '13 FRI', '14 SAT'].map(
          (date, index) => {
            const [calendarDate, calendarDay] = date.split(' ');
            return (
              <View key={index} style={styles.calendarItem}>
                <Text style={styles.calendarDate}>{calendarDate}</Text>
                <Text style={styles.calendarDay}>{calendarDay}</Text>
              </View>
            );
          }
        )}
      </View>

      <View style={styles.eventWrapper}>
        <View style={styles.eventContainer}>
          <Text style={styles.eventText}>Dental and General Check Up</Text>
          <Text style={styles.eventText}>Dr. Sam Gonzales MD</Text>
          <Text style={styles.eventText}>April 29, 2024 Mon 8AM - 3PM</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarEventRow: {
    flexDirection: 'column',
    padding: 16,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  calendarItem: {
    alignItems: 'center',
    flex: 1,
  },
  calendarDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarDay: {
    fontSize: 14,
    color: '#6B7280',
  },
  eventWrapper: {
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  eventContainer: {
    padding: 12,
  },
  eventText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default Booking;
