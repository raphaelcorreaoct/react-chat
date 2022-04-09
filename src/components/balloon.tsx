import React from 'react';
import {Box} from './Box';
import {Txt} from './Text';

export const Balloon = ({
  message,
  other = false,
}: {
  message: string;
  other?: boolean;
}) => {
  return (
    <Box
      flexDirection="row"
      width="100%"
      justifyContent={other ? 'flex-start' : 'flex-end'}>
      <Box
        bg={other ? 'brandSecondary' : 'brandPrimary'}
        paddingX="middle"
        paddingY="middle"
        borderRadius="middle"
        maxWidth="80%"
        mb="big">
        <Txt color={other ? 'onBrandSecondary' : 'onBrandPrimary'}>
          {message}
        </Txt>
      </Box>
    </Box>
  );
};
