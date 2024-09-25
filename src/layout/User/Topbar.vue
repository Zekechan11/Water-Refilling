<script setup>
import { useLayout } from '@/layout/composables/layout';    
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();
const topbarMenuActive = ref(false);
const router = useRouter();

const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/user-settings');
};
</script>

<template>
    <div class="layout-topbar shadow-md">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <img src="/public/demo/images/logo2.png" alt="" style="height: 30px;width: 150px;">
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <!-- <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button> -->
            </div>

            <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action" @click="onSettingsClick">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
