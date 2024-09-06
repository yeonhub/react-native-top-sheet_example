import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const {width, height} = Dimensions.get('window');

const Section2: React.FC = () => {
  return (
    <View style = {styles.section2Container}>     
     <Text style = {styles.text}>Section2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section2Container : {
    height : height / 2.8,
    backgroundColor: 'tan',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
    marginLeft: 10,
  }
 });
export default Section2;