import React, {Component, Fragment} from 'react'
import Header from '../../sections/components/header';
import UserList from '../../users/containers/user-list';
import API from '../../../utils/api'
import {connect} from 'react-redux'
class Users extends Component {
static navigationOptions = ()=>{
	return{
		title: "Usuarios"
	}
}

async componentDidMount(){
 
   users = await API.getUsers();



    this.props.dispatch({
      type:'SET_LIST_USERS',
      payload:{
        users
      }
    })
  }

	render(){
		return(

        <Fragment>
          <UserList />
        </Fragment>


			)
	}
}
 export default connect(null)(Users)