<template>
    <div class="content">
        <base-card>
            <div class="employees-list">
                <div 
                    class="employees-list__employee employee"
                    v-for="employee in employees"
                    :key="employee.id"
                >
                    <div class="employee__top">
                        <span class="employee__fullname">{{ employee.firstName }} {{ employee.lastName }} </span>
                        <span class="employee__tag"> {{ employee.userTag }}</span>
                    </div>
                    <div class="employee__bottom">
                        <span class="employee__position"> {{ employee.position }} </span>
                    </div>
                </div>
            </div>
        </base-card>
    </div>
</template>

<script>
    export default {
        computed: {
            employees() {
                return this.$store.getters['filter/employees'];
                
            }
        },
        beforeCreate() {
            const url = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';

            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.$store.dispatch('filter/getArrayEmployees', data.items);
            });
        },
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

    .employee {
        &__fullname {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #050510;
        }
        &__tag {
            margin-left: 4px;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #97979B;
            text-transform: lowercase;
        }
        &__position {
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #55555C;
        }
        &__bottom {
            margin-top: 4px;
        }
    }
</style>