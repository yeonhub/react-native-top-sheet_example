import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface TopSheetShortProps {
  animatedOpacityShort: AnimatedStyleProp<{opacity: number; zIndex: number}>;
}

const TopSheetShort: React.FC<TopSheetShortProps> = ({
  animatedOpacityShort,
}) => {
  return (
    <Animated.View style={[styles.shortContainer, animatedOpacityShort]}>
      <Text style={styles.text}>React Native Top Sheet Short</Text>
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
    height: height / 10,
    alignSelf: 'center',
    bottom: height / 24,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
});

export default TopSheetShort;
