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
    <h1 class="text-4xl font-bold mb-6" style="color: #899499;">Container on Loan</h1>  
  </div>

  <div class="card shadow-md" style="height: 550px">
    <!-- Tab content -->
    <div>
      <ul class="list-none p-0 m-0 mt-20">
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0" style="font-size: 24px;">Container on loan :</span>
          </div>
          <div class="mt-2 md:mt-0 flex items-center">
            <span class="ml-4 font-medium" style="font-size: 24px;">50</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0" style="font-size: 24px;">Area :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium" style="font-size: 24px;">Guadalupe</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-20">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0" style="font-size: 24px;">Gallons Collected :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium" style="font-size: 24px;">{{ formatCurrency(20) }}</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <span class="text-surface-900 dark:text-surface-0 font-bold mr-2 mb-1 md:mb-0" style="font-size: 24px;">Amount Collected :</span>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
            <span class="ml-4 font-medium" style="font-size: 24px;">{{ formatCurrency(20) }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
