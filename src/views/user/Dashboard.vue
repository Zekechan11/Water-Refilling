<script setup>
import { useLayout } from "@/layout/composables/layout";
import { CustomerService } from '@/service/CustomerService';
import { onBeforeMount, ref } from 'vue';

const { getPrimary, getSurface, isDarkTheme } = useLayout();
const dateFrozen = ref(false);
const customers2 = ref(null);

onBeforeMount(() => {
  CustomerService.getCustomersLarge().then((data) => (customers2.value = data));

});

function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}
</script>

<template>
  <div class="space">
    <h1 class="text-4xl font-bold mb-6" style="color: #899499;">Dashboard</h1>
  </div>

  <div class="card shadow-md  ">
    <div>
      <ul class="list-none p-0 m-0">
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-blue-100 p-4 rounded-md" style="font-size: 18px;">
          
          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Area :</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">Guadalupe</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Agent :</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">Zeke</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-green-100 p-4 rounded-md" style="font-size: 18px;">

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Gallons on Hold :</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium">50</span>
          </div>

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Date :</span>
          </div>

          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">02/11/2020</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-12 bg-yellow-100 p-4 rounded-md" style="font-size: 18px;">

          <div class="mt-2 md:mt-0 flex items-center">
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Purchase Gallons:</span>
          </div>

          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(16) }}</span>
          </div>

        </li>


        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-pink-100 p-4 rounded-md" style="font-size: 18px;">
          
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Amount Paid :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(16) }}</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-indigo-100 p-4 rounded-md" style="font-size: 18px;">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Amount Payable :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(20) }}</span>
          </div>
        </li>

        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 bg-purple-100 p-4 rounded-md" style="font-size: 18px;">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0">Paid :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium">{{ formatCurrency(20) }}</span>
          </div>
        </li>

      </ul>
    </div>
  </div>


  <!-- DataTable Card for Customers -->
  <div class="card shadow-md">
    <ToggleButton v-model="dateFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Date" offLabel="Date" />

    <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-6">
      <Column field="activity" header="Purchase Gallons" style="min-width: 200px"></Column>
      <Column field="representative.name" header="Galllons Collected" style="min-width: 200px"></Column>
      <Column field="representative.name" header="Amount Paid" style="min-width: 200px"></Column>
      <Column field="date" header="Date" style="min-width: 200px" alignFrozen="right" :frozen="dateFrozen"></Column>
      <!-- <Column field="status" header="Status" style="min-width: 200px"></Column> -->

    </DataTable>
  </div>
</template>
