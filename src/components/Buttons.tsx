import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {BoxProps, TouchableBox} from './Box';
import {Txt, TxtComponentProps} from './Text';

export type ButtonProps = TouchableOpacityProps &
  BoxProps & {
    text?: TxtComponentProps;
    title: string;
  };

export const PrimaryButton = ({title, text, ...props}: ButtonProps) => {
  return (
    <TouchableBox
      bg="brandPrimary"
      padding="big"
      justifyContent="center"
      alignItems="center"
      borderRadius="middle"
      {...props}>
      <Txt color="onBrandPrimary" {...text}>
        {title}
      </Txt>
    </TouchableBox>
  );
};

export const SecondaryButton = ({
  title,

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
      {...props}>
      <Txt color="brandPrimary" {...text}>
        {title}
      </Txt>
    </TouchableBox>
  );
};

export const LinkButton = ({title, text, ...props}: ButtonProps) => {
  return (
    <TouchableBox
      bg="transparent"
      borderBottomWidth={1}
      borderColor="brandPrimary"
      padding="small"
      justifyContent="center"
      alignItems="center"
      borderRadius="middle"
      {...props}>
      <Txt color="brandPrimary" fontSize="small" {...text}>
        {title}
      </Txt>
    </TouchableBox>
  );
};
