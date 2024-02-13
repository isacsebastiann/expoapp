import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Gestos 
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      scaleImage.value = withSpring(scaleImage.value === imageSize ? imageSize * 2 : imageSize);
    });

  const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    });

  // Estilos 
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }, { translateY: translateY.value }],
      top: -350,
    };
  });

  return (
    <GestureDetector gesture={Gesture.Race(drag, doubleTap)}>
      <Animated.View style={containerStyle}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[{ width: imageSize, height: imageSize }, imageStyle]}
        />
      </Animated.View>
    </GestureDetector>
  );
}
