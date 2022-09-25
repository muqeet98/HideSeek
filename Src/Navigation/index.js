import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HideSeek from '../Screens/HideSeek/HideSeek';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';

// const Stack = createStackNavigator();

const Stack = createNativeStackNavigator();

function MainNav(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="HideSeek" component={HideSeek} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
