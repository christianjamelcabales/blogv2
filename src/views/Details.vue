<template>
    <div v-if="postsStore.singlepost, postsStore.displayPost">
        <h3>{{ postsStore.singlepost.title }}</h3>
        <p> {{ postsStore.singlepost.body }} </p>
        <button @click="updatePost">Update Post</button>  
        <button @click="postsStore.deletePost(props.id)">Delete Post</button>    
    </div>
    <div v-else-if="postsStore.singlepost, !postsStore.displayPost">
        <label for="title">Title</label>
        <input type="text" v-model="postsStore.singlepost.title"><br>
        <label for="body">Body </label>
        <textarea name="" id="" cols="50" rows="20" v-model="postsStore.singlepost.body"></textarea><br>
        <button @click="postsStore.updatePost(props.id)">Save Changes</button> 
        
    </div>

</template>

<script setup>

    import { onMounted } from 'vue';
    import usePostsStore from '../stores/postsStore'

    const props = defineProps({
        id: null,
    })

    onMounted(()=>{
        postsStore.displayPost = true
        
    })
    
    const postsStore = usePostsStore()
    postsStore.getPost(props.id)

    const updatePost = ()=>{
        postsStore.displayPost = false
    }


    
    



</script>

<style scoped>

</style>