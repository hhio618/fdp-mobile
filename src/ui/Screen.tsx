import React from 'react';
import {View} from './View';

type Props = {
  children: React.ReactNode;
};

export const Screen = (props: Props) => (
  <View
    justifyContent="center"
    flexDirection="column"
    paddingHorizontal="m"
    flex={1}
    bg="background">
    {props.children}
  </View>
);
