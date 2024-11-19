import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/Logo.svg';

const Header = ({ user }) => {

  const [formData, setFormData] = useState({ search: '' });
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
        <View style={styles.row}>
            <View style={styles.profileContainer}>
                <View style={styles.logoContainer}>
                <SvgXml xml={Logo} width={80} height={80} />
                </View>
                <Text style={styles.title}>Hi, Welcome Back</Text>
                <Text style={styles.subtitle}>{user.name}</Text>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                <Icon name="bell" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Icon name="cog" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.searchRow}>
            <TextInput
            placeholder="Search"
            value={formData.search}
            onChangeText={(value) => handleInputChange('search', value)}
            style={styles.input}
            />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  profileContainer: {
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 8,
  },
  searchRow: {
    flex: 1,
    marginLeft: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
});

export default Header;
