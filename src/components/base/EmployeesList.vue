<template>
    <div class="employees-list">
        <employee-item
            v-for="employee in employees"
            :key="employee.id"
            :employee="employee"
        ></employee-item>
    </div>
</template>

<script>
    import EmployeeItem from './EmployeeItem.vue';

    export default {
        props: ['employees'],
        components: {
            'employee-item': EmployeeItem
        }
    }
</script>

<style lang="scss">
    .employees-list {
        &__employee {
            padding: 12px 0;
            &:not(:first-child) {
                margin-top: 4px;
            }
        }
    }
</style>