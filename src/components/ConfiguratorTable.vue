<template>
    <div class="flex flex-row content-center">
        <div class="bg-white w-full h-50 rounded p-5 text-grey-darker">
            <table class="table-fixed w-full">
                <tr class="border-0 border-grey-light border-b border-solid">
                    <th class="p-1">Key</th>
                    <th class="p-1">Value</th>
                </tr>
                <tr v-for="(formDatum, index) in request[type]" :key="index" class="border-0 border-grey-light border-b border-solid">
                    <td class="border-0 border-grey-light border-r border-solid"><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" :value="formDatum.key" placeholder="New Key" @change="storeKey($event, index)"></td>
                    <td><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" :value="formDatum.value" @change="storeValue($event, index)" placeholder="Value"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    type: String
  },

  computed: mapGetters({
    request: 'requests/request'
  }),

  methods: {
    storeKey(e, index) {
      this.$store.dispatch('requests/checkKey', {
        index: index,
        value: e.target.value,
        type: this.$props.type
      });
    },

    storeValue(e, index) {
      this.$store.dispatch('requests/checkValue', {
        index: index,
        value: e.target.value,
        type: this.$props.type
      });
    }
  },
};
</script>