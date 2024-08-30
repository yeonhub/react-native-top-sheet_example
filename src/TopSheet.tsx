import React from 'react';
import {Dimensions, StyleSheet, ViewStyle} from 'react-native';
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import TopSheetShort from './TopSheetShort';
import TopSheetLong from './TopSheetLong';
import TopSheetBtn from './TopSheetBtn';

const {width, height} = Dimensions.get('window');


const TopSheet = ():JSX.Element => {
  const minSheetHeight = height / 6;
  const maxSheetHeight = height / 2;

  const sheetHeight = useSharedValue<number>(minSheetHeight);
  const context = useSharedValue<{y: number}>({y: 0});

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: sheetHeight.value,
    };
  });

  const animatedOpacityShort = useAnimatedStyle(() => {
    const minSheetHeight = height / 6;
    const maxSheetHeight = height / 2.4;
    const opacityRange = maxSheetHeight - minSheetHeight;

    let opacity: number = (maxSheetHeight - sheetHeight.value) / opacityRange;

    opacity = Math.max(0, Math.min(opacity, 1));

    const zIndex: number = opacity === 1 ? 10 : -10;

    return {
      opacity,
      zIndex,
    } as { opacity: number; zIndex: number };
  });

  const animatedOpacityLong = useAnimatedStyle(() => {
    const opacityRange = maxSheetHeight - minSheetHeight;

    let opacity: number = (maxSheetHeight - sheetHeight.value) / opacityRange;

    opacity = 1 - Math.max(0, Math.min(opacity, 1));

    return {
      opacity,
    } as { opacity: number;};
  });

  const toggleHeight = () => {
    sheetHeight.value = withSpring(
      sheetHeight.value === minSheetHeight ? maxSheetHeight : minSheetHeight,
      {
        damping: 10,
        stiffness: 400,
        overshootClamping: true,
      },
    );
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: sheetHeight.value};
    })
    .onUpdate((e) => {
      const newValue = e.translationY + context.value.y;
      sheetHeight.value = Math.min(
        Math.max(newValue, minSheetHeight),
        maxSheetHeight,
      );
    })
    .onEnd((e) => {
      if (e.velocityY > 0) {
        sheetHeight.value = withSpring(maxSheetHeight, {
          damping: 10,
          stiffness: 400,
          overshootClamping: true,
        });
      } else {
        sheetHeight.value = withSpring(minSheetHeight, {
          damping: 10,
          stiffness: 400,
          overshootClamping: true,
        });
      }
    });

  return (
    <Animated.View style={[styles.containerOut, animatedStyles]}>
      <GestureHandlerRootView>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.container, animatedStyles]}>
          <TopSheetShort
              animatedOpacityShort={animatedOpacityShort}
              toggleHeight={toggleHeight}
            />
            <TopSheetLong
              animatedOpacityLong={animatedOpacityLong}
              toggleHeight={toggleHeight}
            />
            <TopSheetBtn toggleHeight={toggleHeight} />
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'gray',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  } as ViewStyle,
  containerOut: {
    backgroundColor: '#FFFFFF',
  } as ViewStyle,
});

export default TopSheet;
