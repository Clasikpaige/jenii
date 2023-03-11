import React from 'react';
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
