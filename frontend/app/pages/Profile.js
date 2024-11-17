import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const Profile = ({ navigation, route }) => {

  const { id } = route.params;
  
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const userId = route.params?.id;
        const response = await fetch(`http://192.168.1.37:3000/profile/${userId}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();

        if (data.success && data.user) {
          setUserProfile(data.user);
        } else {
          Alert.alert('Error', data.message || 'Failed to fetch profile');
          navigation.replace('Login');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        Alert.alert('Error', 'An error occurred while fetching the profile.');
        navigation.replace('Login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigation, route.params?.id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userProfile ? (
        <>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{userProfile.name}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userProfile.email}</Text>
        </>
      ) : (
        <Text style={styles.error}>Failed to load profile</Text>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});
