import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import ButtonGender from './components/ButtonGender';
import ContainerButtonGender from './components/ContainerButtonGender';
import Container from './components/ContainerMain';
import Input from './components/Input';

export default function ImcApp() {
  const [ ativo, setAtivo ] = useState('Homem')
  return (
    <SafeAreaView>
      <View style={{height: '100%', backgroundColor: 'deepskyblue'}}>
        <StatusBar style="auto" />
        <Container>
          <ContainerButtonGender>
            <ButtonGender title="Homem" ativo={ativo} setAtivo={setAtivo}/>
            <ButtonGender title="Mulher"ativo={ativo} setAtivo={setAtivo}/>
          </ContainerButtonGender>
          <Input />
        </Container>
      </View>
    </SafeAreaView>
  );
}
