<script setup>
import Posts from '../components/Posts.vue'
//import getPosts from '../composables/getPosts'
import usePostsStore from '../stores/postsStore'
import { ref, computed, watch, watchEffect } from 'vue';
import AddPost from './AddPost.vue';

//calling the pinia store
const postsStore = usePostsStore()
postsStore.getPosts()

const displayPosts = ref(true)

const toggleDisplayPosts = ()=>{
    displayPosts.value = !displayPosts.value
}

</script>

<template>
    <div class="home">
        <h1>Home {{ postsStore.name }} {{ postsStore.count }}</h1>
        <div v-if="postsStore.error">
            <p>Can't fetch data.</p>
        </div>
        <Posts v-if="displayPosts" :posts="postsStore.posts" />
        <button @click="toggleDisplayPosts">Toggle Posts</button>
        <button @click="postsStore.deletePost">Delete a Post</button>
        <button @click="postsStore.increment">Add</button>
        <RouterLink :to="{ name: 'AddPost' }">Add Post</RouterLink>
        
        
    </div>
</template>
