import * as MediaLibrary from 'expo-media-library';
import { Alert, Platform } from 'react-native';

export const saveImage = async (fileUri) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission Required', 'Sorry, we need media library permissions to make this work!');
    return;
  }

  try {
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync('YourAppName', asset, false);
    Alert.alert("Success", "Your image has been saved to your photo library.");
  } catch (error) {
    console.error("Error saving the image: ", error);
    Alert.alert("Error", "Failed to save the image.");
  }
};
