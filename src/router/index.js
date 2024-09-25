import AppLayout from '@/layout/AppLayout.vue';
import Layout from '@/layout/User/Layout.vue';
import AgentLayout from '@/layout/Agent/AgentLayout.vue';
import Landing from '@/views/pages/Landing.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Landing,
            children: [
                {
                    path: '/',
                    name: 'landing',
                    component: () => import('@/views/pages/Landing.vue')
                },
                
            ]
        },

        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/user/Dashboard.vue')
                },
                {
                    path: '/history',
                    name: 'history',
                    component: () => import('@/views/user/History.vue')
                },
                {
                    path: '/messages',
                    name: 'messages',
                    component: () => import('@/views/user/Chat.vue')
                },
                {
                    path: '/user-settings',
                    name: 'user-settings',
                    component: () => import('@/views/user/Setting.vue')
                }
                
            ]
        },

        {
            path: '/',
            component: AgentLayout,
            children: [
                {
                    path: '/agent/dashboards',
                    name: 'dashboards',
                    component: () => import('@/views/agent/Dashboard.vue')
                },
                {
                    path: '/agent/historys',
                    name: 'historys',
                    component: () => import('@/views/agent/History.vue')
                },
                {
                    path: '/agent/messagess',
                    name: 'messagess',
                    component: () => import('@/views/agent/Chat.vue')
                }
                
            ]
        },



        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/views/dashboardss',
                    name: 'dashboardss',
                    component: () => import('@/views/Dashboard.vue')
                },
                
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
        
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
        
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
        
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
        
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
        
                
            ]
        },
        
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        }
    ]
});

export default router;
