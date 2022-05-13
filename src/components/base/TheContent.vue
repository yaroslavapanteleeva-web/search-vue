<template>
    <div class="content">
        <base-card>
            <employees-list v-if="sortedEmployees.length > 0" :employees="sortedEmployees"></employees-list>
            <the-error v-else></the-error>
        </base-card>
    </div>
</template>

<script>    
    import EmployeeList from './EmployeesList.vue';
    import TheError from '../ui/TheError.vue';
    import search from '../../mixins/search.js';

    export default {
        mixins: [search],
        components: {
            'employees-list': EmployeeList,
            'the-error': TheError
        },
        data() {
            return {
                employees: [],
            }
        },
        beforeCreate() {
            const url = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.employees = data.items;
                this.$store.dispatch('filter/getListEmployees', this.employees);
            });
        },
    }
</script>

<style lang="scss">

</style>