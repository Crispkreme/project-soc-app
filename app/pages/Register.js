import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';

const Register = ({ navigation, route }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const addUser = () => {
    if (!formData.name || !formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Send data back to Main.js
    const newUser = { name: formData.name, email: formData.email };
    navigation.navigate('Main', { newUser });

    // Clear form data
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    Alert.alert('Success', 'User added successfully');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChangeText={(value) => handleInputChange('confirmPassword', value)}
          secureTextEntry
        />
        <Button title="Submit" onPress={addUser} />
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
