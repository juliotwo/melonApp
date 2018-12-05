import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import BookLayout from '../components/bookLayout'
import InfoBook from '../../books/components/details'
import {connect} from 'react-redux'


function mapStateToProps (state) {
  return{
      book:state.books.bookSelected,
  }
}

class Book extends Component{
	
 

	componentDidMount(){
		// console.log(this.props.book)
		// const title= this.props.book.bookDetails.Title
		// console.log(title)
		
	}

	static navigationOptions = ({ navigation }) => {
		console.log(navigation)
  		return {
    	title:navigation.state.params,
    	headerTitleStyle: { 
		textAlign:"center", 
		flex:.8 
		    },
  	};
	};

	render(){
		return(
			<BookLayout>
				<InfoBook
					bookImage={this.props.book.bookImage}
					bookDetails={this.props.book.bookDetails}
					bookAuthor ={this.props.book.bookAuthor}
				/>
			</BookLayout>
			)
	}

}

export default connect(mapStateToProps)(Book)
