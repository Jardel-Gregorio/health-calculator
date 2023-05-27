import { StyleSheet, View } from 'react-native';

export default function ContainerButtonGender({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});
