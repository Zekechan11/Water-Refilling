<script setup>
import { CustomerService } from '@/service/CustomerService';
import { onBeforeMount, ref } from 'vue';

const customers2 = ref(null);
const dateFrozen = ref(false);

onBeforeMount(() => {
    CustomerService.getCustomersLarge().then((data) => (customers2.value = data));

});


function formatCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}

</script>

<template>
    <div class="space">
        <h1 class="text-4xl font-bold mb-6" style="color: #899499;">
            History
        </h1>
    </div>
    
    <div class="card shadow-md">
        <ToggleButton v-model="dateFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Date" offLabel="Date" />

        <DataTable :value="customers2" scrollable scrollHeight="400px" class="mt-6">
            <Column field="representative.name" header="Galllons Collected" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Amount Collected" style="min-width: 200px"></Column>
            <Column field="date" header="Date" style="min-width: 200px" alignFrozen="right" :frozen="dateFrozen"></Column>
            <!-- <Column field="status" header="Status" style="min-width: 200px"></Column> -->
       
        </DataTable>
    </div>
</template>


<style scoped lang="scss">
:deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}

h1 {
    color: #4A5568; /* A nice dark gray color */
    margin-bottom: 1.5rem; /* Adds some spacing below the header */
}
</style>
