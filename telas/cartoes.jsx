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

export const estilos = StyleSheet.create({})