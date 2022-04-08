import {boxCompose, BoxProps} from './Box';
import {
  ColorProps,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  LineHeightProps,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
  system,
} from 'styled-system';
import {TextProps as TextPropsRN} from 'react-native';
import styled from 'styled-components';

export type TxtProps = TypographyProps &
  TextStyleProps &
  BoxProps &
  FontSizeProps &
  FontWeightProps &
  ColorProps &
  FontFamilyProps &
  TextAlignProps &
  LineHeightProps &
  TextPropsRN;

export type TxtComponentProps = TxtProps & TextPropsRN;
export const Txt = styled.Text<TxtComponentProps>`
  ${typography}
  ${textStyle}
  ${boxCompose}
  ${fontSize}
  ${fontWeight}
  ${system({
    textTransform: true,
  })}
`;
Txt.defaultProps = {
  color: 'onBackground',
  fontSize: 'middle',
};
