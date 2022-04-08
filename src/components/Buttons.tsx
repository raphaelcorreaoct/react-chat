import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {BoxProps, TouchableBox} from './Box';
import {Txt, TxtComponentProps} from './Text';

export type ButtonProps = TouchableOpacityProps & {
  shape?: BoxProps;
  text?: TxtComponentProps;
  title: string;
};

export const PrimaryButton = ({title, shape, text, ...props}: ButtonProps) => {
  return (
    <TouchableBox
      bg="brandPrimary"
      padding="big"
      justifyContent="center"
      alignItems="center"
      borderRadius="middle"
      {...shape}
      {...props}>
      <Txt color="onBrandPrimary" {...text}>
        {title}
      </Txt>
    </TouchableBox>
  );
};

export const SecondaryButton = ({
  title,
  shape,
  text,
  ...props
}: ButtonProps) => {
  return (
    <TouchableBox
      bg="trasnparent"
      borderWidth={1}
      borderColor="brandPrimary"
      padding="big"
      justifyContent="center"
      alignItems="center"
      borderRadius="middle"
      {...shape}
      {...props}>
      <Txt color="brandPrimary" {...text}>
        {title}
      </Txt>
    </TouchableBox>
  );
};
