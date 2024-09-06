import React from 'react';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');
interface TopSheetLongProps {
  animatedOpacityLong: AnimatedStyleProp<{opacity: number}>;
}

const TopSheetLong: React.FC<TopSheetLongProps> = ({ animatedOpacityLong }) => {
  return (
    <Animated.View style={[styles.longContainer, animatedOpacityLong]}>
      <Text style={styles.text}>React Native Top Sheet</Text>
      <View style={styles.imgBox}/>
      <View style={styles.imgBox}/>
      <Text style={styles.text}>React Native Top Sheet</Text>
      <View style={styles.imgBox}/>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  longContainer: {
    flex : 1,
    flexDirection: 'column',
    zIndex: 10,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    paddingTop: height / 35,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
    marginBottom: 10,
  },
  imgBox:{
    width: '100%',
    height: 60,
    backgroundColor: '#424242',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default TopSheetLong;
