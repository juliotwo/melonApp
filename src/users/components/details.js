import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  FlatList  
} from 'react-native';
import CheckBox from 'react-native-check-box'
import {connect} from 'react-redux'
import API from '../../../utils/api'
import Contact from './contact-information'
import ActivitiLayout from './activitis-layout'

function mapStateToProps (state) {
  return{
      user:state.books.userSelected,
  }
}

class Details extends Component  {
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Text>No hay autores</Text>
  setCheck = async (item) =>{
    var numAct;
      
    const UserSelect = await API.getSelectUsers(item.userId);
    var newAct = this.props.user.UserActivitis.map(function(obj) {
          if (obj.id == item.id){
            obj.completed = !obj.completed
            return obj;
           }
           
           else{
               return obj
             }

           }
      )

    const result = newAct.filter(obj => obj.completed == false);
    numAct = result.length
      
       this.props.dispatch({
          type:'SET_SELECTED_ACT',
          payload:{
            UserSelect: this.props.user.UserSelect,
            UserActivitis: newAct,
            numActivity: numAct
          }
       })

  }
  
  componentDidMount(){
    var numAct;
    const result = this.props.user.UserActivitis.filter(obj => obj.completed == false);
    numAct = result.length

      
    this.props.dispatch({
          type:'SET_SELECTED_ACT',
          payload:{
            UserSelect: this.props.user.UserSelect,
            UserActivitis: this.props.user.UserActivitis,
            numActivity: numAct
          }
       })
  }

  renderItem = ({item}) => {      
      return (
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=> {this.setCheck(item)}}
            isChecked={item.completed}
            leftText={item.title}
        />
      )
  }
  
  render(){
    return (
      <ScrollView>   
          <View>
        <Contact
          User={this.props.user.UserSelect}
        />
        </View>

        <ActivitiLayout numActiviti={this.props.user.numActivity}>
          
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.user.UserActivitis}
            ListEmptyComponent = {this.renderEmpty}
            renderItem={this.renderItem }
          />
        </ActivitiLayout>
    </ScrollView>
  )
}
}


export default connect(mapStateToProps)(Details)