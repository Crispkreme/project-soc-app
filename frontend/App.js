import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './app/pages/Main';
import FlashPage from './app/pages/FlashPage';
import WelcomeScreen from './app/pages/WelcomeScreen';

import "./globals.css";

import Login from './app/pages/auth/Login';
import Register from './app/pages/auth/Register';
import ConfirmPassword from './app/pages/auth/ConfirmPassword';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="FlashPage" component={FlashPage} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
