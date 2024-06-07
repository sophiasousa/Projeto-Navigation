import * as React from 'react'
import { View, Text, StyleSheet, Button,Image,handleHomeClick,TouchableOpacity,handleForgotButton,handleAboutClick} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'


export default function PizzaScreen() {
  const navigation = useNavigation('Pizzas')


  const handleHomeClick = () => {
    navigation.goBack()
  }

  
  const handleAboutClick = () => {
    navigation.navigate('Confirmar pedido')
    
  }
  return (
   <View style={styles.container}>
      <View style={styles.aditionalcontainer}>
      <View style={styles.aditionals}>
          <TouchableOpacity style={styles.Calabresa} onPress={handleForgotButton}>
          <Text style={styles.calabresabutton} onPress={handleAboutClick}>Calabresa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.carnedosol} onPress={handleForgotButton}>
          <Text style={styles.carnedosolbutton} onPress={handleAboutClick}>Carne do Sol</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.Mussarela} onPress={handleForgotButton}>
            <Text style={styles.mussarelabutton} onPress={handleAboutClick}>Mussarela</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.peperone} onPress={handleForgotButton}>
              <Text style={styles.Peperonebutton} onPress={handleAboutClick}>Peperone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Camarão} onPress={handleForgotButton}>
            <Text style={styles.camarãobutton} onPress={handleAboutClick}>Camarão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Catupiry} onPress={handleForgotButton}>
            <Text style={styles.catupirybutton} onPress={handleAboutClick}>Catupiry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Portuguesa} onPress={handleForgotButton}>
            <Text style={styles.portuguesabutton} onPress={handleAboutClick}>Portuguesa</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.Quatroqueijos} onPress={handleForgotButton}>
            <Text style={styles.quatroqueijosbutton} onPress={handleAboutClick}>Quatro queijos</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.Marguerita} onPress={handleForgotButton}>
            <Text style={styles.margueritabutton} onPress={handleAboutClick}>Marguerita</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.Superfrango} onPress={handleForgotButton}>
            <Text style={styles.superfrangobutton} onPress={handleAboutClick}>Super Frango</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Atum} onPress={handleForgotButton}>
            <Text style={styles.atumbutton} onPress={handleAboutClick}>Atum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Calabresaecheddar} onPress={handleForgotButton}>
            <Text style={styles.calabresaecheddarbutton} onPress={handleAboutClick}>Calabresa e cheddar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Frangocomrequeijão} onPress={handleForgotButton}>
            <Text style={styles.frangocomrequeijãobutton} onPress={handleAboutClick}>Frango com requeijão</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Sophia</Text>
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
  aditionals:{
    marginTop: '5%',
    width: '90%',
  },
  calabresabutton:{
    backgroundColor: '#fE8330',
    borderRadius: 5,
    fontWeight:'bold',
    paddingLeft: '34%',
    paddingRight: '34%', 
    paddingTop:10,
    paddingBottom:10,
  },
  Calabresa:{
    textAlign:'center',
    marginVertical: 5,
  },
  aditionalspace:{
    width: '100%',
  },
  carnedosol:{
    textAlign:'center',
    marginVertical: 5,
  },
  carnedosolbutton:{
    backgroundColor: '#fE8330',
    borderRadius: 5,
    fontWeight:'bold',
    paddingLeft: '34%',
    paddingRight: '34%', 
    paddingTop:10,
    paddingBottom:10,
  },
  Mussarela:{
    textAlign:'center',
    marginVertical: 5,
    width: '90%',
  },
  mussarelabutton:{
    backgroundColor: '#fE8330',
    borderRadius: 5,
    fontWeight:'bold',
    paddingLeft: '34%',
    paddingRight: '34%', 
    paddingTop:10,
    paddingBottom:10,
  },
  peperone:{
    textAlign:'center',
    marginVertical: 5,
    width: '90%',
  },
  Peperonebutton: {
    backgroundColor: '#fE8330',
    borderRadius: 5,
    fontWeight:'bold',
    paddingLeft: '34%',
    paddingRight: '34%', 
    paddingTop:10,
    paddingBottom:10,
  },
  Catupiry:{
    textAlign:'center',
    marginVertical: 5,
    width: '90%',
  },
  catupirybutton: {
    backgroundColor: '#fE8330',
    borderRadius: 5,
    fontWeight:'bold',
    paddingLeft: '34%',
    paddingRight: '34%', 
    paddingTop:10,
    paddingBottom:10,
},
Camarão:{
 textAlign:'center',
    marginVertical: 5,
    width: '90%',
},
camarãobutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Portuguesa:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
portuguesabutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Quatroqueijos:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
quatroqueijosbutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Marguerita:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
margueritabutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Superfrango:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
superfrangobutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Atum:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
atumbutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Calabresaecheddar:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
calabresaecheddarbutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
Frangocomrequeijão:{
  textAlign:'center',
  marginVertical: 5,
  width: '90%',
},
frangocomrequeijãobutton:{
 backgroundColor: '#fE8330',
 borderRadius: 5,
 fontWeight:'bold',
 paddingLeft: '34%',
 paddingRight: '34%', 
 paddingTop:10,
 paddingBottom:10,
},
footerArea:{
  textAlign:'center',
  marginBottom: 50,
},
footerText:{
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold'
}
})