import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import InfoModal from '../../components/InfoModal';

const ConfirmPassword = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const initialFormData = route.params?.formData || {};

  const [formData, setFormData] = useState({ ...initialFormData, password: '', confirm_password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogType, setDialogType] = useState('success');

  const closeDialog = () => {
    setDialogVisible(false);
    if (dialogType === 'success') {
      navigation.navigate('Login');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    if (formData.password === formData.confirm_password) {
      try {
        const response = await axios.post('http://10.0.120.55:3000/register', {
          name: formData.name,
          age: formData.age,
          phone: formData.phone,
          birthday: formData.birthday,
          password: formData.password,
          email: formData.email,
        });

        setDialogMessage(response.data.message || 'User created successfully!');
        setDialogType('success');
        setDialogVisible(true);
      } catch (error) {
        setDialogMessage('Failed to add user. Please try again.');
        setDialogType('error');
        setDialogVisible(true);
      }
    } else {
      setDialogMessage('Passwords do not match!');
      setDialogType('error');
      setDialogVisible(true);
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

      <InfoModal
        visible={isDialogVisible}
        message={dialogMessage}
        type={dialogType}
        onClose={closeDialog}
      />
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
