import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput, Button, IconButton, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle submit button press
  const addUser = () => {
    if (formData.email && formData.password) {
      // Perform login logic (e.g., API call)
      console.log('Logged in:', formData);

      // Navigate to Main screen
      navigation.navigate('Main');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View className="flex-1 p-5">
      <View className="mb-5">
        <Text className="text-3xl font-bold">Welcome</Text>
        <Text className="text-sm text-gray-500 mt-1">
          Ai-Timan is a comprehensive application that could benefit both healthcare providers and patients in barangay health centers.
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TextInput
          label="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          className="mb-4"
        />

        <TextInput
          label="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry={!showPassword}
          className="mb-4"
          right={<TextInput.Icon name={showPassword ? 'eye' : 'eye-off'} onPress={() => setShowPassword(!showPassword)} />}
        />

        <TouchableRipple onPress={() => navigation.navigate('ForgetPassword')}>
          <Text className="text-right text-blue-500 text-sm">Forget Password?</Text>
        </TouchableRipple>

        <Button mode="contained" onPress={addUser} className="mb-4">
          Submit
        </Button>

        <Text className="text-center my-3">or sign up with</Text>

        <View className="flex-row justify-around mb-5">
          <IconButton
            icon="google"
            size={30}
            color="white"
            className="bg-blue-500"
            onPress={() => navigation.navigate('Register')}
          />
          <IconButton
            icon="facebook"
            size={30}
            color="white"
            className="bg-blue-700"
            onPress={() => navigation.navigate('Register')}
          />
          <IconButton
            icon="fingerprint"
            size={30}
            color="white"
            className="bg-gray-600"
            onPress={() => navigation.navigate('Register')}
          />
        </View>

        <TouchableRipple onPress={() => navigation.navigate('Register')}>
          <Text className="text-center text-blue-500">Don’t have an account? Sign Up</Text>
        </TouchableRipple>
      </ScrollView>
    </View>
  );
};

export default Login;
