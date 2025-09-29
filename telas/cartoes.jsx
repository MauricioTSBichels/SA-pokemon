import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function cartoes({imagem, titulo, onPress}) {
  return (
    <TouchableOpacity style={estilos.cartao} onPress={onPress}>
      <Image
       source={imagem} style={{width:80, height:80}} resizeMode="contain">
      </Image>
      <Text style={estilos.titulo}>{titulo}</Text>
    </TouchableOpacity>
  )
}

export const estilos = StyleSheet.create({
titulo:{
   backgroundColor:'#737070',
   color:'white',
   padding:5,
   borderRadius:20,
},

cartao:{
    backgroundColor:'#3cs0c5',
    width:130,
    height:130,
    borderRadius:30,
    alignItens: 'center',
    justifyContent:'center'
}

})