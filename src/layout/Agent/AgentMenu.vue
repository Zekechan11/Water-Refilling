<script setup>
import { ref } from 'vue';
import AgentMenuItem from './AgentMenuItem.vue';


const model = ref([
    {
        items: [
        
        { 
            label: 'Container on Loan', 
            icon: 'pi pi-fw pi-home', 
            to: '/agent/dashboards' 
        },

        { 
            label: 'Message', 
            icon: 'pi pi-fw pi-comment', 
            to: '/agent/messagess' 
        },

        { 
            label: 'History', 
            icon: 'pi pi-fw pi-comment', 
            to: '/agent/historys' 
        }
        
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <AgentMenuItem v-if="!item.separator" :item="item" :index="i"></AgentMenuItem>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
