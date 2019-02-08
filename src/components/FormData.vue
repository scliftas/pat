<template>
    <div class="flex flex-row content-center mt-3">
        <div class="bg-white w-full h-50 rounded p-5 text-grey-darker">
            <table class="table-fixed w-full">
                <tr class="border-0 border-grey-light border-b border-solid">
                    <th class="p-3">Key</th>
                    <th class="p-3">Value</th>
                </tr>
                <tr v-for="(formDatum, index) in request.data" :key="index" class="border-0 border-grey-light border-b border-solid">
                    <td class="border-0 border-grey-light border-r border-solid"><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" :value="formDatum.key" placeholder="New Key" @change="storeDatumKey($event, index)"></td>
                    <td><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" :value="formDatum.value" @change="storeDatumValue($event, index)" placeholder="Value"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    request: 'requests/request'
  }),

  methods: {
    storeDatumKey(e, index) {
      this.$store.dispatch('requests/checkDatumKey', {
        index: index,
        value: e.target.value
      });
    },

    storeDatumValue(e, index) {
      this.$store.dispatch('requests/checkDatumValue', {
        index: index,
        value: e.target.value
      });
    }
  },
};
</script>