import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';

const EducationScreen = () => {
  const modules = [
    { 
      id: '1.1', 
      title: 'MEME KANSERİ', 
      description: 'Meme kanseri, meme dokusundaki hücrelerin kontrolsüz çoğalmasıdır.' 
    },
    { 
      id: '1.2', 
      title: 'RİSK FAKTÖRLERİ', 
      description: 'Yaş, aile öyküsü ve genetik mutasyonlar risk faktörleri arasındadır.' 
    },
    { 
      id: '1.3', 
      title: 'TARAMA PROGRAMI', 
      description: 'Düzenli mamografi ve kendi kendine muayene tarama programının parçasıdır.' 
    },
    { 
      id: '1.4', 
      title: 'BELİRTİ VE BULGULAR', 
      description: 'Memede kitle, şekil değişikliği ve deri değişikliklerine dikkat edilmelidir.' 
    },
    { 
      id: '1.5', 
      title: 'TEDAVİ YÖNTEMLERİ', 
      description: 'Cerrahi, radyoterapi ve kemoterapi başlıca tedavi yöntemleridir.' 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Meme Sağlığı Hakkında Eğitimler!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {modules.map((module) => (
          <TouchableOpacity
            key={module.id}
            style={styles.moduleCard}
            onPress={() => Alert.alert(module.title, module.description)}
          >
            <Text style={styles.moduleTitle}>{module.id} {module.title}</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
        ))}
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
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContent: {
    padding: 15,
  },
  moduleCard: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#e91e63',
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
  },
  dropdownIcon: {
    color: '#e91e63',
    fontSize: 14,
  },
});

export default EducationScreen;
