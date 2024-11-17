import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import UserTable from './UserTable';

const Dashboard = ({ navigation, route }) => {

  const [userArray, setUserArray] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://192.168.1.37:3000/check-login', {
          method: 'GET',
          credentials: 'include',
        });
  
        const data = await response.json();

        if (data.success && data.userId) {
          if (!isLoggedIn) { 
            setIsLoggedIn(true);
            setLoggedInUserId(data.userId);
          }
        } else {
          if (isLoggedIn) {
            setIsLoggedIn(false);
            setLoggedInUserId(null);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
  
    checkLoginStatus();
  }, [isLoggedIn]);
  
  useEffect(() => {
    if (route.params?.newUser) {
      setUserArray((prevArray) => [...prevArray, route.params.newUser]);
    }
  }, [route.params?.newUser]);

  useEffect(() => {
    if (route.params?.updatedUser) {
      const { updatedUser, index } = route.params;
      setUserArray((prevArray) =>
        prevArray.map((user, i) => (i === index ? updatedUser : user))
      );
    }
  }, [route.params?.updatedUser]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://192.168.1.37:3000/users', {
          method: 'GET',
          credentials: 'include',
        });

        const data = await response.json();
        console.log(data);
        if (data.success) {
          setUserArray(data.users);
        } else {
          console.error('Failed to fetch users:', data.message);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    if (isLoggedIn) {
      fetchUsers();
    }
  }, [isLoggedIn]);

  const handleDelete = async (index) => {
    try {
      const userId = userArray[index]._id;
      const response = await fetch(`http://192.168.1.37:3000/delete-user/${userId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const data = await response.json();
      if (data.success) {
        setUserArray((prevArray) => prevArray.filter((_, i) => i !== index));
      } else {
        console.error('Failed to delete user:', data.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  const handleUpdate = (index) => {
    navigation.navigate('Update', { user: userArray[index], index });
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://192.168.1.37:3000/logout', {
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

  const handleProfile = () => {
    
    if (loggedInUserId) {
      navigation.navigate('Profile', { id: loggedInUserId });
    } else {
      Alert.alert('Error', 'User ID is missing.');
    }
  };
  
  console.log("Logged in user ID:", loggedInUserId);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
        <Text style={styles.text}>Welcome to the Dashboard!</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {userArray.length > 0 && (
          <View>
            <Text style={styles.label}>Users:</Text>
            {userArray.map((user, index) => (
              <UserTable
                key={index}
                keyVal={index}
                val={user}
                deletedMethod={() => handleDelete(index)}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.link}>Logout</Text>
        </TouchableOpacity>
        {isLoggedIn && (
          <TouchableOpacity onPress={handleProfile}>
            <Text style={styles.link}>Profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Dashboard;

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
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
  },
  user: {
    fontSize: 14,
  },
  update: {
    color: 'orange',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  delete: {
    color: 'red',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
