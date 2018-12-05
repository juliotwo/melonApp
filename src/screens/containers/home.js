import React, {Component, Fragment} from 'react'
import Header from '../../sections/components/header';
import BookList from '../../books/containers/book-list';
import API from '../../../utils/api'
import {connect} from 'react-redux'
class Home extends Component {

  static navigationOptions = () => {
      return {
      title:"Lista de libros",
      headerTitleStyle: { 
          textAlign:"center", 
          flex:1 ,
          color:"white"
      
      },
    };
  };

async componentDidMount(){
   booking= await API.getBooksImage();
   booksCover= booking.slice(0,50)
   
 

    this.props.dispatch({
      type:'SET_LIST_BOOKS',
      payload:{
        booksCover
      }
    })
  }

	render(){
		return(

        <Fragment>
          <BookList />
        </Fragment>


			)
	}
}
 export default connect(null)(Home)