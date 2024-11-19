import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation(); 
  const handleCalendarClick = () => {
    navigation.navigate('Appointment');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem}>
        <Icon name="home" size={24} color="#4F46E5" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Icon name="user" size={24} color="#4F46E5" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Icon name="envelope" size={24} color="#4F46E5" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={handleCalendarClick}>
        <Icon name="calendar" size={24} color="#4F46E5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  footerItem: {
    alignItems: 'center',
  },
});

export default Footer;
