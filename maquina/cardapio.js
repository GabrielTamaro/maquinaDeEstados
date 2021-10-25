import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { MotiView, useAnimationState } from 'moti'

export default function Cardapio() {

  //const [open, setOpen] = useState(false);

  //const [card, setCard] = useState(false);

  const open = useAnimationState({
    from: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: 110,
      opacity: 1,
    },
  })

  const onPress = () => {
        if (open.current === 'from') {
            open.transitionTo('open')
        } else {
            open.transitionTo('from')
        }
  }

  return (
    <View style={styles.container}>
            <MotiView 
            style={styles.cardapio}
            state={open}
            transition={{
                type: 'timing'
            }}
            >
            <Text style={{ alignSelf: 'center', fontWeight: "bold" }}>Tabela</Text>
            <Text style={{marginTop: 10, marginLeft: 5,}}>1º fileira: Doce A - R$ 6</Text>
            <Text style={{marginTop: 10, marginLeft: 5,}}>2º fileira: Doce B - R$ 7</Text>
            <Text style={{marginTop: 10, marginLeft: 5,}}>3º fileira: Doce C - R$ 8</Text>
            <Text
                style={{
                alignSelf: "flex-end",
                marginTop: 92,
                fontSize: 9,
                position: "absolute",
                marginRight: 5,
                }}
            >
                Não esqueça seu troco
            </Text>
            </MotiView>
            <TouchableOpacity
            style={{
            position: "absolute",
            marginTop: 112,
            backgroundColor: "green",
            borderRadius: 10,
            }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 15, paddingHorizontal: 10 }}>Cardápio</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 'bold',
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 10,
    },
    cardapio: {
        backgroundColor: '#e0e094',
        borderRadius: 10,
        width: 300,
    }
  });