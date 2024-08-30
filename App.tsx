import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import Section1 from './src/Section1';
import Section2 from './src/Section2';
import TopSheet from './src/TopSheet';

const App: React.FC = () => {
  return (
    <>
      <TopSheet />
      <ScrollView style={styles.scrollViewContainer}>
          <Section1 />
          <Section2 />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer:{
    backgroundColor: 'tan',
  },
  } 
)

export default App;