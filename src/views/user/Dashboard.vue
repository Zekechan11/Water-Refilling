<script setup>
import { useLayout } from "@/layout/composables/layout";
import { CustomerService } from '@/service/CustomerService';
import { onBeforeMount, ref } from 'vue';

const { getPrimary, getSurface, isDarkTheme } = useLayout();
const dateFrozen = ref(false);
const customers2 = ref(null);
const activeTab = ref('purchase'); // Add a variable for the active tab

onBeforeMount(() => {
    CustomerService.getCustomersLarge().then((data) => (customers2.value = data));
});

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "PHP" });
};
</script>

<template>
  <div class="space">
    <h1 class="text-4xl font-bold mb-6" style="color: #899499;">Dashboard</h1>
  </div>

  <div class="card shadow-md">
    <div class="flex justify-between items-center mb-6">
      <!-- Tab buttons -->
      <div class="flex space-x-4">
        <button
          :class="['py-2 px-4 rounded', activeTab === 'purchase' ? 'bg-primary text-white' : 'bg-gray-200']"
          @click="activeTab = 'purchase'"
        >
          Purchase
        </button>
        <button
          :class="['py-2 px-4 rounded', activeTab === 'utang' ? 'bg-primary text-white' : 'bg-gray-200']"
          @click="activeTab = 'utang'"
        >
          History
        </button>
      </div>
    </div>

    <!-- Tab content -->
    <div v-if="activeTab === 'purchase'">
      <ul class="list-none p-0 m-0">
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Gallons on Hold :</span>
          </div>
          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">50</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Purchase :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(16) }}</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Utang :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(20) }}</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Area :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">Guadalupe</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Agent :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">Zeke</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Date :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">02/11/2020</span>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="activeTab === 'utang'">
        <div class="font-semibold text-xl mb-4">Frozen Columns</div>
    <ToggleButton v-model="dateFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Date" offLabel="Date" />
    <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-6">
      <Column field="id" header="Id" style="min-width: 100px"></Column>
      <Column field="activity" header="Gallons on Hold" style="min-width: 200px"></Column>
      <Column field="activity" header="Purchase" style="min-width: 200px"></Column>
      <Column field="balance" header="Utang" style="min-width: 200px">
        <template #body="{ data }">
          <span>{{ formatCurrency(data.balance) }}</span>
        </template>
      </Column>
      <Column field="country.name" header="Area" style="min-width: 200px"></Column>
      <Column field="representative.name" header="Agent" style="min-width: 200px"></Column>
      <Column field="date" header="Date" style="min-width: 200px" alignFrozen="right" :frozen="dateFrozen"></Column>
    </DataTable>

    </div>
  </div>

  <!-- DataTable Card for Customers -->
  <div class="card mt-6 shadow-md">
    <div class="font-semibold text-xl mb-4">Frozen Columns</div>
    <ToggleButton v-model="dateFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Date" offLabel="Date" />
    <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-6">
      <Column field="id" header="Id" style="min-width: 100px"></Column>
      <Column field="activity" header="Gallons on Hold" style="min-width: 200px"></Column>
      <Column field="activity" header="Purchase" style="min-width: 200px"></Column>
      <Column field="balance" header="Utang" style="min-width: 200px">
        <template #body="{ data }">
          <span>{{ formatCurrency(data.balance) }}</span>
        </template>
      </Column>
      <Column field="country.name" header="Area" style="min-width: 200px"></Column>
      <Column field="representative.name" header="Agent" style="min-width: 200px"></Column>
      <Column field="date" header="Date" style="min-width: 200px" alignFrozen="right" :frozen="dateFrozen"></Column>
    </DataTable>
  </div>
</template>
