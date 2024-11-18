import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ConfirmPassword = () => {
  const [formData, setFormData] = useState({ password: '', confirm_password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (formData.password === formData.confirm_password) {
      navigation.navigate('Main');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Confirm Password</Text>
        <Text style={styles.subtitle}>
          Please confirm your password to complete the registration process.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          label="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry={!showPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              name={showPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

        <TextInput
          label="Confirm Password"
          value={formData.confirm_password}
          onChangeText={(value) => handleInputChange('confirm_password', value)}
          secureTextEntry={!showConfirmPassword}
          style={styles.input}
          right={
            <TextInput.Icon
              name={showConfirmPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
          Sign Up
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  input: {
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 16,
  },
});

export default ConfirmPassword;
