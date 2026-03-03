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

const KaynakcaEkrani = ({ navigation }) => {
  const kaynaklar = [
    { id: 1, baslik: 'T.C. Sağlık Bakanlığı', aciklama: 'Kanser Dairesi Başkanlığı Meme Kanseri Veri Seti (2025).' },
    { id: 2, baslik: 'Dünya Sağlık Örgütü (WHO)', aciklama: 'Uluslararası Kanser Araştırma Ajansı (IARC) Raporu.' },
    { id: 3, baslik: 'Amerikan Kanser Derneği', aciklama: 'Meme Kanseri Erken Teşhis ve Tarama Rehberi.' },
    { id: 4, baslik: 'Uluslararası Kanser Kontrol Örgütü', aciklama: 'Yaşam Kalitesi ve Destekleyici Bakım Prensipleri.' },
    { id: 5, baslik: 'Akademik Makaleler', aciklama: 'Journal of Oncology: Meme Kanseri Takibinde Mobil Uygulamalar.' },
  ];

  return (
    <SafeAreaView style={styles.anaKapsayici}>
      <View style={styles.ustBaslik}>
        <TouchableOpacity style={styles.geriButon} onPress={() => navigation.goBack()}>
          <Text style={styles.geriButonMetni}>{'< Geri'}</Text>
        </TouchableOpacity>
        <Text style={styles.baslikMetni}>Kaynakça</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.icerikKapsayici}>
        <Text style={styles.bilgiMetni}>Sistemde kullanılan akademik ve resmi kaynaklar:</Text>
        
        {kaynaklar.map((kaynak) => (
          <View key={kaynak.id} style={styles.kart}>
            <View style={styles.kartUst}>
              <View style={styles.nokta} />
              <Text style={styles.kartBaslik}>{kaynak.baslik}</Text>
            </View>
            <Text style={styles.kartAciklama}>{kaynak.aciklama}</Text>
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
  bilgiMetni: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    fontWeight: '500',
  },
  kart: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  kartUst: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nokta: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: VividPink,
    marginRight: 12,
  },
  kartBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
    color: VividPink,
  },
  kartAciklama: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    fontStyle: 'italic',
  },
});

export default KaynakcaEkrani;
