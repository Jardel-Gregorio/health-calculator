import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonResult(props) {
    const {
        title,
        acao
    } = props;

    return (
        <TouchableOpacity style={styles.button} onPress={acao}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
    
const styles = StyleSheet.create({
    button: {
        width: "90%",
        backgroundColor: 'deepskyblue',
        borderRadius: 8
    },
    text: {
        textAlign:'center',
        paddingVertical: 8,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
});