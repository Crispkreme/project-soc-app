import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For icons

const InfoModal = ({ visible, message, type, onClose }) => {
  let iconName;
  let messageStyle;

  if (type === 'success') {
    iconName = 'check-circle';
    messageStyle = styles.successMessage;
  } else if (type === 'error') {
    iconName = 'close-circle';
    messageStyle = styles.errorMessage;
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.dialogContainer}>
          <MaterialCommunityIcons name={iconName} size={50} color={type === 'success' ? 'green' : 'red'} />
          <Text style={[styles.message, messageStyle]}>{message}</Text>
          <Button title="OK" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 250,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  successMessage: {
    color: 'green',
  },
  errorMessage: {
    color: 'red',
  },
});

export default InfoModal;
