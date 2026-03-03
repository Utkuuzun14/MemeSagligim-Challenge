import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

const VividPink = '#e91e63';
const BackgroundWhite = '#ffffff';

const AnaEkran = ({ navigation }) => {
  const kartlar = [
    { id: 1, baslik: 'Günlük İpucu', ikon: '💡', renk: '#FF80AB', rota: 'GunlukIpucu' },
    { id: 2, baslik: 'Sağlık Formu', ikon: '📋', renk: '#F06292', rota: 'Form' },
    { id: 3, baslik: 'Eğitimler', ikon: '📚', renk: '#EC407A', rota: 'Egitim' },
    { id: 4, baslik: 'Formlar', ikon: '📝', renk: '#D81B60', rota: 'Formlar' },
    { id: 5, baslik: 'Profilim', ikon: '👤', renk: '#C2185B', rota: 'Profil' },
    { id: 6, baslik: 'Kaynakça', ikon: '📖', renk: '#AD1457', rota: 'Kaynakca' },
  ];

  const navigasyonHandler = (rota) => {
    if (rota) {
      navigation.navigate(rota);
    } else {
      Alert.alert('Bilgi', 'Bu sayfa yapım aşamasında.');
    }
  };

  return (
    <SafeAreaView style={styles.anaKapsayici}>
      <ScrollView contentContainerStyle={styles.scrollIcerik}>
        <View style={styles.baslikKapsayici}>
          <Text style={styles.anaBaslik}>Meme Kanseri</Text>
          <View style={styles.baslikCizgisi} />
          <Text style={styles.altMetin}>Yaşam Kalitesi Takip Sistemi</Text>
        </View>

        <View style={styles.izgara}>
          {kartlar.map((kart) => (
            <TouchableOpacity
              key={kart.id}
              style={[styles.kart, { backgroundColor: kart.renk }]}
              onPress={() => navigasyonHandler(kart.rota)}
              activeOpacity={0.8}
            >
              <Text style={styles.kartIkon}>{kart.ikon}</Text>
              <Text style={styles.kartMetni}>{kart.baslik}</Text>
            </TouchableOpacity>
          ))}
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
  scrollIcerik: {
    padding: 20,
    paddingTop: 40,
  },
  baslikKapsayici: {
    alignItems: 'center',
    marginBottom: 40,
  },
  anaBaslik: {
    fontSize: 42,
    fontWeight: 'bold',
    color: VividPink,
    letterSpacing: 1,
  },
  baslikCizgisi: {
    width: 60,
    height: 4,
    backgroundColor: VividPink,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 2,
  },
  altMetin: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  izgara: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  kart: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  kartIkon: {
    fontSize: 40,
    marginBottom: 10,
  },
  kartMetni: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AnaEkran;
