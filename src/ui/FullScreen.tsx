import React from 'react';
import {View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const FullScreen = (props: Props) => (
  <View style={{flex: 1}}>
    {props.children}
  </View>
);
