import React from 'react';
import {Button, Screen, Input} from 'ui';
import {useAuth} from 'core';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  username: string;
  password: string;
  url: string;
};

const schema = yup.object().shape({
  username: yup.string().required().min(4),
  password: yup.string().required().min(6),
  url: yup.string().required().min(6),
});

export const Login = () => {
  const {signIn} = useAuth();

  const {handleSubmit, control} = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    signIn({access: 'access-token', refresh: 'refresh-token'});
  };
  return (
    <Screen>
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
        name="password"
        label="Password"
        placeholder="******"
        secureTextEntry={true}
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant="primary"
      />
    </Screen>
  );
};
