import { ImageBackground, StyleSheet, StatusBar, Text, View } from "react-native";
import cartoes from "./cartoes";

export default function Pokemons(){
    return (
        <View >
            <Image
               source={require('../imagens/logomarca_pokemon.png')}   
               style={{margin: 'auto', marginTop: 30}}         
            />
            <StatusBar hidden={true}/>
            <View>
                <Cartoes
                  imagem={require('../imagens/Bulbassauro.png')}
                  titulo={"Bulbassauro"}
                  onPress={()=>navigation.navigative("Bulbassauro")}
                />
            </View>
        </View>
    );
}
