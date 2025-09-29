import { View, Text, StatusBar, Image, StyleSheet} from "react-native";

export default function Bulbassauro(){
    return (
        <View style={estilos.tela}>
            <Image source={require('../imagens/bulbassauro.png')}
                   style={{width:200,height:200}}
                   resizeMode="contain"       
            />
            <Text style={estilos.titulo}>Bulbassauro</Text>
            <View style={estilos.cxDescricao}>
              <Text Style={estilos.descricao}>
                -altura:0.7m <br/>
                -Peso:6.9kg <br/>
                -Tipo: Planta/Veneno<br/>
                -Fraquesas: Fogo, Gelo, Voador e Psiquico
              </Text>
             </View>       
            <StatusBar hidden={true} />
        </View>
    );
}
export const estilos = StyleSheet.create({
 tela:{
    backgorundColor:'#2bb72b',
    flex:1,
    alignItems: 'center',
    padding:30
 },
 titulo:{
   fontSize: 40,
   color: 'white',
   fontWeight: '600'  
 }


})