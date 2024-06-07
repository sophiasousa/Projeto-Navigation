import { useState } from 'react'
import { View, Text, StyleSheet,TouchableOpacity,handleForgotButton,TextInput,ScrollView, handleHomeClick } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from './styles'

export default function ConfirmarScreen() {
  const navigation = useNavigation('Confirmar pedido')


  const handleHomeClick = () => {
    navigation.goBack()
  }

  const [nomeField, setnomeField] = useState('')
  const [nomedaruaField, setnomedaruaField] = useState('')
  const [numerodacasaField, setnumerodacasaPage] = useState('') //Tela de login

  // Função do Botão confirmar
  const handleLoginButton = () => {
    if (nomeField != '' && nomedaruaField != '' && numerodacasaField != '') {
      alert('SEU PEDIDO FOI CONCLUÍDO!')
      alert(`Senhor(a) ${nomeField} Rua ${nomedaruaField} Numero da Casa ${numerodacasaField}`)
    } else {
      alert('Informações Insuficientes');
    }
    
  } 

  const handleBackButton = () => {
    setLoginPage('1')
    setForgotPage('0')
    setSignUpPage('0')
  } 

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackButton}>
        </TouchableOpacity>

        <Text style={styles.confirmeseupedido}>Confirme agora seu pedido!</Text>
        <Text style={styles.dados}>Digite seus dados abaixo.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Nome do Comprador:</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Nome Completo'
            placeholderTextColor='#d1d1d1'
            value={nomeField}
            onChangeText={t => setnomeField(t)}
            autoCapitalize='none'
            keyboardType='nome-address'
          />
        </View>

         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Rua:</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Nome da Rua:'
            placeholderTextColor='#d1d1d1'
            value={nomedaruaField}
            onChangeText={t => setnomedaruaField(t)}
            autoCapitalize='none'
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Numero da Casa:</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite o número da casa' 
            placeholderTextColor='#d1d1d1'
            value={numerodacasaField}
            onChangeText={t => setnumerodacasaPage(t)}
            autoCapitalize='none'
          />
        </View>
        <TouchableOpacity style={styles.buttondoconfirmar} onPress={handleLoginButton}>
          <Text style={styles.buttonTextdoconfirmar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
)}