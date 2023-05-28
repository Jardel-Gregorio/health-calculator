import { Image, StyleSheet } from 'react-native';

export default function ImageResult({source}) {
    return (
        <Image 
            style={styles.image}
            source={source} 
            resizeMode="contain"
        />
    );
}
    
const styles = StyleSheet.create({
    image: {
        height: '60%',
        marginVertical: 30
    },
});