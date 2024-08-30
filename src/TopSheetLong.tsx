import React from 'react';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import { StyleSheet, Text } from 'react-native';

interface TopSheetLongProps {
  animatedOpacityLong: AnimatedStyleProp<{opacity: number}>;
}

const TopSheetLong: React.FC<TopSheetLongProps> = ({ animatedOpacityLong }) => {
  return (
    <Animated.View style={[styles.longContainer, animatedOpacityLong]}>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
      <Text style={styles.text}>React Native Top Sheet Long</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  longContainer: {
    zIndex: 10,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
});

export default TopSheetLong;
