import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './app/pages/Main';
import Appointment from './app/pages/Appointment';
import BookAppointment from './app/pages/BookAppointment';
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
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
                <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{ headerShown: false }}/>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
                <Stack.Screen name="Appointment" component={Appointment} options={{ headerShown: false }}/>
                <Stack.Screen name="BookAppointment" component={BookAppointment} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
