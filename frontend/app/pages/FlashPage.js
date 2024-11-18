import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgUri from 'react-native-svg';

const FlashPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 5000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View className="flex-1 bg-white items-center justify-center">

      <ScrollView contentContainerStyle="flex-grow items-center justify-center">
        <SvgUri
          width={150}
          height={150}
          uri={require('../../assets/Logo.svg')}
          className="mb-5"
        />
        <Text className="text-lg font-medium text-gray-600 text-center">Ai-Timan:</Text>
        <Text className="text-lg font-medium text-gray-600 text-center">
          Streamlining Outpatient Care
        </Text>
      </ScrollView>
      
    </View>
  );
};

export default FlashPage;
