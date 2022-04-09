import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Balloon} from '../../components/balloon';
import {useTheme} from 'styled-components';
import {Box} from '../../components/Box';
import {Input} from '../../components/Inputs';
import {PrimaryButton} from '../../components/Buttons';

const MESSAGE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const Chat = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: theme.colors.background}}
        contentContainerStyle={{
          padding: theme.space.middle,
        }}>
        <Balloon message={MESSAGE} other />
        <Balloon message={MESSAGE} />
      </ScrollView>

      <Box height={200} p="middle">
        <Input flex={1} multiline />
        <PrimaryButton title="Enviar" mt="middle" />
      </Box>
    </SafeAreaView>
  );
};
