import * as React from "react";
import { View, StyleSheet,Text } from 'react-native'
import { MotiView } from 'moti'


export default function PlacaPredio({x, y}){
    
    if(x == 600 && y == -450){
        return (
            <MotiView
                style={styles.placaPredio}
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
                <Text style={styles.texto}>Elevador</Text>
            </MotiView>
        );
    }

    return(
        <View
        style={styles.placaPredio}
        >
            <Text style={styles.texto}>Elevador</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    placaPredio: {
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 650,
        marginLeft: 800,
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