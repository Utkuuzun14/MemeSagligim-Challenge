import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Ekranları içe aktar
import GirisEkrani from './src/ekranlar/GirisEkrani';
import KayitEkrani from './src/ekranlar/KayitEkrani';
import AnaEkran from './src/ekranlar/AnaEkran';
import FormEkrani from './src/ekranlar/FormEkrani';
import ProfilEkrani from './src/ekranlar/ProfilEkrani';
import EgitimEkrani from './src/ekranlar/EgitimEkrani';
import GunlukIpucuEkrani from './src/ekranlar/GunlukIpucuEkrani';
import FormlarEkrani from './src/ekranlar/FormlarEkrani';
import KaynakcaEkrani from './src/ekranlar/KaynakcaEkrani';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName="Giris"
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: '#ffffff' },
            }}
          >
            <Stack.Screen name="Giris" component={GirisEkrani} />
            <Stack.Screen name="Kayit" component={KayitEkrani} />
            <Stack.Screen name="Ana" component={AnaEkran} />
          <Stack.Screen name="Form" component={FormEkrani} />
          <Stack.Screen name="Profil" component={ProfilEkrani} />
          <Stack.Screen name="Egitim" component={EgitimEkrani} />
          <Stack.Screen name="GunlukIpucu" component={GunlukIpucuEkrani} />
          <Stack.Screen name="Formlar" component={FormlarEkrani} />
          <Stack.Screen name="Kaynakca" component={KaynakcaEkrani} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);

export default App;
