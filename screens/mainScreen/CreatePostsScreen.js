import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
export default function NewPostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        <TouchableOpacity style={{}} onPress={() => {}}>
          <View style={styles.iconBg}>
            <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
          </View>
        </TouchableOpacity>
      </Camera>
      <Text style={styles.cameraText}>Завантажте фото</Text>
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
  header: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    top: 0,
    minWidth: 375,
    minHeight: 88,
    paddingTop: 55,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderTop: 1,
    alignItems: 'center',
    borderColor: '#BDBDBD',
    boxShadow: '0px -0.5px 0px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(13.5914px)',
  },
  headerTxt: {
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.408,
    color: '#212121',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
  },
  logoutIcon: {
    position: 'absolute',
    right: 0,
    bottom: -12,
    width: 24,
    height: 24,
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
    FontFamily: 'Roboto',
    FontStyle: 'Regular',
    FontSize: 16,
    LineHeight: 19,
    align: 'Left',
    VerticalAlign: 'Top',
    color: '#BDBDBD',
    marginTop: 8,
  },
});
