import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/Logo.svg'; // Replace with your logo path.

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile and Button Group in 1 Row */}
        <View style={styles.row}>
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <View style={styles.logoContainer}>
              <SvgUri width={100} height={100} uri={Logo} />
            </View>
            <Text style={styles.title}>Hi, Welcome Back</Text>
            <Text style={styles.subtitle}>John Doe</Text>
          </View>

          {/* Button Group Section */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Bell')}
              style={[styles.button, styles.bellButton]}
            >
              <Text style={styles.buttonText}>Bell</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={[styles.button, styles.settingsButton]}
            >
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row', // Align profile and button group horizontally
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically center both sections
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginRight: 16, // Adds space between profile and button group
  },
  buttonGroup: {
    flexDirection: 'row', // Make buttons align horizontally in a row
    alignItems: 'center',
  },
  logoContainer: {
    width: 100, // Smaller width for the profile picture
    height: 100, // Smaller height for the profile picture
    borderRadius: 50, // Makes the image rounded
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Optional background if the logo has transparency
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    width: 60, // Width and height should be the same for a circular button
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, // Makes the button circular
    marginHorizontal: 10, // Adds space between buttons
  },
  bellButton: {
    backgroundColor: '#4F46E5', // Indigo color
  },
  settingsButton: {
    backgroundColor: '#10B981', // Green color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default Main;
