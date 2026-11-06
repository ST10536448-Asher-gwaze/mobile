import React from 'react';
import { Image, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './src/theme';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import PackagesScreen from './src/screens/PackagesScreen';
import PackageDetailsScreen from './src/screens/PackageDetailsScreen';
import ExperiencesScreen from './src/screens/ExperiencesScreen';
import ExperienceDetailScreen from './src/screens/ExperienceDetailScreen';
import EventsScreen from './src/screens/EventsScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ContactScreen from './src/screens/ContactScreen';
import MoreScreen from './src/screens/MoreScreen';
import BookingScreen from './src/screens/BookingScreen';
import QuoteScreen from './src/screens/QuoteScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.bg,
    card: colors.card,
    text: colors.text,
    primary: colors.green,
    border: colors.purple,
  },
};

const icon = (glyph) => ({ focused }) => (
  <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.6 }}>{glyph}</Text>
);

function HeaderLogo() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Image source={require('./assets/images/logo.png')} style={{ width: 28, height: 28 }} />
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Next Level Gaming</Text>
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerStyle: { backgroundColor: colors.card },
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.purple },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: icon('🏠') }} />
      <Tab.Screen name="Packages" component={PackagesScreen} options={{ tabBarIcon: icon('🎮') }} />
      <Tab.Screen name="Experiences" component={ExperiencesScreen} options={{ tabBarIcon: icon('⭐') }} />
      <Tab.Screen name="Events" component={EventsScreen} options={{ tabBarIcon: icon('🏆') }} />
      <Tab.Screen name="More" component={MoreScreen} options={{ tabBarIcon: icon('☰') }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.card },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: colors.bg },
          }}
        >
          <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
          <Stack.Screen name="PackageDetails" component={PackageDetailsScreen} options={{ title: 'Package Details' }} />
          <Stack.Screen name="ExperienceDetail" component={ExperienceDetailScreen} options={{ title: 'Experience Details' }} />
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Booking' }} />
          <Stack.Screen name="Quote" component={QuoteScreen} options={{ title: 'Request a Quote' }} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Confirmation', headerBackVisible: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
