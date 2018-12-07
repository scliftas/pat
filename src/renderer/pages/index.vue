<template>
    <div class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange">
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