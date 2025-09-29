import { ImageBackground, StyleSheet, StatusBar, Text, View, Image } from "react-native";
import Cartoes from "./cartoes";

export default function Pokemons({navigation}){
    return (
        <View >
            <Image
               source={require('../imagens/logomarca_pokemon.png')}   
               style={{margin: 'auto', marginTop: 30}}         
            />
            <StatusBar hidden={true}/>
            <View style={{flexDirection: 'row',
                flexwrap:'wrap',
                gap:20
            }}>
                <Cartoes
                  imagem={require('../imagens/bulbassauro.png')}
                  titulo={"Bulbassauro"}
                  onPress={()=>navigation.navigative("Bulbassauro")}
                />
                <Cartoes
                  imagem={require('../imagens/charmander.png')}
                  titulo={"charmander"}
                  onPress={()=>navigation.navigative("charmander")}
                />
                <Cartoes
                  imagem={require('../imagens/Squirtle.png')}
                  titulo={"Squirtle"}
                  onPress={()=>navigation.navigative("Squirtle")}
                />
                <Cartoes
                  imagem={require('../imagens/zubat.png')}
                  titulo={"zubat"}
                  onPress={()=>navigation.navigative("zubat")}
                />
            </View>
        </View>
    );
}
