import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Footer from '../components/Footer'; // Assuming Footer is a custom component
import Event from '../components/Event'; // Assuming Event is a custom component

const Logo = 'https://example.com/logo.svg';

const BookAppointment = () => {
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
        <SvgXml xml={Logo} width={80} height={80} />
        <Text style={styles.title}>Dr. Dr. Olivia Turner, M.D.</Text>
        <Text style={styles.subtitle}>General Check Up</Text>
        <Text style={styles.subtitle}>May 06, 2024  Mon 8AM -3PM</Text>

        <Text style={styles.title}>Booked Successfully</Text>
        <Text style={styles.title}>Wed, 10:00 AM </Text>

        <Text style={styles.title}>Booking for: Another Person</Text>
        <Text style={styles.title}>Full Name: Jane Doe</Text>
        <Text style={styles.title}>Age: 30</Text>
        <Text style={styles.title}>Gender: Female</Text>

        {/* Event details */}
        <Event event={barangayEvent} />

        {/* Footer */}
        <Footer />
      </ScrollView>
    </View>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Adds space at the bottom if content is short
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default BookAppointment;
