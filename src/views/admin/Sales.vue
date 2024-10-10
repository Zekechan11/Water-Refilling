<script setup>
import { ref, onMounted, computed } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import { CustomerService } from '@/service/CustomerService';

const customers = ref([]);
const startDate = ref(null);
const endDate = ref(null);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    area: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
});

const loading = ref(true);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = getCustomers(data);
        loading.value = false;
    });
});

const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date); // Store as a Date object
        return d;
    });
};

// Function to format date to MM/DD/YYYY
const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options).replace(/\//g, '/');
};

// Computed property to filter customers based on selected start and end dates
const filteredCustomers = computed(() => {
    return customers.value.filter(customer => {
        const customerDate = new Date(customer.date);
        
        const isAfterStartDate = startDate.value ? customerDate >= new Date(startDate.value) : true;
        const isBeforeEndDate = endDate.value ? customerDate <= new Date(endDate.value) : true;
        
        return isAfterStartDate && isBeforeEndDate;
    });
});

// Method to filter by date
const filterByDate = () => {
    // Re-trigger computed property to update the filteredCustomers
    filteredCustomers.value; 
};
</script>


<template>
    <div class="card shadow-md">
        <DataTable 
            v-model:filters="filters" 
            :value="filteredCustomers" 
            paginator 
            :rows="10" 
            dataKey="id" 
            filterDisplay="row" 
            :loading="loading"
            :globalFilterFields="['area', 'collected', 'representative.name']">

            <template #header>
                <div class="flex justify-end items-center space-x-4">
                    <IconField>
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>

                    <IftaLabel>
                        <DatePicker v-model="startDate" inputId="start-date" placeholder="Start Date" showIcon iconDisplay="input" variant="filled" @change="filterByDate"/>
                    </IftaLabel>

                    <IftaLabel>
                        <DatePicker v-model="endDate" inputId="end-date" placeholder="End Date" showIcon iconDisplay="input" variant="filled" @change="filterByDate"/>
                    </IftaLabel>
                </div>
            </template>

            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>

            <Column header="Agent Name" filterField="representative" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
            </Column>

            <Column field="area" header="Area" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.area }}
                </template>
            </Column>

            <Column field="collected" header="Collected Amount" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.collected }}
                </template>
            </Column>

            <Column header="Date" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
            </Column>
        </DataTable>
    </div>
</template>


