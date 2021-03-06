import Vue from 'vue';
import config  from "../config";
import axios from 'axios';

Vue.use(axios);

export default {
    name: "PostService",

    getPosts(){
        let url = config.POSTS_URL
        return axios.get(url)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    getPost(id){
        let url = config.POSTS_URL + '/' + id
        return axios.get(url)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    addPost(post){
        let url = config.POSTS_URL
        return axios.get(url, post)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    },
    updatePost(post){
        let url = config.POSTS_URL + '/' + post.id
        return axios.get(url, post)
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error))
    }
}
