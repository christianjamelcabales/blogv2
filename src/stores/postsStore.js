//PINIA STORE

import { defineStore } from "pinia";
import axios from 'axios';
axios.defaults.withCredentials = false;
axios.defaults.baseURL = "https://blog-server-e5st.onrender.com/";

const usePostsStore =  defineStore ('postsStore', {
    state: () =>({
            name: 'CJ',
            count: 1,
            posts: [],
            singlepost:[],
            error: false,
            displayPost: true,
            result: {},
            error: null,
            newPost:
              {
                title: null,
                body: null,
                tags:[]
              },
            updatedPost:{
              title: null,
              body: null,
              tags:[]
            }
            

                 
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        increment() {
          this.count++
        },



        async getPosts(){
          const uri = location.hostname + ':3000/blogs'

          try {
            const data = await axios.get('/blogs/')
            this.posts = data.data
          } catch (error) {
            console.log(error)
          }
         },





        async addPost(){       
          try {
            const data = await axios.post('/blogs/', this.newPost)
            console.log(data.data)
            console.log('New Blog Successfuly Posted')
          } catch (error) {
            console.log(newPost.title)
          }
        },
        async getPost(id){
          try {
            const data = await axios.get('/blogs/' + id)
            this.singlepost = data.data
          } catch (error) {
            
          }
        },
        async updatePost(id){
          try {
            const data = await axios.patch('/blogs/' + id, this.singlepost)
            console.log(data.data)
            console.log('Blog Successfuly Updated')
          } catch (error) {
            
          }
        },
        async deletePost (id){
          
          try {
            const data = await axios.delete('/blogs/' + id)
            this.singlepost = data.data
            console.log(data.data)
            console.log('Blog Successfuly Deleted')
          } catch (error) {
            
          }
        },


    }
})

export default usePostsStore

