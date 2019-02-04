<template>
    <div class="w-4/5 mx-auto content-center">
        <div class="flex flex-row">
            <h1 :class="'font-semibold text-3xl text-' + text_color + '-light mb-3'">{{ title }}</h1>
        </div>

        <div class="flex flex-row content-center">
            <div class="inline-block relative w-1/5 m-1">
                <select v-model="method" class="appearance-none w-full py-3 px-5 bg-grey-lighter border border-grey-lighter text-grey-darker rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>

            <input v-model="url" class="flex-1 appearance-none border rounded text-grey-dark leading-tight focus:outline-none focus:border-2 focus:border-teal-light w-1/2 py-3 px-5 m-1" type="text" placeholder="Enter a URL here"/>

            <button :class="'w-1/5 bg-' + text_color + ' hover:bg-' + text_color + '-dark text-white font-bold py-3 px-5 rounded m-1'" @click="send()">Send</button>
        </div>

        <response v-if="response" :response="response"></response>

        <error v-if="error_code !== ''" :code="error_code"></error>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import Response from './Response.vue';
import Error from './Error.vue';

@Component({
    components: {
        Response,
        Error
    }
})

export default class Requester extends Vue{
    name: string = 'Requester';
    title: string = 'New Request';
    method: string = 'GET';
    url: string = '';
    error_code: string = '';
    response: string = '';
    text_colors: Array<string> = ['red', 'blue', 'indigo'];
    text_color: string = 'blue';

    mounted () {
        this.text_color = this.text_colors[Math.floor(Math.random() * this.text_colors.length)];
    }

    send () {
        this.reset();

        axios({
            method: this.method,
            url: this.url
        }).then((response) => {
            this.response = response.data;
        }).catch((error) => {
            this.error_code = error.response.status;
        });
    }

    reset () {
        this.response = '';
        this.error_code = '';
    }
}
</script>

