import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Event = ({ event }) => {
  return (
    <View style={styles.eventContainer}>
      {event.map((item, index) => (
        <Text key={index} style={styles.eventText}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  eventText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default Event;
