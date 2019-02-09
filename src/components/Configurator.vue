<template>
    <div class="mt-5">
        <ul class="list-reset flex border-b">
            <li v-for="(type) in types" :key="type" :class="(activeType === type ? '-mb-px ' : '') + 'mr-1'">
                <a :class="'bg-white inline-block font-semibold ' + (activeType === type ? 'border-l border-t border-r rounded-t py-2 px-4 text-blue-dark' : 'py-2 px-4 text-blue hover:text-blue-darker')" @click="toggleType(type)">{{ ucfirst(type) }}</a>
            </li>
        </ul>

        <configurator-table :type="activeType"></configurator-table>
    </div>
</template>

<script>
import ConfiguratorTable from './ConfiguratorTable';

export default {
    components: {
        ConfiguratorTable
    },

    data: () => ({
        types: [
            'headers',
            'data'
        ],
        activeType: 'headers'
    }),

    methods: {
        toggleType(type) {
            if (this.types.includes(type)) this.activeType = type;
        }
    }
}
</script>