<template>
    <div class="flex items-center justify-center content-center">
        <div class="p-4 mb-4 bg-red-lighter text-center py-4 rounded-full absolute pin-b">
            <span class="text-red">Error received with status code {{ code }}</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    code: String,
  },
};
</script>