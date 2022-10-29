import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homescreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import SettingsScreen from './screens/SettingsScreen';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNavogator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerBackTitleVisible: false, }}>
      <Stack.Screen name="tab" component={TabNavogator} options={{ headerShown: false }} />
      <Stack.Screen name="New Tweet" component={NewTweet} options={{ title: '' }} />
    </Stack.Navigator>
  );
}

const TabNavogator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: true, }}>
      <Tab.Screen name="Home1" component={Homescreen} options=
      {{ tabBarIcon: ({ color, size}) => (
      <Ionicons name="home" size={size} color={color} />
      ),}} />
      <Tab.Screen name="Settings2" component={SettingsScreen} options=
      {{ tabBarIcon: ({ color, size}) => (
      <Ionicons name="settings" size={size} color={color} />
      ),}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true, }} initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeStackNavogator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>

    </NavigationContainer>

  );
}


