import React, {useEffect} from 'react';
import {Button, Screen, Input, Text, View} from 'ui';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {fdp} from 'fdp/client';
import * as SecureStore from 'expo-secure-store';
import CryptoJS from 'react-native-crypto-js';
const mnemonicWords = require('mnemonic-words');

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().required().min(4),
  password: yup.string().required().min(6),
});

export const Register = () => {
  const navigation = useNavigation();
  const [words, setWords] = React.useState<any>();
  const [wordsArray, setWordsArray] = React.useState<any>();
  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  useEffect(function () {
    let wordArray = CryptoJS.lib.WordArray.random(16);
    console.log(wordArray.words);
    // Shuffle array
    const shuffled = mnemonicWords.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 12);
    console.log(selected);
    let selectedWordsString = '';
    for (let item in selected) {
      selectedWordsString += selected[item] + ', ';
    }
    setWordsArray(selected);
    setWords(selectedWordsString);
  }, []);
  const onSubmit = (data: FormData) => {
    console.log(data);
    fdp.account.setAccountFromMnemonic(wordsArray);
    fdp.account
      .register(data.username, data.password)
      .then(function (res: any) {
        navigation.navigate('Login');
      });
  };
  return (
    <Screen>
      <View
        style={{
          backgroundColor: 'red',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'red',
          padding: 10,
          marginTop: 10,
          marginBottom: 10
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
          }}>
          Write down the following words and keep them safe!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'green',
          padding: 10,
          marginTop: 10,
          marginBottom: 10
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            textDecorationLine: 'underline',
          }}>
          {words}
        </Text>
      </View>
      <Input
        control={control}
        name="username"
        label="Username"
        placeholder="username"
      />
      <Input
        control={control}
        name="password"
        label="Password"
        placeholder="******"
        secureTextEntry={true}
      />
      <Button
        label="Register"
        onPress={handleSubmit(onSubmit)}
        variant="secondary"
      />
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Already Registered
      </Text>
    </Screen>
  );
};
