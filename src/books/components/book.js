import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

function Book(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
    <View style={styles.container}>
        <Image
          style={styles.cover}
          source={{
            uri: props.Url
          }}
        />
    </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,


  },

   cover: {
    height: 280,
    width: 170,
    resizeMode: 'contain',
  }

})

export default Book