import React, {Component} from 'react'
import {
	View,
	Text
} from 'react-native'
import UserLayout from '../components/bookLayout'
import InfoUser from '../../users/components/details'
import {connect} from 'react-redux'


function mapStateToProps (state) {
  return{
      user:state.books.userSelected,
  }
}

class User extends Component{
	
 

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
			<UserLayout>
				<InfoUser/>
			</UserLayout>
			)
	}

}

export default connect(mapStateToProps)(User)
