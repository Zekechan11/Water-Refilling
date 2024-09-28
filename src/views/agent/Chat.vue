<script setup>
import { ref } from 'vue';

const messages = ref([]);
const newMessage = ref('');

function sendMessage() {
    if (newMessage.value.trim() !== '') {
        messages.value.push({
            content: newMessage.value,
            sender: 'user', // Can be 'user' or 'bot' or others based on your use case
            timestamp: new Date().toLocaleTimeString(),
        });
        newMessage.value = '';
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row gap-8">
        <!-- Chat Box -->
        <div class="md:w-full flex flex-col h-[620px] border border-gray-300 rounded-lg shadow-md">
            <div class="bg-blue-500 text-white font-semibold text-xl p-4 rounded-t-lg">Chat</div>
            <div class="flex-grow p-4 overflow-y-auto space-y-4">
                <!-- Messages Loop -->
                <div v-for="(msg, index) in messages" :key="index" class="flex flex-col space-y-1">
                    <div v-if="msg.sender === 'user'" class="self-end bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                        <p>{{ msg.content }}</p>
                        <span class="text-xs text-right block">{{ msg.timestamp }}</span>
                    </div>
                    <div v-else class="self-start bg-gray-300 p-2 rounded-lg max-w-xs">
                        <p>{{ msg.content }}</p>
                        <span class="text-xs text-right block">{{ msg.timestamp }}</span>
                    </div>
                </div>
            </div>
            <!-- Message Input -->
            <div class="p-4 border-t border-gray-200 flex items-center gap-4">
                <InputText v-model="newMessage" placeholder="Type a message" class="flex-grow" />
                <Button label="Send" @click="sendMessage" :disabled="newMessage === ''" class="bg-blue-500 text-white" />
            </div>
        </div>

        <!-- Notification Section -->
        <!-- <div class="md:w-1/2">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Notifications</div>
                <div class="flex flex-col gap-4 mb-4">
                    <Message severity="success">Success Message</Message>
                    <Message severity="info">Info Message</Message>
                    <Message severity="warn">Warn Message</Message>
                    <Message severity="error">Error Message</Message>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
h1 {
    color: #4A5568;
    margin-bottom: 1.5rem;
}
</style>
