import React from 'react';
import {ScrollView} from 'react-native';
import {Button, Screen, Text, View, Input} from 'ui';
import {translate, useAuth} from 'core';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  username: string;
  password: string;
  url: string;
  pod: string;
};

const schema = yup.object().shape({
  username: yup.string().required().min(4),
  password: yup.string().required().min(6),
  url: yup.string().required().min(6),
});

export const Settings = () => {
  const {signOut} = useAuth();
  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  return (
    <Screen>
      <ScrollView>
        <View flex={1} paddingTop="xl" justifyContent="center">
          <Text variant="header">Settings</Text>
          <Text variant="subheader" style={{color: 'white'}}>
            Short Introduction
          </Text>
          <Text variant="body" style={{color: 'white'}}>
            In this version the username and password can not be changed in
            settings, but later on in settings we can change username, password
            and url to connect to fdp client. The source code is nearly complete
            but it needs some features to complete and also some enhancement in
            the UI/UX sections.
          </Text>
          <Input
            control={control}
            name="username"
            label="Username"
            placeholder="FDP username"
          />
          <Input
            control={control}
            name="url"
            label="Url"
            placeholder="https://localhost:6333"
          />
          <Input
            control={control}
            name="pod"
            label="Pod name"
            placeholder="default"
          />
          <Input
            control={control}
            name="password"
            label="Password"
            placeholder="******"
            secureTextEntry={true}
          />
          <Button
            variant="secondary"
            marginTop={'m'}
            label="Save"
            onPress={() => {}}
          />
          <Button
            variant="primary"
            marginTop={'m'}
            label="Logout"
            onPress={() => {
              signOut();
            }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};
