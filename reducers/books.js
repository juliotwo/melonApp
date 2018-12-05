function Books (state = {}, action){
	switch (action.type) {
		case'SET_LIST_BOOKS':{
			return {...state, ...action.payload}
		}
		case'SET_SELECTED_BOOK':{
			return {...state, bookSelected:action.payload}
		}
		case'SET_LIST_USERS':{
			return {...state, ...action.payload}
		}
		case'SET_SELECTED_USER':{
			return {...state, userSelected:action.payload}
		}
		case'SET_SELECTED_ACT':{
			return {...state, userSelected:action.payload}
		}
		default:
		return state;
	}
} 
export default Books