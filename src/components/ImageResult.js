import { Image, StyleSheet } from 'react-native';
import imageHomem1 from '../assets/images/man-1.jpg';
import imageHomem2 from '../assets/images/man-2.jpg';
import imageHomem3 from '../assets/images/man-3.jpg';
import imageHomem4 from '../assets/images/man-4.jpg';
import imageHomem5 from '../assets/images/man-5.jpg';
import imageHomem6 from '../assets/images/man-6.jpg';
import imageMulher1 from '../assets/images/woman-1.jpg';
import imageMulher2 from '../assets/images/woman-2.jpg';
import imageMulher3 from '../assets/images/woman-3.jpg';
import imageMulher4 from '../assets/images/woman-4.jpg';
import imageMulher5 from '../assets/images/woman-5.jpg';
import imageMulher6 from '../assets/images/woman-6.jpg';

export default function ImageResult(props) {
    const { sexo, acao } = props;

    return (
        <Image 
            style={styles.image}
            source={imageMulher2} 
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