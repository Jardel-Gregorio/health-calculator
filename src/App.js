import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import ButtonGender from './components/ButtonGender';
import ContainerDouble from './components/ContainerDouble';
import Container from './components/ContainerMain';
import InputNumber from './components/InputNumber';

export default function ImcApp() {
  const [ ativo, setAtivo ] = useState('Homem')
  const [ peso, setPeso ] = useState(0);
  const [ altura, setAltura ] = useState(0);

  return (
    <SafeAreaView>
      <View style={{height: '100%', backgroundColor: 'darkblue'}}>
        <StatusBar style="auto" />
        <Container>
          <Text style={{fontSize:16 ,color:'white'}}>Selecione gênero</Text>
          <ContainerDouble>
            <ButtonGender 
              title="Homem" 
              ativo={ativo} 
              setAtivo={setAtivo}
            />
            <ButtonGender 
              title="Mulher"
              ativo={ativo} 
              setAtivo={setAtivo}
            />
          </ContainerDouble>
          <ContainerDouble>
            <InputNumber 
              title="Peso" 
              placeholder={"Ex: 100"}
              numero={peso} 
              setNumero={setPeso}/>
            <InputNumber
              title="Altura" 
              placeholder={"Ex: 190"}
              numero={altura} 
              setNumero={setAltura}/>
          </ContainerDouble>
        </Container>
      </View>
    </SafeAreaView>
  );
}
