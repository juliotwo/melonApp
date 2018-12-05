import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/book-list-layout';
import Empty from '../components/empty'
import Book from '../components/book'
import {connect} from 'react-redux'
import API from '../../../utils/api'
import { NavigationActions } from 'react-navigation';

function mapStateToProps (state) {

  return{
      list:state.books.booksCover,
  }
}
class BookList extends Component {
  keyExtractor = item => item.ID.toString()
  renderEmpty = () => <Empty text="no hay libros"/>
  viewBook = async(item)=>{
    const bookImage = await API.getBooksImageBook(item.ID);
    const bookDetails = await API.getBooksInf(item.ID);
    const bookAuthor = await API.getBooksAuthor(item.ID);

    console.log(bookImage)
    console.log(bookDetails)

    this.props.dispatch({
      type:'SET_SELECTED_BOOK',
      payload:{
        bookImage,
        bookDetails,
        bookAuthor
      }
    })

     this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Book',
        params: bookDetails.Title
      })
    )

  }
  renderItem = ({item}) => {
    return (
      <Book {...item}
      onPress ={()=> {this.viewBook(item)}} />
    )
  }
  render() {
    return (
      <Layout>

        <FlatList
          keyExtractor={this.keyExtractor}
          numColumns={2}
          data={this.props.list}
          ListEmptyComponent = {this.renderEmpty}
          renderItem={this.renderItem }
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(BookList)
