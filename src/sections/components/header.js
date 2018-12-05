import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.right}>
            {props.children}
          </View>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'black'
  },
  right: {
  }
})

export default Header;
