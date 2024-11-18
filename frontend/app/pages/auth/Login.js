import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, IconButton, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const addUser = () => {
    if (formData.email && formData.password) {
      console.log('Logged in:', formData);
      navigation.navigate('Main');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Ai-Timan is a comprehensive application that could benefit both healthcare providers
          and patients in barangay health centers.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          label="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          style={styles.input}
        />

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

        <TouchableRipple onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPassword}>Forget Password?</Text>
        </TouchableRipple>

        <Button mode="contained" onPress={addUser} style={styles.submitButton}>
          Submit
        </Button>

        <Text style={styles.orText}>or sign up with</Text>

        <View style={styles.socialButtonsContainer}>
          <IconButton
            icon="google"
            size={30}
            color="white"
            style={[styles.socialButton, { backgroundColor: '#4285F4' }]}
          />
          <IconButton
            icon="facebook"
            size={30}
            color="white"
            style={[styles.socialButton, { backgroundColor: '#3B5998' }]}
          />
          <IconButton
            icon="fingerprint"
            size={30}
            color="white"
            style={[styles.socialButton, { backgroundColor: '#6B7280' }]}
          />
        </View>

        <TouchableRipple onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Don’t have an account? Sign Up</Text>
        </TouchableRipple>
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
  forgotPassword: {
    textAlign: 'right',
    color: '#3B82F6',
    fontSize: 14,
    marginBottom: 16,
  },
  submitButton: {
    marginBottom: 16,
  },
  orText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  socialButton: {
    padding: 10,
    borderRadius: 30,
  },
  registerText: {
    textAlign: 'center',
    color: '#3B82F6',
    fontSize: 16,
  },
});

export default Login;
