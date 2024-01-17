import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '@/Containers/Home/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { PlaceholderScreen } from '@/Containers/PlaceholderScreen'

const Tab = createBottomTabNavigator()

export const MainBottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbox-outline' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Search'
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name='Chats'
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='heart-outline' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Purple Account'
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
