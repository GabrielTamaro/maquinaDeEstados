import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MotiView, useAnimationState } from 'moti'
import Draggable from './usePanResponder'
import Cardapio from "./cardapio";
import Imagem from "./imagem";

let pegou = false;
let doceA = false;
let doceB = false;
let doceC = false;
let troco = 0;
let cor = '';


export default function Maquina({navigation}) {

  const [apenasUma, setApenasUma] = useState(false);

  const [dinheiroTotal, addDinheiro] = useState(0);
  const [aceitaDin, setAceitaDin] = useState(true);

  const [quedaA, setQuedaA] = useState(false);
  const [quedaB, setQuedaB] = useState(false);
  const [quedaC, setQuedaC] = useState(false);
  
  const heightInDoce = useAnimationState({
    from: {
      height: 60,
    },
    open: {
      height: 0,
    },
  })
  const heightInTroco = useAnimationState({
    from: {
      height: 60,
    },
    open: {
      height: 0,
    },
  })

  const onPress = () => {
    if(!pegou){
      if(quedaA || quedaB || quedaC){
        if (heightInDoce.current === 'from') {
          heightInDoce.transitionTo('open')
        } else {
          heightInDoce.transitionTo('from')
        }
        if (heightInTroco.current === 'from') {
          heightInTroco.transitionTo('open')
        } else {
          heightInTroco.transitionTo('from')
        }
      }
    }
  }
  const onPressDoce = () => {
    if((quedaA || quedaB || quedaC) ){
      if(pegou){
        setQuedaA(false);setQuedaB(false);setQuedaC(false);addDinheiro(0);troco = 0;setAceitaDin(true);setApenasUma(false);
        doceA = doceB = doceC = pegou = false;
        if (heightInDoce.current === 'from') {
          heightInDoce.transitionTo('open')
        } else {
          heightInDoce.transitionTo('from')
        }
      }else{
        alert('Pegue seu troco para resetar a máquina')
      }
    }
  }
  const onPressTroco = () => {
    if(quedaA || quedaB || quedaC){
      if (heightInTroco.current === 'from') {
        heightInTroco.transitionTo('open')
      } else {
        heightInTroco.transitionTo('from')
      }
      pegou = true;
    }
  }
  if(quedaA){cor = 'orange';troco = dinheiroTotal - 6;}
  else if(quedaB){cor = 'purple';troco = dinheiroTotal - 7;}
  else if(quedaC){cor = 'brown';troco = dinheiroTotal - 8;}

  if(dinheiroTotal >= 6 && !quedaB && !quedaC){doceA = true;}
  if(dinheiroTotal >= 7 && !quedaA && !quedaC){doceB = true;}
  if(dinheiroTotal >= 8 && !quedaA && !quedaB){doceC = true;}

  return (
    <View style={styles.container}>
        
      <View style={styles.cardapio}>
      <Cardapio/>
        </View>
      <View style={styles.maquina}>
        <TouchableOpacity onPress={() => {
          if(doceA){
            if(!quedaB && !quedaC){
            setQuedaA(true); doceC = doceB = false;setAceitaDin(false);
           }
        }else{alert('Valor do doce é R$ 6,00')}}} style={[styles.botaoDoces,{marginTop:100, backgroundColor: 'orange'}]}>
          <Text style={[styles.texto, {marginTop: 5, marginLeft: 9,}]}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          if(doceB){
            if(!quedaA && !quedaC){
            setQuedaB(true); doceC = doceA = false;setAceitaDin(false);
          }
        }else{alert('Valor do doce é R$ 7,00')}}} style={[styles.botaoDoces,{marginTop:150, backgroundColor: 'purple'}]}>
          <Text style={[styles.texto, {marginTop: 5, marginLeft: 9,}]}>B</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          if(doceC){
            if(!quedaA && !quedaB){
            setQuedaC(true); doceA = doceB = false;setAceitaDin(false);
          }
        }else{alert('Valor do doce é R$ 8,00')}}} style={[styles.botaoDoces,{marginTop:200, backgroundColor: 'brown'}]}>
          <Text style={[styles.texto, {marginTop: 5, marginLeft: 9,}]}>C</Text>
        </TouchableOpacity>
        <View style={[styles.dropZone,{marginTop:250}]}><Text style={{alignSelf: 'center', color: 'black', fontSize: 10,}}>Deposite</Text></View>
        <View style={styles.dinheiroTotal}>
          <Text style={styles.texto}>
            {'R$ ' + dinheiroTotal}
          </Text>
        </View>
        <View style={styles.saidaTroco}>
        <TouchableOpacity onPress={onPressTroco} style={styles.nota}><Text style={styles.texto,{marginLeft: 5,}}>{'R$ ' + troco}</Text></TouchableOpacity>
               <MotiView
                    delay={500} state={heightInTroco}
                    transition={{
                      type: 'timing',
                      duration: 750,
                    }}
                    style={[styles.saidaTroco2, {backgroundColor: 'skyblue'}]}
                /> 
        </View>
        <View style={styles.vidro}>
        {doceA ?  <MotiView
                    from={{
                      opacity:0,
                    }}
                    animate={{
                      opacity:1,
                    }}
                    transition={{
                      duration: 750,
                    }}
                    style={styles.doces1}
                />
              : <Text/>}
        {quedaA ?  <MotiView
                    from={{
                      marginTop: 100,
                      opacity: 1,
                    }}
                    animate={{
                      marginTop: 550,
                      opacity: 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                    }}
                    style={styles.doces1}
                />
              : <Text/>}
          <View style={styles.fileira1}></View>
          {doceB ?  <MotiView
                    style={styles.doces2}
                    from={{
                      opacity:0,
                    }}
                    animate={{
                      opacity:1,
                    }}
                    transition={{
                      duration: 750,
                    }}
                />
              : <Text/>}
           {quedaB ?  <MotiView
                    from={{
                      marginTop: 250,
                      opacity: 1,
                    }}
                    animate={{
                      marginTop: 550,
                      opacity: 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                    }}
                    style={styles.doces2}
                />
              : <Text/>}
          <View style={styles.fileira2}></View>
          {doceC ?  <MotiView
                    style={styles.doces3}
                    from={{
                      opacity:0,
                    }}
                    animate={{
                      opacity:1,
                    }}
                    transition={{
                      duration: 750,
                    }}
                />
              : <Text/>}
           {quedaC ?  <MotiView
                    from={{
                      marginTop: 390,
                      opacity: 1,
                    }}
                    animate={{
                      marginTop: 550,
                      opacity: 0,
                    }}
                    transition={{
                      type: "timing",
                      duration: 1000,
                    }}
                    style={styles.doces3}
                />
              : <Text/>}
          <View style={styles.fileira3}></View>
        </View>
        <View style={[styles.saidaDoce, {marginLeft: 50,}]}>
         {!aceitaDin ? <Draggable valor={''} dinheiroTotal={dinheiroTotal} addDinheiro={addDinheiro} aceitaDin={aceitaDin} setAceitaDin={setAceitaDin} setApenasUma={setApenasUma} cor={cor}/>
         : <TouchableOpacity style={[styles.saidaDoce3,{marginLeft: 100}]}  onPress={onPressDoce}><Text>RESET</Text></TouchableOpacity>}
                <MotiView
                    state={heightInDoce}
                    transition={{
                      type: 'timing',
                      duration: 750,
                    }}
                    style={[styles.saidaDoce2, {backgroundColor: 'skyblue'}]}
                />
        </View>
        <TouchableOpacity style={styles.comprar}  onPress={onPress}>
          <Text style={styles.texto}>
              Buy
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imagem}>
        <Imagem apenasUma={apenasUma}></Imagem>
      </View>
      <View style={styles.row}>
          <Draggable valor={1} dinheiroTotal={dinheiroTotal} addDinheiro={addDinheiro} aceitaDin={aceitaDin} setAceitaDin={''} setApenasUma={''}/>
          <Draggable valor={2} dinheiroTotal={dinheiroTotal} addDinheiro={addDinheiro} aceitaDin={aceitaDin} setAceitaDin={''} setApenasUma={''}/>
          <Draggable valor={5} dinheiroTotal={dinheiroTotal} addDinheiro={addDinheiro} aceitaDin={aceitaDin} setAceitaDin={''} setApenasUma={''}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  maquina: {
    height: 700,
    width: 450,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'gray',
  },
  texto: {
    fontSize: 15,
    color: 'white',
  },
  dropZone: {
    width: 30 * 2,
    height: 30 * 2,
    borderRadius: 30,
    backgroundColor: "yellow",
    marginRight: 10,
    alignSelf: 'flex-end',
    position: 'absolute',
    borderRadius: 25,
  },
  vidro: {
    height: 570,
    width: 350,
    borderRadius: 25,
    marginLeft: 10,
    marginBottom: 30,
    marginTop: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  saidaDoce: {
    height: 60,
    width: 250,
    marginBottom: 10,
    backgroundColor: 'black',
    position: 'absolute',
    marginTop: 620,
  },
  saidaDoce2:{
    height: 60,
    width: 250,
    marginBottom: 10,
    backgroundColor: 'black',
    position: 'absolute',
  },
  saidaDoce3:{
    height: 50,
    width: 50,
    marginBottom: 10,
    backgroundColor: 'white',
    position: 'absolute',
  },
  saidaTroco: {
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 500,
    backgroundColor: 'black',
    position: 'absolute',
  },
  saidaTroco2:{
    height: 60,
    width: 60,
    marginBottom: 10,
    backgroundColor: 'black',
    position: 'absolute',
  },
  dinheiroTotal: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    height: 20,
    width: 40,
    marginRight: 20,
    marginTop: 320,
    backgroundColor: 'blue',
    position: 'absolute',
    alignSelf: 'flex-end',
    borderRadius: 25,
  },
  fileira1: {
    height: 10,
    width: 350,
    marginTop: 120,
    backgroundColor: 'black',
    position: 'absolute',
  },
  fileira2: {
    justifyContent: 'center',
    height: 10,
    width: 350,
    marginTop: 280,
    backgroundColor: 'black',
    position: 'absolute',
  },
  fileira3: {
    justifyContent: 'center',
    height: 10,
    width: 350,
    marginTop: 420,
    backgroundColor: 'black',
    position: 'absolute',
  },
  botaoDoces: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 25,
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  nota: {
    height: 20,
    width: 40,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 20,
  },
  doces: {
    height: 30,
    width: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  doces1: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: 'orange',
    marginTop: 90,
    position: 'absolute',
  },
  doces2: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: 'purple',
    marginTop: 250,
    position: 'absolute',
  },
  doces3: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: 'brown',
    marginTop: 390,
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 900,
    marginBottom: 100,
  },
  cardapio: {
    position: 'absolute',
    marginRight: 900,
    marginBottom: 100,
    height: 80,
    width: 300,
  },
  comprar: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginTop: 450,
    marginRight: 25,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardapio1: {
    backgroundColor: "#e0e094",
    borderRadius: 10,
    width: 300,
  },
  imagem: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginLeft: 900,
    marginBottom: 500,
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
