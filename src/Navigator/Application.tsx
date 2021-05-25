import React from 'react';

import {useTheme} from '@/Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, SafeAreaView} from 'react-native';
import {Calendar, Slot} from '@/Containers';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const {Layout, NavigationTheme} = useTheme();
  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer theme={NavigationTheme}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Slot" component={Slot} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
