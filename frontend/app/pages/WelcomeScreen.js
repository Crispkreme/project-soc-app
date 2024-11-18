import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgUri from 'react-native-svg';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-white">
            <ScrollView 
                contentContainerStyle="flex-grow items-center justify-center"
                showsVerticalScrollIndicator={false}
            >
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

            <View className="flex-1 justify-end w-full">
                <View className="w-full px-6 mb-2">
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Login')} 
                        className="bg-blue-500 rounded-full px-6 py-3 w-full"
                    >
                        <Text className="text-white font-medium text-center">Login</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-full px-6 mb-6">
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Register')} 
                        className="bg-green-500 rounded-full px-6 py-3 w-full"
                    >
                        <Text className="text-white font-medium text-center">Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default WelcomeScreen;
