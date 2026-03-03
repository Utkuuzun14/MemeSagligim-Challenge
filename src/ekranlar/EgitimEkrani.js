import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function EgitimEkrani({ navigation }) {
  const [acikKart, setAcikKart] = useState(null);
  const egitimler = [
    { id: '1', baslik: '1.1 Meme Kanseri Nedir?', icerik: 'Bu eğitime Sağlık Bakanlığı web sitesinden ulaşabilirsiniz.' },
    { id: '2', baslik: '1.2 Risk Faktörleri Nelerdir?', icerik: 'Risk faktörlerini Dünya Sağlık Örgütü (WHO) sayfasından inceleyebilirsiniz.' },
    { id: '3', baslik: '1.3 Tarama Programları', icerik: 'KETEM merkezleri üzerinden tarama programı detaylarına ulaşabilirsiniz.' },
    { id: '4', baslik: '1.4 Kendi Kendine Muayene', icerik: 'Muayene adımlarını anlatan videolara Sağlık Bakanlığı YouTube kanalından bakabilirsiniz.' },
    { id: '5', baslik: '1.5 Beslenme ve Yaşam Tarzı', icerik: 'Sağlıklı beslenme rehberlerine diyetisyen dernekleri sayfalarından ulaşabilirsiniz.' },
    { id: '6', baslik: '1.6 Psikolojik Destek', icerik: 'Psikososyal destek için hastanelerin onkoloji departmanlarına başvurabilirsiniz.' }
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.geri}>{'< Geri'}</Text>
        </TouchableOpacity>
        <Text style={styles.baslik}>Eğitimler</Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        {egitimler.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.kart} 
            onPress={() => setAcikKart(acikKart === item.id ? null : item.id)}
          >
            <Text style={styles.kartMetni}>{item.baslik}</Text>
            {acikKart === item.id && (
              <Text style={styles.kartIcerik}>{item.icerik}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#e91e63', padding: 20, paddingTop: 40, flexDirection: 'row', alignItems: 'center' },
  geri: { color: '#fff', fontSize: 18, marginRight: 15, fontWeight: 'bold' },
  baslik: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  kart: { backgroundColor: '#f5f5f5', padding: 20, borderRadius: 15, marginBottom: 15, borderLeftWidth: 5, borderLeftColor: '#e91e63' },
  kartMetni: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  kartIcerik: { fontSize: 14, color: '#666', marginTop: 10, borderTopWidth: 1, borderTopColor: '#ddd', paddingTop: 10 }
});
