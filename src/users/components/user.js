import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Images from "../../../assets/index"

function Book(props) {


 
 

 
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
     <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.cover}
            source={Images[props.id]}
            
          />
        </View>

        <View style={styles.right}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.title}>{props.email}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cover: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },

})


export default Book