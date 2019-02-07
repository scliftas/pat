<template>
    <div class="flex flex-row content-center mt-3">
        <div class="bg-white w-full h-50 rounded p-5 text-grey-darker">
            <table class="table-fixed w-full">
                <tr class="border-0 border-grey-light border-b border-solid">
                    <th class="p-3">Key</th>
                    <th class="p-3">Value</th>
                </tr>
                <tr v-for="(formDatum, index) in formData" :key="index" class="border-0 border-grey-light border-b border-solid">
                    <td class="border-0 border-grey-light border-r border-solid"><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" v-model="formDatum.key" placeholder="New Key" @change="checkRows(formDatum, index)"></td>
                    <td><input type="text" class="w-full h-100 p-3 appearance-none border border-white leading-tight focus:border focus:outline-none focus:border-2 focus:border-teal-light" v-model="formDatum.value" placeholder="Value" @change="checkRows(formDatum, index)"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    formData: Array,
  },

  methods: {
    checkRows(formDatum, index) {
      this.$emit('form-datum-edited', {
        formDatum,
        index,
      });
    },
  },
};
</script>