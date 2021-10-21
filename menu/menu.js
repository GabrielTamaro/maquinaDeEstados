import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button, ImageBackground } from 'react-native'
import { MotiView, useAnimationState } from 'moti'


let caminha;
export default function Menu({navigation}){

  const [x, setX] = useState(0);
  const [mexeX, setMexeX] = useState(0);

  const [y, setY] = useState(0);
  const [mexeY, setMexeY] = useState(0);
  
  document.onkeydown = checkKey;

  function checkKey(e) {
  
      e = e || window.event;
  
      if (e.keyCode == '38') {
          // up arrow
          setMexeX(x);
          setMexeY(-500);
          setY(-500);
      }
      else if (e.keyCode == '40') {
          // down arrow
          setMexeX(x);
          setMexeY(0);
          setY(0);
      }
      else if (e.keyCode == '37') {
         // left arrow
         setMexeX(0);
         setMexeY(y);
         setX(0);
      }
      else if (e.keyCode == '39') {
         // right arrow
         setMexeX(900);
         setMexeY(y);
         setX(900);
      }
  
  }

    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.right}  onPress={() => {
            if(x == 0){
              if(y == -500){caminha = 600;}
              else{caminha = 900;}
              setMexeX(caminha);
              setMexeY(y);
              setX(caminha);
            }else{alert('Não pode fazer esse movimento!')}
          }}/>
          <TouchableOpacity style={styles.left}  onPress={() => {
            if(x == 900 || x == 600){
              setMexeX(0);
              setMexeY(y);
              setX(0);
            }else{alert('Não pode fazer esse movimento!')}
          }}/>
          <TouchableOpacity style={styles.up}  onPress={() => {
            if(y == 0){
              if(x == 900){caminha = -200;}
              else{caminha = -500;}
              setMexeX(x);
              setMexeY(caminha);
              setY(caminha);
            }else{alert('Não pode fazer esse movimento!')}
          }}/>
          <TouchableOpacity style={styles.down}  onPress={() => {
            if(y == -500 || y == -200){
              setMexeX(x);
              setMexeY(0);
              setY(0);
            }else{alert('Não pode fazer esse movimento!')}
          }}/>
          <TouchableOpacity style={styles.centro}  onPress={() => {
            if(x == 900 && y == -200){
              navigation.navigate('Maquina');
            }else{alert('O gato não esta na posição ainda!')}
          }}/>
          <View style={styles.quadro}>
           <View style={styles.quadro1}/>
           <View style={styles.quadro2}/>
           <View style={styles.quadro3}/>
           <View style={styles.quadro4}/>
           <ImageBackground
                      style={styles.casaDoce}
                      source={require("../screens/casaDoce.png")}
           ></ImageBackground>
           <View style={styles.placaDoce}/>
           <MotiView
                  style={[styles.gato,{
                    marginLeft: 20,
                    marginBottom: 20,}]}
                  from={{
                    translateX: x,
                    translateY: y,
                  }}
                  animate={{
                    translateX: mexeX,
                    translateY: mexeY,
                  }}
                  transition={{
                    type: 'timing',
                    duration: 750,
                  }}>
                    <ImageBackground
                      style={styles.gato}
                      source={require("../screens/gato.png")}
                    ></ImageBackground>
                </MotiView>
          </View>

          {/*<Button onPress={() => {
              navigation.navigate('Maquina');
          }}/>*/}
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
  quadro: {
    justifyContent: 'flex-end',
    height: 700,
    width: 1150,
    position: 'absolute',
  },
  quadro1: {
    marginLeft: 20,
    marginBottom: 20,
    height: 100,
    width: 1000,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  quadro2: {
    marginBottom: 20,
    marginLeft: 20,
    height: 600,
    width: 100,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  quadro3: {
    marginLeft: 20,
    marginBottom: 520,
    height: 100,
    width: 700,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  quadro4: {
    marginBottom: 20,
    marginLeft: 920,
    height: 300,
    width: 100,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  casaDoce: {
    marginBottom: 270,
    marginLeft: 870,
    height: 200,
    width: 200,
    position: 'absolute',
  },
  placaDoce: {
    borderRadius: 10,
    marginBottom: 450,
    marginLeft: 900,
    height: 50,
    width: 150,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
  gato: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    position: 'absolute',
  },
  right: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 1400,
    marginBottom: 50,
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  left: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 1200,
    marginBottom: 50,
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  centro: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 1300,
    marginBottom: 50,
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  up: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 1300,
    marginBottom: 100,
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
  down: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 1300,
    backgroundColor: 'red',
    height: 30,
    width: 30,
  },
})