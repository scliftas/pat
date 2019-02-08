<template>
    <div v-if="error" class="flex items-center justify-center content-center">
        <div class="p-4 mb-4 bg-red-lighter text-center py-4 rounded-full absolute pin-b">
            <span class="text-red">{{ error }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    error: 'requests/error'
  })
};
</script>