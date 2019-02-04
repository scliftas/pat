<template>
    <div class="p-10 flex content-center">
        <requester></requester>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Requester from './../components/Requester.vue';

@Component({
    components: {
        Requester
    }
})

export default class Index extends Vue {

}
</script>