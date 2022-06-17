import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    initialRouteName="Dashboard">
        <Tab.Screen
        name='Dashboard'
        component={Dashboard}/>
        <Tab.Screen
        name='Finances'
        component={Finances}/>
        <Tab.Screen
        name='Planning'
        component={Planning}/>
        <Tab.Screen
        name='Settings'
        component={Settings}/>
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
