import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [names, setNames] = useState(["Zakaria", "Ibrahim", "Elyoubi"]);
  const [newName, setNewName] = useState(""); // Pour stocker le nom tapé

  const addName = () => {
    if (newName.trim() === "") return; // Vérifie si le champ n'est pas vide
    setNames([...names, newName]);     // Ajoute le nom dans la liste
    setNewName("");                    // Vide le champ après ajout
  };

  const deleteName = (indexToDelete) => {
    setNames(names.filter((_, index) => index !== indexToDelete));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste de Noms</Text>

      {/* Affichage de la liste */}
      {names.map((name, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.item}>{name}</Text>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => deleteName(index)}
          >
            <Text style={styles.deleteButtonText}>×</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Champ de saisie */}
      <TextInput
        style={styles.input}
        placeholder="Entrez un nom"
        value={newName}
        onChangeText={setNewName}
      />

      {/* Bouton pour ajouter */}
      <View style={styles.buttonContainer}>
        <Button title="Ajouter le nom" onPress={addName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
  },
  item: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    marginTop: 10,
  },
});