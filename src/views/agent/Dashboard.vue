<script setup>
import { useLayout } from "@/layout/composables/layout";
import { onBeforeMount, ref } from 'vue';

const { getPrimary, getSurface, isDarkTheme } = useLayout();
const customers2 = ref(null);

onBeforeMount(() => {

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
      <center>
        <h1 class="text-4xl font-bold mb-6" style="color: #899499;">Guadalupe</h1>
      </center>
      <ul class="list-none p-0 m-0 mt-10 px-10">
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div style="background-color: #007fff;padding: 20px;border-radius: 10px;color: white;">
            <span class="font-bold mb-1 md:mb-0"
              style="font-size: 24px;margin-right: 720px">Container on loan :</span>
            <span class="ml-8 font-medium" style="font-size: 24px;">50</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div style="background-color: #007fff;padding: 20px;border-radius: 10px; color: white;">
            <span class="font-bold mb-1 md:mb-0"
              style="font-size: 24px;margin-right: 720px">Gallons Delivered :</span>
            <span class="ml-8 font-medium" style="font-size: 24px;">50</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div style="background-color: #007fff;padding: 20px;border-radius: 10px;color: white;">
            <span class="font-bold mb-1 md:mb-0"
              style="font-size: 24px;margin-right: 720px">Gallons Collected :</span>
            <span class="ml-8 font-medium" style="font-size: 24px;">50</span>
          </div>
        </li>
        <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div style="background-color: #007fff;padding: 20px;border-radius: 10px;color: white;">
            <span class="font-bold mb-1 md:mb-0"
              style="font-size: 24px;margin-right: 720px">Amount Collected:</span>
            <span class="ml-8 font-medium" style="font-size: 24px;">50</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
