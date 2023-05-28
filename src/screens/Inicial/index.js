import { useState } from "react";
import { Alert, Keyboard, Text, View } from "react-native";

import ButtonGender from "../../components/ButtonGender";
import ButtonResult from "../../components/ButtonResult";
import Container from '../../components/ContainerMain';
import ContainerDouble from "../../components/ContainerDouble";
import ContainerResult from "../../components/ContainerResult";
import InputNumber from "../../components/InputNumber";
import ImageResult from "../../components/ImageResult";

import { statusPeso } from "../../utils/statusPeso";
import { calculaIMC } from "../../utils/calculaIMC";

export default function Home () {
    const [ sexo, setSexo ] = useState('Homem')
    const [ imc, setImc ] = useState('');
    const [ peso, setPeso ] = useState('');
    const [ altura, setAltura ] = useState('');

    const [ edit, setEdit ] = useState(true);

    const [ imagem, situacaoPeso ] = statusPeso(imc, sexo);

    const calcula = () => {
        if (peso && altura) {
            const resultado = calculaIMC(peso, altura);
            setEdit(false);
            Keyboard.dismiss();
            setImc(resultado);
        } else {
            Alert.alert('Preencha os campas peso e altura antes de calcular.')
        }
    }

    const reinicia = () => {
        setPeso('');
        setAltura('');
        setImc('');
        setEdit(true);
    }

    return (
        <Container>
            <Text style={{fontSize:16 ,color:'white'}}>Selecione sexo</Text>
            <ContainerDouble>
                <ButtonGender
                    title="Homem" 
                    sexo={sexo} 
                    setSexo={setSexo}
                />
                <ButtonGender 
                    title="Mulher"
                    sexo={sexo} 
                    setSexo={setSexo}
                />
            </ContainerDouble>
            <ContainerDouble>
                <InputNumber
                    edit={edit}
                    title="Peso" 
                    placeholder={"Ex: 100"}
                    numero={peso} 
                    setNumero={setPeso}
                />
                <InputNumber
                    edit={edit}
                    title="Altura" 
                    placeholder={"Ex: 190"}
                    numero={altura} 
                    setNumero={setAltura}
                />
            </ContainerDouble>
            <ButtonResult title={edit ? "Calcular" : "Reiniciar"} acao={edit ? calcula : reinicia} />
            <ContainerResult edit={edit}>
                <Text style={{fontSize:16, fontWeight: "bold"}}>Seu resultado é:</Text>
                <Text style={{fontSize:30, fontWeight: "bold"}}>{imc}</Text>
                <ImageResult source={imagem}/>
                <Text style={{fontSize:24, fontWeight: "bold"}}>{situacaoPeso}</Text>
            </ContainerResult>
        </Container>                           
    )
}                                                                  