import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button, IconButton, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', birthday: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle submit button press
  const addUser = () => {
    // Add user logic here
    // After user data is added, navigate to ConfirmPassword screen
    navigation.navigate('ConfirmPassword');
  };

  // Handle date change
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  // Open the date picker
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View className='flex-1 p-5'>
      <View className='mb-5'>
        <Text className='text-3xl font-bold'>Welcome</Text>
        <Text className='text-sm text-gray-500 mt-1'>
          Ai-Timan is a comprehensive application that could benefit both healthcare providers and patients in barangay health centers.
        </Text>
      </View>

      <ScrollView contentContainerStyle={tw('flex-grow')}>
        <TextInput
          label="Full Name"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
          keyboardType="default"
          className='mb-4'
        />
        <TextInput
          label="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          className='mb-4'
        />
        <TextInput
          label="Phone Number"
          value={formData.phone}
          onChangeText={(value) => handleInputChange('phone', value)}
          keyboardType="phone-pad"
          className='mb-4'
        />
        <Text className='text-lg mb-4'>Selected Date: {date.toLocaleDateString()}</Text>
        <TouchableOpacity
          onPress={showDatepicker}
          className='bg-blue-500 p-4 rounded-md'
        >
          <Text className='text-white text-center'>Select Date</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <Text className='text-center my-3'>
          By continuing, you agree to{' '}
          <TouchableRipple onPress={() => navigation.navigate('Terms')}>
            <Text className='text-blue-500'>Terms of Use</Text>
          </TouchableRipple>{' '}
          and{' '}
          <TouchableRipple onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text className='text-blue-500'>Privacy Policy</Text>
          </TouchableRipple>.
        </Text>

        <Button mode="contained" onPress={addUser} className='mb-5'>
          Sign Up
        </Button>

        <Text className='text-center my-3'>or sign up with</Text>

        <View className='flex-row justify-around mb-5'>
          <IconButton
            icon="google"
            size={30}
            color="white"
            className='bg-blue-500'
            onPress={() => navigation.navigate('Register')}
          />
          <IconButton
            icon="facebook"
            size={30}
            color="white"
            className='bg-blue-700'
            onPress={() => navigation.navigate('Register')}
          />
          <IconButton
            icon="fingerprint"
            size={30}
            color="white"
            className='bg-gray-600'
            onPress={() => navigation.navigate('Register')}
          />
        </View>

        <TouchableRipple onPress={() => navigation.navigate('Login')}>
          <Text className='text-center text-blue-500'>
            Already have an account? Log in
          </Text>
        </TouchableRipple>
      </ScrollView>
    </View>
  );
};

export default Register;
