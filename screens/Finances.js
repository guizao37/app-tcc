import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './styles';

export default function Finances() {
  const [inList, setInList] = useState([])
  const [inDesc, setInDesc] = useState("")
  const [inValue, setInValue] = useState()

  function addIn () {
    setInList((arr) => [...arr, {
      id: new Date().getTime(), 
      descricao: inDesc,
      valor: inValue
      }]
      )
  }

  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>

      <TextInput 
      style={styles.input}
      value={inValue}
      placeholder=" Valor "
      onChangeText={setInValue}
      keyboardType="numeric"/>

      <TextInput 
      style={styles.input}
      value={inDesc}
      placeholder=" Descrição "
      onChangeText={setInDesc}/>

      <TouchableOpacity style={styles.button} onPress={() => addIn()}>
        <Text>Inserir entrada</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
      <FlatList data={inList} keyExtractor={(item) => {item.id}} renderItem={({item})=>{
                return (
                    <Text>{item.valor}</Text>
                )
            }}/>
     </View>
     </View>
     </View>
  );
}
