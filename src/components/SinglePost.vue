<template>
    <div class="post">
        <RouterLink :to="{ name: 'Details', params: {id: post._id}}">
            <h3>{{ post.title }}</h3>
        </RouterLink>
        <p>{{ snippet }}</p> 
            <span v-for="tag in post.tags" :key="tag">
                #{{ tag }}
            </span>
        <hr>
    </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
    post: null
})

const snippet = computed(()=>{
    return props.post.body.substring(0,200) + '....'
})



</script>

<style scoped>

</style>