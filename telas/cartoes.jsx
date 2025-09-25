import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function cartoes({imagem, titulo, onPress}) {
  return (
    <TouchableOpacity>
      <Image
       source={imagem}>
      </Image>
      <Text>{titulo}</Text>
    </TouchableOpacity>
  )
}

export const estilos = StyleSheet.create({
cartao:{
    backgroundColor:'#3cs0c5',
    width:150,
    height:150,
    borderRadius:20,
    alignItens: 'center',
    justifyContent:'center'

}

})