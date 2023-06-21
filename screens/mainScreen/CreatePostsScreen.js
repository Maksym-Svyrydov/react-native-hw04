import React from 'react';

import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function NewPostScreen() {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo);
  };
  const addPhoto = async (e) => {
    if (photo === '') {
      const photoOnDevice = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!photoOnDevice.canceled) {
        setPhoto((prevState) => ({ ...prevState, photo: photoOnDevice.uri }));
      }
    } else {
      setPhoto((prevState) => ({ ...prevState, photo: '' }));
    }
  };
  return (
    <View style={styles.container}>
      {photo === '' ? (
        <View style={styles.photoWrapp}>
          <TouchableOpacity onPress={takePhoto}>
            <View style={styles.iconBg}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <Camera style={styles.camera} ref={setCamera}>
          <View style={styles.takePhotoContaainer}>
            <Image
              sourse={{ uri: photo }}
              style={{ height: 100, width: 100 }}
            />
          </View>

          <TouchableOpacity onPress={takePhoto}>
            <View style={styles.iconBg}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </View>
          </TouchableOpacity>
        </Camera>
      )}

      <TouchableOpacity onPress={addPhoto}>
        <Text style={styles.cameraText}>Завантажте фото</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image
          style={styles.logoutIcon}
          source={require('../../img/arrow-left.svg')}
        />
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  // header: {
  //   position: 'absolute',
  //   flexDirection: 'row',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   minWidth: 375,
  //   minHeight: 88,
  //   paddingTop: 55,
  //   paddingBottom: 16,
  //   paddingHorizontal: 16,
  //   borderWidth: 1,
  //   borderTop: 1,
  //   alignItems: 'center',
  //   borderColor: '#BDBDBD',
  //   boxShadow: '0px -0.5px 0px rgba(0, 0, 0, 0.3)',
  //   backdropFilter: 'blur(13.5914px)',
  // },
  // headerTxt: {
  //   justifyContent: 'center',
  //   fontFamily: 'Roboto',
  //   fontStyle: 'normal',
  //   fontWeight: '500',
  //   fontSize: 17,
  //   lineHeight: 22,
  //   textAlign: 'center',
  //   letterSpacing: -0.408,
  //   color: '#212121',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   padding: 0,
  // },
  // logoutIcon: {
  //   position: 'absolute',
  //   right: 0,
  //   bottom: -12,
  //   width: 24,
  //   height: 24,
  // },
  photoWrapp: {
    backgroundColor: '#E8E8E8',
    backgroundColor: 'rgba(232, 232, 232, 1)',
    width: '100%',
    height: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  iconBg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  camera: {
    width: '100%',
    height: 267,
    // backgroundColor: '#E8E8E8',
    backgroundColor: 'rgba(232, 232, 232, 1)',
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  cameraText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,

    color: '#BDBDBD',
    marginTop: 8,
  },
  takePhotoContaainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    borderColor: '#fff',
    borderWidth: 1,
    // height: 200,
    // width: 200,
  },
});
