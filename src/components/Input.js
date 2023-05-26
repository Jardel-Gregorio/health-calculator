import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Input() {
    const [ texto, setTexto ] = useState('');

    const handleInputChange = (text) => {
        // Remove pontos (.) e vírgulas (,) usando expressão regular
        const novoTexto = text.replace(/[.,]/g, '');
        setTexto(novoTexto);
    }

    return (
        <TextInput
            style={styles.input}
            value={texto}
            onChangeText={(e) => handleInputChange(e)}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'blue',
    },
});

