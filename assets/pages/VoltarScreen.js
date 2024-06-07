import * as React from 'react'
import { View, Text, StyleSheet, Button,Image,handleHomeClick,TouchableOpacity,handleForgotButton} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function VoltarScreen() {
  const navigation = useNavigation('Voltar')


  const handleHomeClick = () => {
    navigation.goBack()
  }
  
  const handleAboutClick = () => {
    navigation.navigate('Pizzas')
  }

  return (
    <View style={styles.container}>
      <View style={styles.aditionalcontainer}>
        <Image style={styles.logo} source={require('../img/logodivina.png')}/>
        <Text style={styles.escolher}> Escolha já a sua pizza.</Text>
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.Pizzas} onPress={handleForgotButton}>
            <Text style={styles.Pizzasbutton} onPress={handleAboutClick}>Pizzas</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.aditionalspace}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#e28000',
    fontWeight:'bold',
  },
  aditionalcontainer:{
    flex:1,
    width: '100%',
    alignItems: 'center',
  },
  escolher:{
    fontWeight:'bold', 
    justifyContent: 'center',
  },
  logo:{
   width: 160,
   height: 164,
  },
  aditionals:{
    marginTop: '1%',
    width: '90%',
  },
  Pizzasbutton:{
    backgroundColor: '#fE8330',
    padding: 10,
    borderRadius: 5,
    fontWeight:'bold',
    paddingLeft: '44%',
    paddingRight: '44%',
  },
  aditionalspace:{
    width: '100%',
  },
})