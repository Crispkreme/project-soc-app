import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, Button, IconButton, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', birthday: '', age: '' });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    const formattedDate = currentDate.toLocaleDateString();
    const age = calculateAge(currentDate);

    setFormData({ ...formData, birthday: formattedDate, age });
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const addUser = () => {
    navigation.navigate('ConfirmPassword', { formData });
    // console.log("Form Data Submitted:", formData);
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
          label="Full Name"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
          keyboardType="default"
          style={styles.input}
        />
        <TextInput
          label="Email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          label="Phone Number"
          value={formData.phone}
          onChangeText={(value) => handleInputChange('phone', value)}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <Text style={styles.dateText}>Selected Date: {formData.birthday}</Text>
        <Text style={styles.ageText}>Age: {formData.age}</Text>
        <TouchableOpacity onPress={showDatepicker} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>Select Date</Text>
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
        <Text style={styles.agreementText}>
          By continuing, you agree to{' '}
          <TouchableRipple onPress={() => navigation.navigate('Terms')}>
            <Text style={styles.linkText}>Terms of Use</Text>
          </TouchableRipple>{' '}
          and{' '}
          <TouchableRipple onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </TouchableRipple>.
        </Text>

        <Button mode="contained" onPress={addUser} style={styles.signupButton}>
          Sign Up
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

        <TouchableRipple onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
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
  dateText: {
    fontSize: 16,
    marginBottom: 8,
  },
  ageText: {
    fontSize: 16,
    marginBottom: 16,
  },
  dateButton: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  dateButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  agreementText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 16,
  },
  linkText: {
    color: '#3B82F6',
  },
  signupButton: {
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
  loginText: {
    textAlign: 'center',
    color: '#3B82F6',
    fontSize: 16,
  },
});

export default Register;
