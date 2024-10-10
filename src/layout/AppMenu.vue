<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/views/dashboard' },
            { label: 'Area', icon: 'pi pi-fw pi-id-card', to: '/admin/area' },
            {
                label: 'Customer',
                icon: 'pi pi-user-plus',
                items: [
                    {
                        label: 'Active',
                        icon: 'pi pi-fw pi-bookmark',
                    },
                    {
                        label: 'Inactive',
                        icon: 'pi pi-fw pi-bookmark',
                    },
                ]
            },
            { 
                label: 'Customer', icon: 'pi pi-user-plus', to: '/admin/add-customer', class: 'rotated-icon' 
                
            },
            { label: 'Agents', icon: 'pi pi-users', to: '/admin/add-agent' },
            { label: 'Staff', icon: 'pi pi-users', to: '/admin/add-staff' },
            { label: 'Inventory', icon: 'pi pi-th-large', to: '/admin/add-inventory' },
            { label: 'Sales', icon: 'pi pi-money-bill', to: '/admin/sales' },
            { label: 'Reports', icon: 'pi pi-file', to: '/admin/reports' },
            { label: 'Message', icon: 'pi pi-comment', to: '/admin/message' }
        ]
    },
    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Submenu 2',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 2.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 2.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
