import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet, SafeAreaView } from 'react-native';
export default function FormlarEkrani({ navigation }) {
const formlar = [
{ ad: 'Kişisel Bilgi Formu', emoji: '📝' },
{ ad: 'Yaşam Kalitesi Ölçeği', emoji: '🌟' },
{ ad: 'Destekleyici Bakım Gereksinimleri', emoji: '🤝' },
{ ad: 'Hastalık Kabul Ölçeği', emoji: '🩺' }
];

return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.geri}>{'< Geri'}</Text>
</TouchableOpacity>
<Text style={styles.baslik}>Formlar ve Ölçekler</Text>
</View>
<ScrollView style={{ padding: 20 }}>
{formlar.map((item, index) => (
<TouchableOpacity key={index} style={styles.kart} onPress={() => Alert.alert('Açılıyor', `${item.ad} sayfasına yönlendiriliyorsunuz...`)}>
<Text style={styles.emoji}>{item.emoji}</Text>
<Text style={styles.kartMetni}>{item.ad}</Text>
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
kart: { backgroundColor: '#fff', padding: 20, borderRadius: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
emoji: { fontSize: 24, marginRight: 15 },
kartMetni: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 }
});
