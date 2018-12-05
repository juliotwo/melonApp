import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

function Information(props) {
  return (
    <View style={styles.container}>
            <View style={styles.left}>
                <Icon name={props.Icon} size={25} color="black" />
            </View>
            <View style={styles.right} >
               <Text style={styles.title}>{props.Title}</Text>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection:"row"
  },
  left:{
    paddingHorizontal:10,
    alignSelf:"center"
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
})

export default Information