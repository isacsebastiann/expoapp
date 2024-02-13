import React, { useState, useEffect, useRef } from 'react';
import { View, Alert, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from './components/Buttons/Button.js';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './components/Buttons/CircleButton.js';
import IconButton from './components/Buttons/IconButton.js';
import EmojiPicker from "./components/EmojiActions/EmojiPicker.js";
import EmojiList from './components/EmojiActions/EmojiList.js';
import EmojiSticker from './components/EmojiActions/EmojiSticker.js';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import styles from './styles/App.styles';



import domtoimage from 'dom-to-image';

const PlaceholderImage = require("./assets/images/cursocinco.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Sorry, we need media library permissions to make this work!');
      }
    })();
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      setShowAppOptions(true);
    } else {
      Alert.alert("Image Selection", "You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(null);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const uri = await captureRef(imageRef, {
          format: "jpg",
          quality: 0.8,
        });
        await MediaLibrary.saveToLibraryAsync(uri);
        Alert.alert("Success", "Your image has been saved to your photo library.");
      } catch (error) {
        console.error("Error saving the image: ", error);
        Alert.alert("Error", "Failed to save the image.");
      }
    } else {
      // código para la web
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        //  evento de descarga para el navegador
        const link = document.createElement('a');
        link.download = 'captured-image.jpeg';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.log(e);
        Alert.alert("Error", "Failed to capture the image.");
      }
    }
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

