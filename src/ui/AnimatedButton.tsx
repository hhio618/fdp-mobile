import React from 'react';
import {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';

type AnimatedButtonProps = {
  text: string;
  icon: string;
  onclick?: any;
  screen?: string;
};

function AnimatedButton(props: AnimatedButtonProps) {
  const [selected, setSelected] = useState(false);
  const selectedAnim = useRef(new Animated.Value(1)).current;
  const opImage = require('../../assets/images/op_icon.png');
  const underConstruction = require('../../assets/images/under_construction.png');
  return (
    <View style={styles.container}>
      <Animated.View style={[{transform: [{scale: selectedAnim}]}]}>
        <TouchableOpacity
          onPress={() => {
            Animated.sequence([
              Animated.timing(selectedAnim, {
                toValue: 2,
                duration: 300,
                useNativeDriver: true,
              }),
              Animated.timing(selectedAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }),
            ]).start(() => {
              setSelected(prev => !prev);
              props.onclick();
            });
          }}
          style={styles.circle}>
          {props.icon === 'op_icon' && (
            <Image style={styles.image} source={opImage} />
          ) } 
          {props.icon === 'under_construction' && (
            <Image style={styles.image} source={underConstruction} />
          ) } 
          { props.icon !== 'op_icon' && props.icon !== 'under_construction' && (
            <Text style={{fontSize: 36}}> {props.icon}</Text>
          )}
        </TouchableOpacity>
      </Animated.View>
      <Text style={{fontSize: 24, color: 'white'}}>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    maxHeight: 60,
    maxWidth: 60,
  }
});
export default AnimatedButton;
