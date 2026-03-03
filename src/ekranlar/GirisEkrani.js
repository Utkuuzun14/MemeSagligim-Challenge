import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const VividPink = '#e91e63';
const BackgroundWhite = '#ffffff';
const TextDarkGray = '#333333';
const InputLightGray = '#f5f5f5';

const GirisEkrani = ({ navigation }) => {
  const [eposta, epostaGuncelle] = useState('');
  const [sifre, sifreGuncelle] = useState('');

  const girisYapHandler = () => {
    if (eposta.trim() === '' || sifre.trim() === '') {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }
    navigation.navigate('Ana');
  };

  return (
    <SafeAreaView style={styles.anaKapsayici}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.klavyeKapsayici}
      >
        <View style={styles.ustBaslikKapsayici}>
          <Text style={styles.ustBaslikMetni}>Meme Kanseri</Text>
          <Text style={styles.altBaslikMetni}>Hoşgeldiniz!</Text>
        </View>

        <View style={styles.formKapsayici}>
          <TextInput
            style={styles.girdi}
            placeholder="E-posta Adresiniz"
            placeholderTextColor="#999"
            value={eposta}
            onChangeText={epostaGuncelle}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.girdi}
            placeholder="Şifreniz"
            placeholderTextColor="#999"
            value={sifre}
            onChangeText={sifreGuncelle}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.anaButon}
            onPress={girisYapHandler}
            activeOpacity={0.8}
          >
            <Text style={styles.anaButonMetni}>Giriş Yap</Text>
          </TouchableOpacity>

            <TouchableOpacity
              style={styles.cerceveliButon}
              onPress={() => Alert.alert('Bilgi', 'Kayıt işlemi şu an bakımdadır, lütfen doğrudan Giriş Yap butonunu kullanın.')}
              activeOpacity={0.8}
            >
            <Text style={styles.cerceveliButonMetni}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  anaKapsayici: {
    flex: 1,
    backgroundColor: BackgroundWhite,
  },
  klavyeKapsayici: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  ustBaslikKapsayici: {
    marginBottom: 40,
    alignItems: 'center',
  },
  ustBaslikMetni: {
    fontSize: 40,
    fontWeight: 'bold',
    color: VividPink,
    marginBottom: 10,
  },
  altBaslikMetni: {
    fontSize: 24,
    color: TextDarkGray,
  },
  formKapsayici: {
    width: '100%',
  },
  girdi: {
    backgroundColor: InputLightGray,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    fontSize: 16,
    color: TextDarkGray,
  },
  anaButon: {
    backgroundColor: VividPink,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  anaButonMetni: {
    color: BackgroundWhite,
    fontSize: 18,
    fontWeight: '600',
  },
  cerceveliButon: {
    backgroundColor: BackgroundWhite,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: VividPink,
  },
  cerceveliButonMetni: {
    color: VividPink,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default GirisEkrani;
