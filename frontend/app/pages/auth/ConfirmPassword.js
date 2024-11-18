import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ConfirmPassword = () => {
  const [formData, setFormData] = useState({ password: '', confirm_password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle submit button press
  const handleSubmit = () => {
    if (formData.password === formData.confirm_password) {
      navigation.navigate('Main');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <View className="flex-1 p-5">
      <View className="mb-5">
        <Text className="text-3xl font-bold">Confirm Password</Text>
        <Text className="text-sm text-gray-500 mt-1">
          Please confirm your password to complete the registration process.
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TextInput
          label="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry={!showPassword}
          className="mb-4"
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
          className="mb-4"
          right={
            <TextInput.Icon
              name={showConfirmPassword ? 'eye' : 'eye-off'}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
        />

        <Button mode="contained" onPress={handleSubmit} className="mb-5">
          Sign Up
        </Button>
      </ScrollView>
    </View>
  );
};

export default ConfirmPassword;
