import React from 'react';
import AnimatedButton from 'ui/AnimatedButton';
import {Screen} from 'ui';
import {API_URL} from '@env';
import {useTasks} from 'api';
import {registerAccount} from 'fdp';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native';
import { useState, useRef } from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Animated, TouchableOpacity, StatusBar } from 'react-native';

const style = {width: 320, height: 320};
export const Home = () => {
  
  const {data, isLoading} = useTasks();
  const navigation = useNavigation();
  return (
    <Screen>
      <View style={styles.container}>
        <AnimatedButton text="Backup" icon='op_icon' onclick={()=>{
          navigation.navigate('Upload');
        }} />
        <View style={styles.doubleContainer}>
          <AnimatedButton text="Download" icon='under_construction' />
          <AnimatedButton text="Backup" icon='under_construction' />
        </View>
        <StatusBar translucent backgroundColor="transparent" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'transparent',
  }
});


