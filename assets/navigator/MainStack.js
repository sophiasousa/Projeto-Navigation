import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//  telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import VoltarScreen from '../pages/VoltarScreen'
import PizzaScreen from '../pages/pizzas.js'
import ConfirmarScreen from '../pages/confirmarpedido'


const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Divinas Pizzas',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000000',
          height: 78,
        },
        headerTitleStyle: {
          color: '#ffCC33',
          fontSize: 23,
          fontWeight: 'bold'
          
        }
      }}/>
      <MainStack.Screen name='Voltar' component={VoltarScreen} option={
        ({route})=>({
          title: 'Voltar'
          
        })
      }/>
      <MainStack.Screen name='Pizzas' component={PizzaScreen} option={
        ({route})=>({
          title: 'Pizzas'
          
        })
      }/>
      <MainStack.Screen name='Confirmar pedido' component={ConfirmarScreen} option={
        ({route})=>({
          title: 'Confirmar pedido'
    
        })
      }/>
    </MainStack.Navigator>
  )
}