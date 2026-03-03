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
  ScrollView,
} from 'react-native';

const VividPink = '#e91e63';
const BackgroundWhite = '#ffffff';
const TextDarkGray = '#333333';
const InputLightGray = '#f5f5f5';

const KayitEkrani = ({ navigation }) => {
  const [isim, isimGuncelle] = useState('');
  const [eposta, epostaGuncelle] = useState('');
  const [sifre, sifreGuncelle] = useState('');
  const [sifreTekrar, sifreTekrarGuncelle] = useState('');

  const kayitOlHandler = () => {
    if (isim.trim() === '' || eposta.trim() === '' || sifre.trim() === '' || sifreTekrar.trim() === '') {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    if (sifre !== sifreTekrar) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor.');
      return;
    }

    Alert.alert('Başarılı', 'Kayıt işleminiz tamamlandı, giriş yapılıyor...', [
      { text: 'Tamam', onPress: () => navigation.navigate('Ana') }
    ]);
  };

  return (
    <SafeAreaView style={styles.anaKapsayici}>
      <View style={styles.ustCubuk}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.geriButonu}
        >
          <Text style={styles.geriButonMetni}>{'< Geri'}</Text>
        </TouchableOpacity>
        <Text style={styles.ustCubukBaslik}>Kayıt Ol</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.klavyeKapsayici}
      >
        <ScrollView contentContainerStyle={styles.scrollIcerik}>
          <View style={styles.ustBaslikKapsayici}>
            <Text style={styles.ustBaslikMetni}>Yeni Hesap</Text>
            <Text style={styles.altBaslikMetni}>Bilgilerinizi giriniz</Text>
          </View>

          <View style={styles.formKapsayici}>
            <TextInput
              style={styles.girdi}
              placeholder="İsim-Soyisim"
              placeholderTextColor="#999"
              value={isim}
              onChangeText={isimGuncelle}
            />
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
              placeholder="Şifre"
              placeholderTextColor="#999"
              value={sifre}
              onChangeText={sifreGuncelle}
              secureTextEntry
            />
            <TextInput
              style={styles.girdi}
              placeholder="Şifre Tekrar"
              placeholderTextColor="#999"
              value={sifreTekrar}
              onChangeText={sifreTekrarGuncelle}
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.anaButon}
              onPress={kayitOlHandler}
              activeOpacity={0.8}
            >
              <Text style={styles.anaButonMetni}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  anaKapsayici: {
    flex: 1,
    backgroundColor: BackgroundWhite,
  },
  ustCubuk: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: VividPink,
    padding: 15,
    paddingTop: Platform.OS === 'ios' ? 10 : 40,
  },
  geriButonu: {
    padding: 5,
  },
  geriButonMetni: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ustCubukBaslik: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 60, // Geri butonunu dengelemek için
  },
  klavyeKapsayici: {
    flex: 1,
  },
  scrollIcerik: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  ustBaslikKapsayici: {
    marginBottom: 30,
    alignItems: 'center',
  },
  ustBaslikMetni: {
    fontSize: 32,
    fontWeight: 'bold',
    color: VividPink,
    marginBottom: 5,
  },
  altBaslikMetni: {
    fontSize: 18,
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
    marginTop: 10,
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
});

export default KayitEkrani;
