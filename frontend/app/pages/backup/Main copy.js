import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Main = ({ navigation, route }) => {
  const [userArray, setUserArray] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (route.params?.newUser) {
      setUserArray((prevArray) => [...prevArray, route.params.newUser]);
    }
  }, [route.params?.newUser]);

  useFocusEffect(
    React.useCallback(() => {
      if (!isLoggedIn) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Register' }],
        });
      }
    }, [isLoggedIn])
  );

  const handleLogout = async () => {
    try {
      const response = await fetch('http://192.168.127.145:3000/logout', {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(false);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Logout failed:', error);
      alert('An error occurred while logging out.');
    }
  };  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      <View style={styles.footer}>
        {isLoggedIn ? (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.link}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
