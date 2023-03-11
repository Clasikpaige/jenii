import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Replace with your logo image */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food or restaurant"
        />
      </View>
      <TouchableOpacity>
        {/* Replace with your profile image */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default Header;