import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet, SafeAreaView } from 'react-native';
export default function FormEkrani({ navigation }) {
const [cevaplar, setCevaplar] = useState({});
const secimYap = (id, cevap) => setCevaplar({ ...cevaplar, [id]: cevap });

const Soru = ({ baslik, emoji, id }) => (
<View style={styles.soruKutusu}>
<Text style={styles.soruMetni}>{emoji} {baslik}</Text>
<View style={styles.secenekler}>
<TouchableOpacity style={[styles.buton, cevaplar[id] === 'Evet' && styles.seciliButon]} onPress={() => secimYap(id, 'Evet')}>
<Text style={[styles.butonMetni, cevaplar[id] === 'Evet' && styles.seciliMetin]}>Evet</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.buton, cevaplar[id] === 'Hayır' && styles.seciliButon]} onPress={() => secimYap(id, 'Hayır')}>
<Text style={[styles.butonMetni, cevaplar[id] === 'Hayır' && styles.seciliMetin]}>Hayır</Text>
</TouchableOpacity>
</View>
</View>
);

return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.geri}>{'< Geri'}</Text>
</TouchableOpacity>
<Text style={styles.baslik}>Nasıl Hissediyorum?</Text>
</View>
<ScrollView style={{ padding: 20 }}>
<Soru baslik="Bugün herhangi bir ağrınız var mı?" emoji="🤕" id="agri" />
<Soru baslik="Kendinizi yorgun hissediyor musunuz?" emoji="😴" id="yorgunluk" />
<Soru baslik="Uyku düzeninizde bozukluk var mı?" emoji="🌙" id="uyku" />
<Soru baslik="Kaygı veya stres hissediyor musunuz?" emoji="😟" id="kaygi" />
<Soru baslik="Yeme içme bozukluğu yaşıyor musunuz?" emoji="🍽️" id="yeme" />

<TouchableOpacity style={styles.kaydetButon} onPress={() => Alert.alert('Başarılı', 'Form yanıtlarınız başarıyla kaydedildi!', [{ text: 'Tamam', onPress: () => navigation.goBack() }])}>
<Text style={styles.kaydetMetni}>✅ Formu Kaydet</Text>
</TouchableOpacity>
</ScrollView>
</SafeAreaView>
);
}
const styles = StyleSheet.create({
header: { backgroundColor: '#e91e63', padding: 20, paddingTop: 40, flexDirection: 'row', alignItems: 'center' },
geri: { color: '#fff', fontSize: 18, marginRight: 15, fontWeight: 'bold' },
baslik: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
soruKutusu: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
soruMetni: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
secenekler: { flexDirection: 'row', justifyContent: 'space-between' },
buton: { flex: 1, borderWidth: 1, borderColor: '#e91e63', paddingVertical: 10, borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
seciliButon: { backgroundColor: '#e91e63' },
butonMetni: { color: '#e91e63', fontWeight: 'bold', fontSize: 16 },
seciliMetin: { color: '#fff' },
kaydetButon: { backgroundColor: '#e91e63', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 10, marginBottom: 40, shadowColor: '#e91e63', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
kaydetMetni: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
