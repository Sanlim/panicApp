import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabScreen from './MainTabScreen';
import DrugRemindScreen from '../screens/DrugRemindScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ReportScreen from '../screens/ReportScreen';
import SummarySymtompsScreen from '../screens/SummarySymtompsScreen';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen
                    name="MainTab"
                    component={MainTabScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="DrugRemind"
                    component={DrugRemindScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="Appointment"
                    component={AppointmentScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="Report"
                    component={ReportScreen}
                    options={{ header: () => null }}
                />
                <Stack.Screen
                    name="Summary"
                    component={SummarySymtompsScreen}
                    options={{ header: () => null }}
                />
            </Stack.Navigator>
        
    );
}

export default HomeStackScreen;