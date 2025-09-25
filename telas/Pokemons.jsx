import { ImageBackground, StyleSheet, StatusBar, Text, View } from "react-native";

export default function Pokemons(){
    return (
        <View >
            <Image
               source={require('../imagens/logomarca_pokemon.png')}            
            />
            <Text>Teste</Text>
            <StatusBar hidden={true}/>
        </View>
    );
}
