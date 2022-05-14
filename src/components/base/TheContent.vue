<template>
    <div class="content">
        <base-card>
            <the-loading v-if="!isLoading && !isCriticalError"></the-loading>
            <employees-list v-else-if="sortedEmployees.length > 0 && !isCriticalError" :employees="sortedEmployees"></employees-list>
            <the-error 
                v-else-if="sortedEmployees.length === 0 && !isCriticalError"
                title="Мы никого не нашли" 
                text="Попробуй скорректировать запрос"
            >
            </the-error>
            <the-error v-else title="Какой-то сверхразум все сломал" text="Постараемся быстро починить"></the-error>
        </base-card>
    </div>
</template>

<script>    
    import EmployeeList from './EmployeesList.vue';
    import TheError from '../ui/TheError.vue';
    import TheLoading from '../ui/TheLoading.vue'
    import search from '../../mixins/search.js';

    export default {
        mixins: [search],
        components: {
            'employees-list': EmployeeList,
            'the-error': TheError,
            'the-loading': TheLoading
        },
        data() {
            return {
                employees: [],
                isCriticalError: false,
                isLoading: false,
            }
        },
        beforeCreate() {
            const url = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

            this.isCriticalError = false;

            fetch(url)
            .then((response) => {
                if (!response.ok) {
                    this.isCriticalError = true;
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                this.employees = data.items;
                this.isLoading = true;
                this.$store.dispatch('filter/getListEmployees', this.employees);
            })
        },
    }
</script>

<style lang="scss">

</style>