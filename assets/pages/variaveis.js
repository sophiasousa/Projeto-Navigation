import { useState } from 'react'

const [pizzas, setPizzas] = useState('');

const escolhas = {
  escolherPizza: function(pizza) {
    setPizzas(pizza)
    return pizza;
  },

  pizzaEscolhida: function(){
    return pizzas;
  }
}

export default escolhas;