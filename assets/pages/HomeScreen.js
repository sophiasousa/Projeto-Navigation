import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput,TouchableOpacity,Image,handleHomeClick} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')

  const handleAboutClick = () => {
    navigation.navigate('Voltar')
  }

  return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/logodivina.png')}/>
      <Text style={styles.inputText}>Deseja fazer seu pedido?</Text>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={t=>setName(t)}/>
      <TouchableOpacity style={styles.buttondeconfirmar} >
        <Text style={styles.buttonTextdeconfirmar} onPress={handleAboutClick}>confirmar</Text>
      </TouchableOpacity>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e28000'

  },
  inputText: {
    fontWeight:'bold',
  },

  input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    fontWeight:'bold',
    borderRadius: 6,
  },
   buttondeconfirmar: {
    backgroundColor: '#fE8330',
    width: '90%',
    padding: 10,
    borderRadius: 5,
  },
  buttonTextdeconfirmar: {
    alignSelf: 'center',
    paddingLeft: '45%',
    paddingRight: '45%',
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold'
  },
  logo:{
   width: 160,
   height: 164,
  }
})