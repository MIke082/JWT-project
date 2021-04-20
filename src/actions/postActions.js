import axios from "axios";
import { history } from "../helpers/history";
import authHeader from "../services/auth-header";

const url = `https://zvlmessenger.herokuapp.com`

export const getPosts = (data) => {
    return {
        type: "GET_POSTS",
        payload: data
    }
}
let header = authHeader();

  export const getPostsCreater = () => {
    // const access_token = localStorage.getItem('Token');
    
    // console.log(header);
    return (dispatch => {
        return axios.get(`https://zvlmessenger.herokuapp.com/getposts`, {headers:header})
        // .then(response => console.log(response.data)) 
            .then(response => dispatch(getPosts(response.data)))
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    })
}

export const createNewPost = (data) => {
    return{
        type: 'CREATE_POST',
        payload: {
            id: data.id,
            title: data.title,
            content: data.content,
            description: data.description,
        }
    }
}

export const createNewPostCreater = (post) => {
    console.log(post);
    return (dispatch) => {
        axios.post(`https://zvlmessenger.herokuapp.com/posts`, post, { headers: header})
        .then((response)=>{
            dispatch(createNewPost(response.data));
        }).then(history.push('/profile')) 
        .catch((error)  =>{ 
            console.log(error);
        })
    }
}