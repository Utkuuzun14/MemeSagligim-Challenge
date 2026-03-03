import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const VividPink = '#e91e63';
const BackgroundWhite = '#ffffff';

const GunlukIpucuEkrani = ({ navigation }) => {
  const ipuclari = [
    { id: 1, baslik: 'Yorgunluk Önerisi', icerik: 'Yeşil ve lifli sebzeler tüketerek enerjinizi artırabilirsiniz.', renk: '#FCE4EC' },
    { id: 2, baslik: 'Uyku Önerisi', icerik: 'Yatmadan önce ekran süresini azaltarak daha rahat uyuyabilirsiniz.', renk: '#F8BBD0' },
    { id: 3, baslik: 'Egzersiz Önerisi', icerik: 'Günde en az 30 dakika yürüyüş yaparak formunuzu koruyabilirsiniz.', renk: '#F48FB1' },
    { id: 4, baslik: 'Su Tüketimi', icerik: 'Günde en az 2 litre su içerek vücudunuzdaki toksinleri atabilirsiniz.', renk: '#F06292' },
    { id: 5, baslik: 'Stres Yönetimi', icerik: 'Nefes egzersizleri yaparak kaygı ve stres seviyenizi düşürebilirsiniz.', renk: '#EC407A' },
  ];

  return (
    <SafeAreaView style={styles.anaKapsayici}>
      <View style={styles.ustBaslik}>
        <TouchableOpacity style={styles.geriButon} onPress={() => navigation.goBack()}>
          <Text style={styles.geriButonMetni}>{'< Geri'}</Text>
        </TouchableOpacity>
        <Text style={styles.baslikMetni}>Günlük İpuçları</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.icerikKapsayici}>
        {ipuclari.map((ipucu) => (
          <View key={ipucu.id} style={[styles.kart, { backgroundColor: ipucu.renk }]}>
            <Text style={styles.kartBaslik}>{ipucu.baslik}</Text>
            <Text style={styles.kartIcerik}>{ipucu.icerik}</Text>
          </View>
        ))}
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
  },
  kart: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  kartBaslik: {
    fontSize: 20,
    fontWeight: 'bold',
    color: VividPink,
    marginBottom: 10,
  },
  kartIcerik: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    fontWeight: '500',
  },
});

export default GunlukIpucuEkrani;
