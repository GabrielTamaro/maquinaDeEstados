import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { MotiView, useAnimationState, MotiText, MotiImage, AnimatePresence } from 'moti'
import AnimatedNumber from 'react-animated-number'

export default function Elevador({navigation}) {

  const [imagem, setImagem] = useState('recepcao.jpg');
  const [andarSelecionado, setAndarSelecionado] = useState(0);
  const [andarAntes, setAndarAntes] = useState(0);
  const [tempo, setTempo] = useState(0);

  const mudarImagem = () => {
    console.log(andarSelecionado);
    if (widthPorta.current === 'open') {
      if(andarSelecionado == 0){setImagem('recepcao.jpg');}
      else if(andarSelecionado == 1){setImagem('gatoSala.jpg');}
      else if(andarSelecionado == 2){setImagem('sala2.jpg');}
      else if(andarSelecionado == 3){setImagem('clinica.jpg');}
      onPressPorta();
    }
  }

  const onPressPorta = () => {
    if (widthPorta.current === 'from') {
      widthPorta.transitionTo('open');
      opacityImage.transitionTo('open');
    }else {
      widthPorta.transitionTo('from');
      opacityImage.transitionTo('from');
    }
  }
  
  const opacityImage = useAnimationState({
    from: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  });

  const widthPorta = useAnimationState({
    from: {
      width: 0,
    },
    open: {
      width: 225,
    },
  });


  console.log(imagem);
  return (
    <View style={styles.container}>
      <View style={styles.trapezioDireita}/>
      <ImageBackground resizeMode={'cover'}
                         style={[styles.espelho,{marginLeft: 900,}]}
                         source={require("../screens/espelho.png")}
      />
      <View style={styles.trapezioEsquerda}/>
      <ImageBackground resizeMode={'cover'}
                         style={[styles.espelho,{marginRight: 970,}]}
                         source={require("../screens/espelho.png")}
      />
      <View style={styles.trapezio}/>
      <View style={styles.trapezioInterno}/>
      <View style={styles.trapezioInvertido}/>
      <View style={styles.trapezioDireitaInterno}/>
      <View style={styles.trapezioEsquerdaInterno}/>
      <View style={styles.elevador}>
        <TouchableOpacity style={[styles.botaoAndar,{marginBottom: 250, backgroundColor: andarSelecionado == 0 ? 'pink' : '#6fbbd3'}]} onPress={() => {
          if(andarSelecionado != 0){
            if(andarSelecionado == 1){setTempo(3000);}
            else if(andarSelecionado == 2){setTempo(5000);}
            else if(andarSelecionado == 3){setTempo(7000);}
            onPressPorta();
            setAndarAntes(andarSelecionado);
            setAndarSelecionado(0);
          }else{alert('Já está nesse andar!')}
        }}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botaoAndar,{marginBottom: 250, marginLeft: 100, backgroundColor: andarSelecionado == 1 ? 'pink' : '#6fbbd3'}]} onPress={() => {
          if(andarSelecionado != 1){
            if(andarSelecionado == 0 || andarSelecionado == 2){setTempo(3000);}
            else if(andarSelecionado == 3){setTempo(5000);}
            onPressPorta();
            setAndarAntes(andarSelecionado);
            setAndarSelecionado(1);
          }else{alert('Já está nesse andar!')}
        }}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botaoAndar,{marginBottom: 300, backgroundColor: andarSelecionado == 2 ? 'pink' : '#6fbbd3'}]} onPress={() => {
          if(andarSelecionado != 2){
            if(andarSelecionado == 1 || andarSelecionado == 3){setTempo(3000);}
            else{setTempo(5000);}
            onPressPorta();
            setAndarAntes(andarSelecionado);
            setAndarSelecionado(2);
          }else{alert('Já está nesse andar!')}
        }}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botaoAndar,{marginBottom: 300, marginLeft: 100, backgroundColor: andarSelecionado == 3 ? 'pink' : '#6fbbd3'}]} onPress={() => {
          if(andarSelecionado != 3){
            if(andarSelecionado == 2){setTempo(3000);}
            else if(andarSelecionado == 1){setTempo(5000);}
            else{setTempo(7000);}
            onPressPorta();
            setAndarAntes(andarSelecionado);
            setAndarSelecionado(3);
          }else{alert('Já está nesse andar!')}
        }}>
          <Text>3</Text>
        </TouchableOpacity>
        <View style={styles.orientacao}>
          {widthPorta.current == 'open'  ? 
            <MotiText style={{ color: 'white', fontSize: 50, marginBottom: 10,}}
              from={{
                translateY: widthPorta.current == 'open' ? 5 : 0,
              }}
              animate={{
                translateY: widthPorta.current == 'open' ? -5 : 0,
              }}
              transition={{
                loop: true,
              }}
            >
            {andarSelecionado - andarAntes > 0 ? '↑' : '↓'}
            </MotiText>
            :
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 10,}}>Parado</Text>
          }
        </View>
        <TouchableOpacity style={[styles.botaoAndar,{marginBottom: 200, marginLeft: 50, backgroundColor: '#6fbbd3'}]} onPress={mudarImagem}>
          <Text style={{fontSize: 13, fontFamily: 'bold'}}>Abrir</Text>
        </TouchableOpacity>
        <View style={styles.andar}>
            <AnimatedNumber
              value={andarSelecionado}
              style={
                {
                  color: 'white',
                  position: 'absolute',
                  fontSize: 20,
                }
              }
              duration={tempo}
              formatValue={n => n.toFixed(0)}
              frameStyle={percentage => percentage > 10 && percentage < 90 ? {opacity: 0.5} : {opacity : 1}}
            />
        </View>
        <View style={styles.barrasElevador}>
          <MotiView
            style={styles.barrasElevador}
            state={opacityImage}
            transition={{
              duration: 2000,
            }}>
              <Image
                style={styles.barrasElevador}
                source={require("../screens/" + imagem)}                
                resizeMode="stretch"
                />
                {andarSelecionado == 0 && widthPorta.current === 'from' ? <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('Menu');
                }}
                style={[styles.botaoAndar,{marginRight: 50, backgroundColor: 'yellow'}]}>
                  <Text>Exit</Text>
                </TouchableOpacity> : <Text/>}
          </MotiView>
          <MotiView
            delay={500}
            state={widthPorta}
            transition={{
              type: 'timing',
              duration: 500,
            }}
            style={[styles.porta, {alignSelf: 'flex-start', borderRightWidth: 5,}]}
          />
          <MotiView
            delay={500}
            state={widthPorta}
            transition={{
              type: 'timing',
              duration: 500,
            }}
            style={[styles.porta, {alignSelf: 'flex-end', borderLeftWidth: 5,}]}
          />
        </View>
      </View>
      <ImageBackground
        style={styles.gato}
        source={require("../screens/gato.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  elevador: {
    marginBottom: 50,
    height: 507,
    width: 625,
    backgroundColor: '#ced2dd',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },
  porta: {
    height: 450,
    backgroundColor: 'skyblue',
    position: 'absolute',
    borderColor: 'gray',
  },
  barrasElevador: {
    marginLeft: 70,
    height: 450,
    width: 450,
    backgroundColor: 'black',
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  botaoAndar: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 550,
    backgroundColor: '#6fbbd3',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orientacao: {
    marginBottom: 380,
    height: 60,
    width: 100,
    borderRadius: 25,
    marginRight: 500,
    backgroundColor: 'black',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  andar: {
    height: 50,
    width: 150,
    borderRadius: 10,
    marginLeft: 70,
    marginBottom: 455,
    backgroundColor: 'black',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gato: {
    height: 150,
    width: 150,
    position: 'absolute',
    marginTop: 450,
    marginRight: 400,
  },  
  trapezioInterno: {
    alignSelf: 'flex-end',
    width: 1000,
    height: 0,
    borderBottomWidth: 125,
    borderBottomColor: 'brown',
    borderLeftWidth: 250,
    borderLeftColor: 'transparent',
    borderRightWidth: 250,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  trapezio: {
    alignSelf: 'flex-end',
    width: 1440,
    height: 0,
    borderBottomWidth: 150,
    borderBottomColor: '#C0C0C0',
    borderLeftWidth: 400,
    borderLeftColor: 'transparent',
    borderRightWidth: 400,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  trapezioInvertido: {
    alignSelf: 'flex-start',
    width: 1440,
    height: 0,
    borderTopWidth: 100,
    borderTopColor: '#C0C0C0',
    borderLeftWidth: 405,
    borderLeftColor: 'transparent',
    borderRightWidth: 405,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  trapezioDireita: {
    marginLeft: 1030,
    width: 0,
    height: 757,
    borderBottomWidth: 150,
    borderBottomColor: 'transparent',
    borderRightWidth: 403,
    borderRightColor: 'white',
    borderTopWidth: 100,
    borderTopColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  espelho: {
    height: 530,
    width: 1050,
    marginBottom: 300,
    position: 'absolute',
    transform: [
      { rotateZ: "-90deg" }
    ]
  },
  trapezioDireitaInterno: {
    marginTop: 405,
    marginLeft: 1030,
    width: 0,
    height: 350,
    borderBottomWidth: 148,
    borderBottomColor: 'transparent',
    borderRightWidth: 403,
    borderRightColor: 'brown',
    borderStyle: 'solid',
    position: 'absolute',
  },
  trapezioEsquerda: {
    marginRight: 1030,
    width: 0,
    height: 757,
    borderBottomWidth: 150,
    borderBottomColor: 'transparent',
    borderLeftWidth: 403,
    borderLeftColor: 'white',
    borderTopWidth: 100,
    borderTopColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  trapezioEsquerdaInterno: {
    marginTop: 405,
    marginRight: 1030,
    width: 0,
    height: 350,
    borderBottomWidth: 148,
    borderBottomColor: 'transparent',
    borderLeftWidth: 410,
    borderLeftColor: 'brown',
    borderStyle: 'solid',
    position: 'absolute',
  },
})
