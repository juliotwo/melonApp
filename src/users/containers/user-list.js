import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/user-list-layout';
import Empty from '../components/empty'
import User from '../components/user'
import {connect} from 'react-redux'
import API from '../../../utils/api'
import { NavigationActions } from 'react-navigation';
import Separator from '../components/vertical-separator';

function mapStateToProps (state) {

  return{
      list:state.books.users,
      user:state.books.userSelected,

  }
}
class UserList extends Component {



  itemSeparator = () => <Separator />
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="no hay libros"/>
  viewUser = async(item)=>{
    
if(this.props.user==null || this.props.user.UserSelect != item.id){
    const UserActivitis = await API.getUsersAct(item.id);
    const UserSelect = await API.getSelectUsers(item.id);
    this.props.dispatch({
      type:'SET_SELECTED_USER',
      payload:{
        UserSelect,
        UserActivitis
      }
    })
   

   }
  else if(this.props.user.UserSelect.id==item.id){
      this.props.dispatch({
      type:'SET_SELECTED_USER',
      payload:{
        UserSelect:this.props.user.UserSelect,
        UserActivitis:this.props.user.UserActivitis
      }
    })
  }




     this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'UserSelect',
      })
    )

  }


  renderItem = ({item}) => {
    return (
      <User {...item}
      onPress ={()=> {this.viewUser(item)}} />
    )
  }
  render() {
    return (
      <Layout>

        <FlatList
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.itemSeparator}
          data={this.props.list}
          ListEmptyComponent = {this.renderEmpty}
          renderItem={this.renderItem }
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(UserList)
