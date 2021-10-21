import * as React from "react";
import { ImageBackground, StyleSheet } from 'react-native'
import { MotiView } from 'moti'


export default function Imagem({apenasUma}){
    
    if(apenasUma){
        return (
            <MotiView
            from={{
            translateY: 0,
            }}
            animate={{
            translateY: -50,
            }}
            transition={{
            loop: true,
            type: 'timing',
            duration: 1000,
            }}
            >
                <ImageBackground
                    style={[styles.gato,{width: 150, height: 130,}]}
                    source={require("../screens/gato.png")}
                ></ImageBackground>
            </MotiView>
        );
    }

    return(
        <ImageBackground
        style={styles.gato}
        source={require("../screens/gato.png")}
        ></ImageBackground>
    )
}

const styles = StyleSheet.create({
    gato: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },
})