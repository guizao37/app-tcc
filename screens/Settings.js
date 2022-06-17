import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { auth, FirebaseAuthTypes } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native-web';

export default function Settings() {

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
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text>Olá, {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}
