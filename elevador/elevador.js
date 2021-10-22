import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MotiView, useAnimationState } from 'moti'



export default function Elevador({navigation}) {
    const onPressPorta = () => {
        if (widthPorta.current === 'from') {
            widthPorta.transitionTo('open')
        } else {
            widthPorta.transitionTo('from')
        }
    }
      const widthPorta = useAnimationState({
        from: {
            width: 265,
        },
        open: {
            width: 0,
        },
      })

  return (
    <View style={styles.container}>
        <View style={styles.elevador}>
            <TouchableOpacity style={styles.andar} onPress={onPressPorta}/>
            <View style={styles.barrasElevador}>
                <MotiView
                    state={widthPorta}
                    transition={{
                      type: 'timing',
                      duration: 750,
                    }}
                    style={[styles.porta, {alignSelf: 'flex-start', borderRightWidth: 5,}]}
                />
                <MotiView
                    state={widthPorta}
                    transition={{
                      type: 'timing',
                      duration: 750,
                    }}
                    style={[styles.porta, {alignSelf: 'flex-end', borderLeftWidth: 5,}]}
                />
            </View>
            <View style={styles.trapezio}/>
            
        </View>
        <View style={styles.trapezioInvertido}/>
    </View>
  )
}

const styles = StyleSheet.create({
  elevador: {
    height: 700,
    width: 800,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  porta: {
    height: 630,
    backgroundColor: 'skyblue',
    position: 'absolute',
    borderColor: 'gray',
  },
  barrasElevador: {
    height: 630,
    width: 530,
    backgroundColor: 'yellow',
    borderColor: 'gray',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
  andar: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginBottom: 500,
    marginRight: 660,
    position: 'absolute',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trapezio: {
    marginBottom: 700,
    width: 800,
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: 'black',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  trapezioInvertido: {
    marginTop: 735,
    width: 804,
    height: 0,
    borderTopWidth: 29,
    borderTopColor: 'black',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
})
