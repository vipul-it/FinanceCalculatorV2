import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screen/SplashScreen';
import Dashboard from '../screen/Dashboard';
import Emicalculator from '../screen/Emicalculator';
import OtherCalculator from '../screen/OtherCalculator';
import PrePayments from '../screen/PrePayments';
import History from '../screen/History';

 const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Emicalculator"
          component={Emicalculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtherCalculator"
          component={OtherCalculator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PrePayments"
          component={PrePayments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};

export default RootNavigator;
