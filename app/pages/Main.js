import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import UserTable from './UserTable';

const Main = () => {
    const [userArray, setUserArray] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (key, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const addUser = () => {
        if (!formData.name || !formData.email || !formData.password) {
            alert('Please fill all required fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        setUserArray([...userArray, { ...formData }]);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        alert('User added successfully');
    };

    const deleteUser = (key) => {
        const updatedArray = userArray.filter((_, index) => index !== key);
        setUserArray(updatedArray);
    };

    const users = userArray.map((val, key) => (
        <UserTable
            key={index}
            keyVal={index}
            val={{ id: 1, name: 'John Doe', username: 'johndoe' }}
            deletedMethod={() => handleDelete(index)}
        />
    ));

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChangeText={(value) => handleInputChange('name', value)}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                    secureTextEntry
                />
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleInputChange('confirmPassword', value)}
                    secureTextEntry
                />
                <Button title="Submit" onPress={addUser} />
                {users}
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
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
        backgroundColor: '#6200ea',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    scrollContainer: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    footer: {
        padding: 20,
        backgroundColor: '#6200ea',
    },
    footerText: {
        color: '#fff',
        textAlign: 'center',
    },
});
