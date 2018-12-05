import { 
	createStackNavigator,
	createBottomTabNavigator
	 } from 'react-navigation';
import Home from './screens/containers/home';
import Header from './sections/components/header'
import Book from './screens/containers/book'
import UserSelect from './screens/containers/user'
import Logo from './sections/components/logo'
import IconBook from './sections/components/icon-book'
import IconUser from './sections/components/icon-user'

import React from 'react'
import Users from './screens/containers/users'
const Main = createStackNavigator(
  {
    Home: Home,
 	Book: Book,
 	// Users:{
 	// 	screen:Users,
 	// 	navigationOptions:{
 	// 		headerLeft:null,
 	// 	}
 	// }
  },
  {
  	navigationOptions:{
  		headerTintColor:"white",
  		headerStyle: {
     		 backgroundColor: 'black',
    		},
  		gesturesEnabled:true,
		headerTitleStyle: { 
	        textAlign:"center", 
	        flex:1 ,
	        color:"white"
  		
   		}	,
   		headerRight: (
      <Logo/>
    ),
  }

}
)
 const User = createStackNavigator (
	 {
	 	Users:{
	 		screen:Users
	 	},
	 	UserSelect,
	 },
	 {
	 	navigationOptions:{
  		headerTintColor:"white",
  		headerStyle: {
     		 backgroundColor: 'black',
    		},
  		gesturesEnabled:true,
		headerTitleStyle: { 
	        textAlign:"center", 
	        flex:1 ,
	        color:"white"
  		
   		}	,
   		headerRight: (
      <Logo/>
    ),
 			 }
	 }


 	)
const TabNavigator =createBottomTabNavigator(
	{
		Home: {
			screen:Main,
			navigationOptions:{
				title:"",
				tabBarIcon: <IconBook/>
			}
		},
		Users: {
			screen:User,
			navigationOptions:{
				title:"",
				tabBarIcon: <IconUser/>,  
			}

		}

	},
	{
		tabBarOptions:{
			activeBackgroundColor: "white",
			inactiveBackgroundColor: "gray", 
			style:{
	          
	            borderTopWidth:2,
	            borderTopColor:'black'
	        },
		}
	}

)

export default TabNavigator;