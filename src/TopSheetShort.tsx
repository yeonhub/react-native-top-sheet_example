import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import HamMenu from './HamMenu';

const { width, height } = Dimensions.get('window');

interface TopSheetShortProps {
  animatedOpacityShort: AnimatedStyleProp<{opacity: number; zIndex: number}>;
}

const TopSheetShort: React.FC<TopSheetShortProps> = ({
  animatedOpacityShort,
}) => {
  return (
    <Animated.View style={[styles.shortContainer, animatedOpacityShort]}>
      <View style={styles.imgBox}/>
      <Text style={styles.text}>React Native Top Sheet</Text>
    <HamMenu/>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  shortContainer: {
    zIndex: 10,
    position: 'absolute',
    flexDirection: 'row',
    width: '90%',
    paddingTop: height / 35,
    alignSelf: 'center',
    bottom: height / 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgBox:{
    width: 60,
    height: 60,
    backgroundColor: '#424242',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TopSheetShort;
