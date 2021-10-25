import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { MotiView } from 'moti'
import PlacaDoce from "./placaDoce";
import PlacaPredio from "./placaPredio";


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
          if(y == 0){
            if(x == 900){caminha = -200;}
            else{caminha = -450;}
            setMexeX(x);
            setMexeY(caminha);
            setY(caminha);
          }else{alert('Não pode fazer esse movimento!')}
      }
      else if (e.keyCode == '40') {
          // down arrow
          if(y == -450 || y == -200){
            if(x != 600){
              setMexeX(x);
              setMexeY(0);
              setY(0);
            }
          }else{alert('Não pode fazer esse movimento!')}
      }
      else if (e.keyCode == '37') {
         // left arrow
         if(x == 900 || x == 600){
            if(y != -200){
              setMexeX(0);
              setMexeY(y);
              setX(0);
            }
        }else{alert('Não pode fazer esse movimento!')}
      }
      else if (e.keyCode == '39') {
         // right arrow
         if(x == 0){
          if(y == -450){caminha = 600;}
          else{caminha = 900;}
          setMexeX(caminha);
          setMexeY(y);
          setX(caminha);
        }else{alert('Não pode fazer esse movimento!')}
      }
      else if (e.keyCode == '13') {
        // enter
        if(x == 900 && y == -200){
          navigation.navigate('Maquina');
        }else if(x == 600 && y == -450){
          navigation.navigate('Elevador');
        }else{alert('O gato não esta na posição ainda!')}
      }
  
  }

    return(
        <View style={styles.container}>
          <ImageBackground style={styles.ambiente}
                       source={require("../screens/cidade.jpeg")}
                       resizeMode="repeat">
            <TouchableOpacity style={styles.right}  onPress={() => {
              if(x == 0){
                if(y == -450){caminha = 600;}
                else{caminha = 900;}
                setMexeX(caminha);
                setMexeY(y);
                setX(caminha);
              }else{alert('Não pode fazer esse movimento!')}
            }}/>
            <TouchableOpacity style={styles.left}  onPress={() => {
              if(x == 900 || x == 600){
                if(y != -200){
                  setMexeX(0);
                  setMexeY(y);
                  setX(0);
                }
              }else{alert('Não pode fazer esse movimento!')}
            }}/>
            <TouchableOpacity style={styles.up}  onPress={() => {
              if(y == 0){
                if(x == 900){caminha = -200;}
                else{caminha = -450;}
                setMexeX(x);
                setMexeY(caminha);
                setY(caminha);
              }else{alert('Não pode fazer esse movimento!')}
            }}/>
            <TouchableOpacity style={styles.down}  onPress={() => {
              if(y == -450 || y == -200){
                if(x != 600){
                  setMexeX(x);
                  setMexeY(0);
                  setY(0);
                }
              }else{alert('Não pode fazer esse movimento!')}
            }}/>
            <TouchableOpacity style={styles.centro}  onPress={() => {
              if(x == 900 && y == -200){
                navigation.navigate('Maquina');
              }else if(x == 600 && y == -450){
                navigation.navigate('Elevador');
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
            <PlacaDoce x={x} y={y}/>
            <ImageBackground
                        style={styles.predio}
                        source={require("../screens/predio.png")}
            ></ImageBackground>
            <PlacaPredio x={x} y={y}/>
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
            </ImageBackground>
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
  ambiente: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
    backgroundColor: 'grey',
    position: 'absolute',
  },
  quadro2: {
    marginBottom: 20,
    marginLeft: 20,
    height: 550,
    width: 100,
    backgroundColor: 'grey',
    position: 'absolute',
  },
  quadro3: {
    marginLeft: 20,
    marginBottom: 470,
    height: 100,
    width: 730,
    backgroundColor: 'grey',
    position: 'absolute',
  },
  quadro4: {
    marginBottom: 20,
    marginLeft: 920,
    height: 300,
    width: 100,
    backgroundColor: 'grey',
    position: 'absolute',
  },
  casaDoce: {
    marginBottom: 270,
    marginLeft: 870,
    height: 200,
    width: 200,
    position: 'absolute',
  },
  predio: {
    marginBottom: 460,
    marginLeft: 640,
    height: 270,
    width: 200,
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