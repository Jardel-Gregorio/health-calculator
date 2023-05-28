import { StyleSheet, View } from 'react-native';

export default function ContainerResult({children}) {
    
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        borderRadius: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 24
    },
});
