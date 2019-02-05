<template>
    <div class="flex flex-row content-center mt-3">
        <div class="container bg-white w-full h-50 rounded p-5 text-grey-darker">
            <table class="table-fixed w-full">
                <tr class="border-0 border-grey-light border-b border-solid">
                    <th class="p-3">Key</th>
                    <th class="p-3">Value</th>
                </tr>
                <tr v-for="(form_datum, index) in form_data" :key="index" class="border-0 border-grey-light border-b border-solid">
                    <td class="border-0 border-grey-light border-r border-solid"><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" v-model="form_datum.key" placeholder="New Key" @change="checkRows(form_datum, index)"></td>
                    <td><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" v-model="form_datum.value" placeholder="Value" @change="checkRows(form_datum, index)"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        form_data: Array
    }
})

export default class FormData extends Vue {
    checkRows (form_datum: any, index: any) {
        this.$emit('form-datum-edited', {
            form_datum: form_datum,
            index: index
        });
    }
}
</script>