import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, TouchableOpacity, Text } from "react-native";
import { color } from "react-native-reanimated";


export default function Draggable({valor, dinheiroTotal, addDinheiro, aceitaDin, setAceitaDin, setApenasUma, cor = 'green'}) {
  
 
  const pan = useRef(new Animated.ValueXY()).current;
  const [showDraggable, setShowDraggable] = useState(true);
  
  const isDropZone = React.useCallback((gesture) => {
    return gesture.moveY < 350 && gesture.moveY > 250 && gesture.moveX > 850 && gesture.moveX < 950;
  }, []);

  const isDropZoneCat = React.useCallback((gesture) => {
    return gesture.moveY < 300 && gesture.moveY > 170 && gesture.moveX > 1120 && gesture.moveX < 1220;
  }, []);

  const panResponder =  React.useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: (e, gesture) => {
        if (isDropZone(gesture)){
          if(dinheiroTotal + valor <= 10 && aceitaDin){  
            addDinheiro(dinheiroTotal + valor);
            //alert(dinheiroTotal);
          }else{
            alert('Não aceitamos mais!');
          }
        }
        if(isDropZoneCat(gesture) && !aceitaDin){
          setShowDraggable(false);
          setAceitaDin(true);
          setApenasUma(true);
        }
        Animated.spring(
          pan,
          {toValue:{x:0,y:0}}
        ).start();
      }
    }),[dinheiroTotal] // dependency list
    );
  
  if(showDraggable){
    return (
      <View style={styles.container}>      
        <Animated.View
          style={{
            transform: [{ translateX: pan.x, }, { translateY: pan.y, }]
          }}
          {...panResponder.panHandlers}
        >
          <Text style={styles.text}>{valor}</Text>
          <View style={[styles.circle, {backgroundColor: cor}]}></View>
        </Animated.View>
      </View>
    );
  }
  else{
    return(<View/>)
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    borderRadius: 20,
    alignSelf: "center"
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: CIRCLE_RADIUS
  }
});
