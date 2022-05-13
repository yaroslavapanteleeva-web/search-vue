<template>
    <router-link :to="profileLink" class="employees-list__employee employee">
        <div class="employee__top">
            <span class="employee__fullname">{{ employee.firstName }} {{ employee.lastName }} </span>
            <span class="employee__tag"> {{ employee.userTag }}</span>
        </div>
        <div class="employee__bottom">
            <span class="employee__position"> {{ employee.position }} </span>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: ['employee'],
        computed: {
            profileLink() {
                return `${this.$route.path}${this.employee.id}`;
            }
        }
    }
</script>

<style lang="scss">
    .employee {
        text-decoration: none;
        display: block;
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
