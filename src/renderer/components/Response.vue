<template>
    <div class="bg-white w-full h-full mt-5 rounded p-5 text-grey-darker">
        <span v-html="response"></span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        response: Object
    }
})

export default class Response extends Vue {

}
</script>