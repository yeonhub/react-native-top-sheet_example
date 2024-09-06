import React from 'react';
import { View, StyleSheet } from 'react-native';

const HamMenu: React.FC = () => {
  return (
    <View style={styles.hamMenu}>
    <View style={styles.line} />
    <View style={styles.line} />
    <View style={styles.line} />
  </View>
  );
};

const styles = StyleSheet.create({
    hamMenu: {
        width: 30,
        height: 30,
        justifyContent: 'space-between',
    },
    line: {
       height: 3,
        backgroundColor: 'black',
},
 });
export default HamMenu;