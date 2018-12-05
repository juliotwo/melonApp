const BASE_API = 'https://fakerestapi.azurewebsites.net/api/'
const USER_API = 'https://jsonplaceholder.typicode.com/'
class Api{
	async getBooksImage(){
		const query = await fetch (`${BASE_API}CoverPhotos`);
		const  datos  = await query.json();
    	return datos
	}
	async getBooksImageBook(id){
		const query = await fetch (`${BASE_API}CoverPhotos/${id}`);
		const  datos  = await query.json();
    	return datos
	}
	async getBooksInf(id){
		const query = await fetch (`${BASE_API}Books/${id}`);
		const  datos  = await query.json();
    	return datos
	}

	async getBooksAuthor(id){
		const query = await fetch (`https://fakerestapi.azurewebsites.net/authors/books/${id}`);
		const  datos  = await query.json();
    	return datos
	}
	
	async getUsers(){
		const query = await fetch (`${USER_API}users`);
		const  datos  = await query.json();
    	return datos
	}

	async getSelectUsers(id){
		const query = await fetch (`${USER_API}users/${id}`);
		const  datos  = await query.json();
    	return datos
	}
	async getUsersAct(id){
		const query = await fetch (`${USER_API}todos?userId=${id}`);
		const  datos  = await query.json();
    	return datos
	}
	// https://jsonplaceholder.typicode.com/users/1/todos
	async updateActivitis(id){
		const query = await fetch (`${USER_API}/todos/${id}`,{
			method: 'PATCH',
			body: JSON.stringify({
				completed:false
			}),
			header:{
		      "Content-type": "application/json; charset=UTF-8"
			}
		})
		const datos = await query.json();
		return datos


	}

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))


}
 
export default new Api();

// const BASE_API = 'https://yts.am/api/v2/';

// class Api {
//   async getSuggestion(id) {
//     const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
//     const { data } = await query.json();
//     return data.movies
//   }
// }

// export default new Api();