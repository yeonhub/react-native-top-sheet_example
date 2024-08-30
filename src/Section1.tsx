import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const {width, height} = Dimensions.get('window');

const Section1: React.FC = () => {
  return (
    <View style = {styles.section1Container}>
      <Text style = {styles.text}>Section1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section1Container : {
    height : height / 2.4,
    backgroundColor: '#ffffff',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  }
 });
export default Section1;