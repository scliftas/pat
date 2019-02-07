<template>
    <div class="bg-white w-full h-full mt-5 rounded p-5 text-grey-darker">
        <span v-html="response"></span>
    </div>
</template>

<script>
export default {
  props: {
    response: Object,
  },
};
</script>