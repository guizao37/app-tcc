import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { auth, FirebaseAuthTypes } from '../firebase'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard'
import Finances from '../screens/Finances'
import Planning from '../screens/Planning'
import Settings from '../screens/Settings'

const HomeScreen = () => {

  const Tab = createBottomTabNavigator();
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        right: 20,
        left: 20,
        borderRadius: 15,
        height: 50,
        paddingTop: 30,
      }
    }}>

        <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: () => (<Image source={require("../assets/dashboard.png")} style={{width: 35, height: 35}} />),
        }}
        />

        <Tab.Screen
        name='Finances'
        component={Finances}
        options={{
          tabBarIcon: () => (<Image source={require("../assets/finances.png")} style={{width: 35, height: 35}} />)
        }}
        />


        <Tab.Screen
        name='Planning'
        component={Planning}
        options={{
          tabBarIcon: () => (<Image source={require("../assets/planning.png")} style={{width: 35, height: 35}} />)
        }}
        />

        <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: () => (<Image source={require("../assets/setting.png")} style={{width: 35, height: 35}}  />)
      }}
      />

    </Tab.Navigator>
  )
}

export default HomeScreen
