import styled from 'styled-components';
import {
  BorderProps,
  borders,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

export const boxCompose = compose(
  space,
  color,
  layout,
  flexbox,
  borders,
  position,
  zIndex,
  shadow,
);

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  ZIndexProps &
  ShadowProps;

export const Box = styled.View<BoxProps>`
  ${boxCompose}
`;

export const TouchableBox = styled.TouchableOpacity<BoxProps>`
  ${boxCompose}
`;
