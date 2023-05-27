import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Home from './screens/Inicial';

export default function ImcApp() {

  return (
    <SafeAreaView>
      <View style={{height: '100%', backgroundColor: 'darkblue'}}>
        <StatusBar style="auto" />
          <Home />
      </View>
    </SafeAreaView>
  );
}
