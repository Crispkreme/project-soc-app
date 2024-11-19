import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

const screenWidth = Dimensions.get('window').width;

const Main = () => {
  const navigation = useNavigation();

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
  const doctorSchedule = [
    'Dental and General Check Up',
    'Dr. Sam Gonzales MD',
    'April 29, 2024 Mon 8AM - 3PM',
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Header />

        <Calendar dates={dates} />

        <Event event={doctorSchedule} />

        <Chart title="Common Illness" data={chartDataIllness} />
        <Chart title="In Demand Medicine" data={chartDataMedicine} />

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
  chartContainer: {
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  chart: {
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  footerItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: '#4F46E5',
  },
});

export default Main;
