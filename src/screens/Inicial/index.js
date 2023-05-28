import { useState } from "react";
import { Text } from "react-native";

import ButtonGender from "../../components/ButtonGender";
import ButtonResult from "../../components/ButtonResult";
import Container from '../../components/ContainerMain';
import ContainerDouble from "../../components/ContainerDouble";
import ContainerResult from "../../components/ContainerResult";
import InputNumber from "../../components/InputNumber";
import ImageResult from "../../components/ImageResult";

import { statusPeso } from "../../utils/statusPeso";

export default function Home () {
    const [ ativo, setAtivo ] = useState('Homem')
    const [ imc, setImc ] = useState('');
    const [ peso, setPeso ] = useState(0);
    const [ altura, setAltura ] = useState(0);

    const [ imagem, situacaoPeso ] = statusPeso(32);

    return (
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
                    setNumero={setPeso}
                />
                <InputNumber
                    title="Altura" 
                    placeholder={"Ex: 190"}
                    numero={altura} 
                    setNumero={setAltura}
                />
            </ContainerDouble>
            <ButtonResult title="Calcular" setImc={setImc} peso={peso} altura={altura}/>
            <ContainerResult>
                <Text style={{fontSize:16, fontWeight: "bold"}}>Seu resultado é:</Text>
                <Text style={{fontSize:30, fontWeight: "bold"}}>25</Text>
                <ImageResult sexo={ativo}/>
                <Text style={{fontSize:24, fontWeight: "bold"}}>{situacaoPeso}</Text>
            </ContainerResult>
        </Container>
    )
}