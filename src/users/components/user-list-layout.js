import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function SuggestionListLayout(props) {
  return (
    <View style={styles.container}>
       
        {props.children}
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal:0,
  },
})

export default SuggestionListLayout
