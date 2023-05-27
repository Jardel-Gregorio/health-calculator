import { StyleSheet, TextInput, Text, View } from 'react-native';
import { apenasNumero } from '../utils/apenasNumero';

export default function InputNumber(props) {
    const {
        title,
        placeholder,
        numero,
        setNumero,
    } = props;

    return (
        <View style={styles.container}>
            <Text  style={styles.text}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={numero}
                onChangeText={(e) => setNumero(apenasNumero(e))}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'white'
    },
    input: {
        backgroundColor: 'lightgray',
        borderRadius: 8,
        marginHorizontal: 2,
        padding: 4
    },
});

