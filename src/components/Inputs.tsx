import styled from 'styled-components';
import {
  space,
  layout,
  color,
  ColorProps,
  LayoutProps,
  SpaceProps,
  fontWeight,
  fontSize,
  borders,
  BordersProps,
  FontSizeProps,
} from 'styled-system';

export type InputProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BordersProps &
  FontSizeProps;
export const Input = styled.TextInput<InputProps>`
  ${space};
  ${color};
  ${layout};
  ${borders};
  ${fontSize}
  ${fontWeight}
`;

Input.defaultProps = {
  bg: 'backgroundSecondary',
  height: 45,
  borderWidth: 1,
  borderColor: 'onBackground',
  borderRadius: 'middle',
};
