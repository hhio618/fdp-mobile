import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    title: 'Fair Data Society',
    text: 'Fair Data Society is an initiative for decentralized self-sovereign data commons.',
    image: require('../../../assets/images/bootsplash_logo_pure.png'),
    bg: '#00897b',
  },
  {
    title: 'Fair Data',
    text: 'Fair Data is based on the simple premise that personal data is a part of the individual. As such, it should be treated as any other inalienable part of human identity.',
    image: require('../../../assets/images/fair_data.png'),
    bg: '#303f9f',
  },
  {
    title: 'Fair Data Principles',
    text: "Fair Data Principles are an ethical standard for collecting, processing, and storing personal data. They are a social contract of our members and technologies we develop.",
    image: require('../../../assets/images/data_principles.png'),
    bg: '#ef6c00',
  },
];

type Item = typeof data[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export const AppSlider = () => {
  const navigation = useNavigation();
  let _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  let _keyExtractor = (item: Item) => item.title;

  function done() {
    navigation.navigate('Login');
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        data={data}
        onDone={done}
      />
    </View>
  );
}
