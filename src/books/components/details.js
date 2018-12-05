import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  FlatList  
} from 'react-native';

function Details(props) {
  keyExtractor = item => item.ID.toString()
  renderEmpty = () => <Text>No hay autores</Text>
  renderItem = ({item}) => {
      return (
        <Text style = {styles.author}>
            *{item.FirstName}{item.LastName}
        </Text>
      )
    }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.cover}
            source={{
              uri: props.bookImage.Url
            }}
          />
        </View>

        <View style={styles.right}>
          <Text style={styles.date}>Descripción</Text>
          <Text style={styles.description}>{props.bookDetails.Description.substring(0,800)}</Text>
          <Text style={styles.date}>Fecha: {props.bookDetails.PublishDate.substring(0,10)}</Text>
        </View>
      </View>
      <View style={styles.more}>
        <View >
          <Text style={styles.extract}>Extracto</Text>
          <Text style={styles.description}>{props.bookDetails.Excerpt.substring(0,1300)} </Text>
        </View>
        <Text style={styles.extract} > Autores </Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={props.bookAuthor}
          ListEmptyComponent = {this.renderEmpty}
          renderItem={this.renderItem }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  author:{
    marginVertical:10,
    color: '#6b6b6b',
    fontSize: 17,
    fontWeight: 'bold',

  },
  more:{
    paddingLeft:15,
  },
  container: {
    flexDirection: 'row',
    padding:15,
  },
  cover: {
    height: 250,
    width: 150,
    resizeMode: 'contain'
  },
  right: {
    width:280,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 11,
    color: '#44546b',
    paddingRight:10,
    marginRight:20,
  },
  date: {
    color: '#6b6b6b',
    fontSize: 17,
    fontWeight: 'bold',
  },
  extract:{
    color: '#6b6b6b',
    fontSize: 18,
    fontWeight: 'bold',
  }

})

export default Details