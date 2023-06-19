import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function PostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View style={styles.user}>
          <Image
            style={styles.userImg}
            source={require('../../img/def-ava.png')}
          />
          <View style={styles.userContacts}>
            <Text>User name</Text>
            <Text>User email</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
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

  list: {
    marginTop: 32,
    paddingTop: 0,
    paddingLeft: 16,
    gap: 16,
  },
  user: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  userImg: {},

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minWidth: 375,
    minHeight: 83,
    paddingTop: 9,
    paddingBottom: 34,
    borderWidth: 1,
    border: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#BDBDBD',
    boxShadow: '0 0.5 0 rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(13.5914px)',
    flexDirection: 'row',
    gap: 31,
  },
});
