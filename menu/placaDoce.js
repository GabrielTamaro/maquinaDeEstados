import * as React from "react";
import { View, StyleSheet,Text } from 'react-native'
import { MotiView } from 'moti'


export default function PlacaDoce({x, y}){
    
    if(x == 900 && y == -200){
        return (
            <MotiView
                style={styles.placaDoce}
                from={{
                    scale: 0.75,
                }}
                animate={{
                    scale: 1,
                }}
                transition={{
                    loop: true,
                    duration: 100,
                }}
            >
                <Text style={styles.texto}>Máquina de Doce</Text>
            </MotiView>
        );
    }

    return(
        <View
        style={styles.placaDoce}
        >
            <Text style={styles.texto}>Máquina de Doce</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    placaDoce: {
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 450,
        marginLeft: 905,
        height: 50,
        width: 150,
        backgroundColor: 'yellow',
        position: 'absolute',
    },
    texto: {
        alignSelf: 'center',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
})