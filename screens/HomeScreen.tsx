import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const cards = [
    { title: 'Bugün Nasıl Hissediyorum?', color: '#e91e63', onPress: () => navigation.navigate('Form') },
    { title: 'Günlük İpucu', color: '#ffb300', onPress: () => Alert.alert('Sağlık İpucu', 'Meme muayenenizi düzenli olarak yapmayı unutmayın!') },
    { title: 'Eğitimler', color: '#5c6bc0', onPress: () => navigation.navigate('Education') },
    { title: 'Formlar ve Ölçekler', color: '#81c784', onPress: () => Alert.alert('Bilgi', 'Ölçekler yükleniyor') },
    { title: 'Şifre ve Bilgileri Düzenle', color: '#8e24aa', onPress: () => navigation.navigate('Profile') },
    { title: 'Kaynakça', color: '#e53935', onPress: () => Alert.alert('Bilgi', 'Kaynakça açılıyor') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.menuIcon}>☰</Text>
        <Text style={styles.headerText}>MEMESAĞLIĞIM</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {cards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, { backgroundColor: card.color }]}
              onPress={card.onPress}
            >
              <Text style={styles.cardText}>{card.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#e91e63',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {
    color: '#ffffff',
    fontSize: 24,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 120,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
