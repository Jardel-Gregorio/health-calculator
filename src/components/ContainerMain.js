import { StyleSheet, Text, View } from 'react-native';

export default function ContainerMain({children}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calcule seu IMC</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "30%",
        alignItems: 'center',
        padding: 24
    },
    text: { 
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30
     },
});

