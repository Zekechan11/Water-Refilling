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
                    path: '/user/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/user/Dashboard.vue')
                },
                {
                    path: '/user/messages',
                    name: 'messages',
                    component: () => import('@/views/user/Chat.vue')
                },
                {
                    path: '/user/settings',
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
                    path: '/agent/dashboard',
                    name: 'dashboards',
                    component: () => import('@/views/agent/Dashboard.vue')
                },
                {
                    path: '/agent/history',
                    name: 'historys',
                    component: () => import('@/views/agent/History.vue')
                },
                {
                    path: '/agent/message',
                    name: 'messagess',
                    component: () => import('@/views/agent/Chat.vue')
                },
                {
                    path: '/agent/settings',
                    name: 'settingss',
                    component: () => import('@/views/agent/Setting.vue')
                },
                {
                    path: '/agent/scanner',
                    name: 'scanner',
                    component: () => import('@/views/agent/Scan.vue')
                },
                {
                    path: '/agent/payment',
                    name: 'payment',
                    component: () => import('@/views/agent/Payment.vue')
                }
                
            ]
        },



        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/views/dashboard',
                    name: 'dashboardss',
                    component: () => import('@/views/Dashboard.vue')
                },
                
                {
                    path: '/admin/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/admin/FormLayout.vue')
                },
                {
                    path: '/admin/button',
                    name: 'button',
                    component: () => import('@/views/admin/ButtonDoc.vue')
                },
                
                {
                    path: '/admin/message',
                    name: 'message',
                    component: () => import('@/views/admin/MessagesDoc.vue')
                },
        
                {
                    path: '/admin/menu',
                    name: 'menu',
                    component: () => import('@/views/admin/MenuDoc.vue')
                },
        
                {
                    path: '/admin/misc',
                    name: 'misc',
                    component: () => import('@/views/admin/MiscDoc.vue')
                },
                {
                    path: '/admin/area',
                    name: 'area',
                    component: () => import('@/views/admin/Area.vue')
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
