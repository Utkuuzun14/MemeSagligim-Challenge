import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

const VividPink = '#e91e63';
const BackgroundWhite = '#ffffff';

const ProfilEkrani = ({ navigation }) => {
  const [isim, setIsim] = useState('Ayşe');
  const [soyisim, setSoyisim] = useState('Yılmaz');
  const [eposta, setEposta] = useState('ayse@ornek.com');
  const [telefon, setTelefon] = useState('0555 123 4567');

  const kaydetHandler = () => {
    Alert.alert('Güncellendi', 'Bilgiler başarıyla kaydedildi!', [
      { text: 'Tamam', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.anaKapsayici}>
      <View style={styles.ustBaslik}>
        <TouchableOpacity style={styles.geriButon} onPress={() => navigation.goBack()}>
          <Text style={styles.geriButonMetni}>{'< Geri'}</Text>
        </TouchableOpacity>
        <Text style={styles.baslikMetni}>Profilim</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.icerikKapsayici}>
        <View style={styles.profilIkonu}>
          <Text style={styles.profilIkonuMetni}>AY</Text>
        </View>

        <View style={styles.formKapsayici}>
          <Text style={styles.etiketMetni}>İsim</Text>
          <TextInput
            style={styles.girdi}
            value={isim}
            onChangeText={setIsim}
            placeholder="İsminiz"
          />

          <Text style={styles.etiketMetni}>Soyisim</Text>
          <TextInput
            style={styles.girdi}
            value={soyisim}
            onChangeText={setSoyisim}
            placeholder="Soyisminiz"
          />

          <Text style={styles.etiketMetni}>E-posta</Text>
          <TextInput
            style={styles.girdi}
            value={eposta}
            onChangeText={setEposta}
            keyboardType="email-address"
            placeholder="E-posta adresiniz"
          />

          <Text style={styles.etiketMetni}>Telefon</Text>
          <TextInput
            style={styles.girdi}
            value={telefon}
            onChangeText={setTelefon}
            keyboardType="phone-pad"
            placeholder="Telefon numaranız"
          />

          <TouchableOpacity style={styles.anaButon} onPress={kaydetHandler}>
            <Text style={styles.anaButonMetni}>Bilgileri Güncelle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  anaKapsayici: {
    flex: 1,
    backgroundColor: BackgroundWhite,
  },
  ustBaslik: {
    height: 80,
    backgroundColor: VividPink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  geriButon: {
    padding: 10,
  },
  geriButonMetni: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  baslikMetni: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icerikKapsayici: {
    padding: 20,
    alignItems: 'center',
  },
  profilIkonu: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f8bbd0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: VividPink,
  },
  profilIkonuMetni: {
    fontSize: 36,
    color: VividPink,
    fontWeight: 'bold',
  },
  formKapsayici: {
    width: '100%',
  },
  etiketMetni: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  girdi: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#eee',
  },
  anaButon: {
    backgroundColor: VividPink,
    padding: 18,
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
    fontWeight: 'bold',
  },
});

export default ProfilEkrani;
