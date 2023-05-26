import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Input from './components/Input';

export default function ImcApp() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        <Input />
      </View>
    </SafeAreaView>
  );
}
