import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';

const FormScreen = ({ navigation }: any) => {
  const [pain, setPain] = useState(false);
  const [fatigue, setFatigue] = useState(false);
  const [sleepIssues, setSleepIssues] = useState(false);
  const [anxiety, setAnxiety] = useState(false);
  const [eatingIssues, setEatingIssues] = useState(false);

  const handleSave = () => {
    Alert.alert('Başarılı', 'Form kaydedildi');
    navigation.goBack();
  };

  const questions = [
    { label: 'Ağrı', value: pain, setter: setPain },
    { label: 'Yorgunluk', value: fatigue, setter: setFatigue },
    { label: 'Uyku ile ilgili sorunlar', value: sleepIssues, setter: setSleepIssues },
    { label: 'Kaygı - Stres', value: anxiety, setter: setAnxiety },
    { label: 'Yeme ile ilgili', value: eatingIssues, setter: setEatingIssues },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kendinize Uygun Şekilde Formu Doldurun</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {questions.map((q, index) => (
          <View key={index} style={styles.questionItem}>
            <Text style={styles.questionLabel}>{q.label}</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>{q.value ? 'Evet' : 'Hayır'}</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#e91e63' }}
                thumbColor={q.value ? '#ffffff' : '#f4f3f4'}
                onValueChange={q.setter}
                value={q.value}
              />
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Formu Kaydet</Text>
        </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContent: {
    padding: 20,
  },
  questionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  questionLabel: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginRight: 10,
    fontSize: 14,
    color: '#666666',
  },
  saveButton: {
    marginTop: 30,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e91e63',
  },
  saveButtonText: {
    color: '#e91e63',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormScreen;
