import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, TextInput, Text } from 'react-native';
import { Button } from 'react-native-paper'; // Assuming you're using react-native-paper for Button
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

const screenWidth = Dimensions.get('window').width;

const Appointment = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
  });

  // Handle input changes for form fields
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleGenderSelection = (gender) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const addUser = () => {
    // Handle the booking logic, e.g., form submission to API
    console.log(formData);
    navigation.navigate('BookAppointment');
    // You can navigate to a confirmation page or show an alert
  };

  const chartDataIllness = {
    labels: ['Cough', 'Flu', 'Diarrhea', 'Diabetes', 'Highblood'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99],
      },
    ],
  };

  const chartDataMedicine = {
    labels: ['Lozartan', 'Biogesic', 'Paracetamol'],
    datasets: [
      {
        data: [20, 45, 28],
      },
    ],
  };

  const dates = ['9 MON', '10 TUE', '11 WED', '12 THU', '13 FRI', '14 SAT'];
  const barangayEvent = [
    'WHAT:  General Check Up',
    'WHEN: May 06, 2024 Mon 8AM - 3PM',
    'WHERE: BHW Center',
    'Doc In-Charge: Dr. Robert Sanchez MD',
    'BHW In-Charge: Ms. Charlene Virtucio',
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Header />

        <Calendar dates={dates} />

        <Event event={barangayEvent} />

        <Chart title="Common Illness" data={chartDataIllness} />
        <Chart title="In Demand Medicine" data={chartDataMedicine} />

        <Text style={styles.orText}>Patient Details</Text>
        <View style={styles.row}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={() => handleGenderSelection('Yourself')}>
              <Text style={styles.orText}>Yourself</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleGenderSelection('Another person')}>
              <Text style={styles.orText}>Another person</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          label="Full Name"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
          keyboardType="default"
          style={styles.input}
        />
        <TextInput
          label="Age"
          value={formData.age}
          onChangeText={(value) => handleInputChange('age', value)}
          keyboardType="number-pad"
          style={styles.input}
        />

        <Text style={styles.orText}>Gender</Text>
        <View style={styles.row}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={() => handleGenderSelection('Male')}>
              <Text style={styles.orText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleGenderSelection('Female')}>
              <Text style={styles.orText}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleGenderSelection('Other')}>
              <Text style={styles.orText}>Other</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button mode="contained" onPress={addUser} style={styles.signupButton}>
          Book Appointment
        </Button>
        
        <Footer />
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
  },
  orText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  button: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    width: '45%',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 4,
  },
  signupButton: {
    marginTop: 20,
    backgroundColor: '#4F46E5',
  },
});

export default Appointment;
