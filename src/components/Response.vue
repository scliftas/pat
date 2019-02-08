<template>
    <div v-if="response" class="bg-white w-full h-full mt-5 rounded p-5 text-grey-darker">
        <span v-html="response"></span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    response: 'requests/response'
  })
};
</script>