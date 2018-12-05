import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function ActivitiLayout(props) {
  return (
    <View>
      <View style={styles.container2}>
             <View style={styles.left} >
               <Text style={styles.title}>Actividades</Text>
             </View>
             <View style={styles.right}>
                  <Text style={styles.titleNum}>Por hacer: {props.numActiviti}</Text>
             </View>
      </View>
      <View style={styles.activitis}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  activitis:{
    paddingLeft:15,
  },
  container2: {
    padding:15,
    flexDirection:"row"
  },
  right: {
    paddingLeft: 10,
  },
  left:{
    flex:5,
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  titleNum: {
    fontSize: 18,
    color: 'red',
    borderWidth: 1.5,
    borderColor:"black",
    backgroundColor:"#F5A9A9",
    borderRadius:5,
    paddingHorizontal: 10,
  },
})

export default ActivitiLayout
