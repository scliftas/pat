<template>
    <div>
        <p>{{ HelloWorld }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data () {
        return {
            HelloWorld: 'Hello World 3'
        }
    }
})
</script>