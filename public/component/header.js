[9:12 am, 11/03/2023] PAiGE: import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for restaurants or dishes"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.profileButton}>
          <Image source={require('../assets/profile.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    padding: 5,
  },
  searchInput: {
    flex: 1,
    padding: 0,
  },
  profileButton: {
    marginLeft: 10,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    padding: 5,
  },
  profileIcon: {
    width: 25,
    height: 25,
  },
});

export default Header;
[9:58 am, 11/03/2023] PAiGE: import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food or restaurant"
        />
      </View>
      <TouchableOpacity>
        <Image style={styles.profile} source={require('../assets/profile.png')} />
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
  logo: {
    width: 100,
    height: 40,
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
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Header;