<script setup>

import SinglePost from './SinglePost.vue'

    const components = { SinglePost } //components
    
    const props = defineProps({ //props
    posts: Array // Null, String, ....
    })

    

</script>

<template>
    <div class="post-list">
        <div v-for="post in posts" :key="posts._id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<style scoped>

</style>