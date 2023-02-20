<template>
    <div>
        Title: <input type="text" v-model="postsStore.newPost.title"><br>
        Blog: <textarea name="" id="" cols="30" rows="10" v-model="postsStore.newPost.body"></textarea><br>
        tags: <input type="text" v-model="postsStore.newPost.tags"><br>
        <button type="button" @click="postsStore.addPost">Post</button>
    </div>
</template>

<script setup>
import usePostsStore from '../stores/postsStore'
const postsStore = usePostsStore()








</script>

<style scoped>

</style>