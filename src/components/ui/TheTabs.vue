<template>
    <ul class="tabs">
        <li 
            class="tabs__item"
            :class="{'tabs__item_active': tab.id === activeId }"
            v-for="tab in tabs"
            :key="tab.id"
            @click="setActiveClass(tab.id)"
        > 
            {{ tab.value }} 
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            tabs: Array
        },
        data() {
            return {
                activeId: 'all'
            }
        },
        methods: {
            setActiveClass(id) {
                this.activeId = id;

                this.$store.commit('filter/getValueTab', this.activeId);
            }
        }
    }
</script>

<style lang="scss">
    .tabs {
        display: flex;
        align-items: center;
        &__item {
            position: relative;
            padding: 8px 12px;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
            color: #97979B;
            cursor: pointer;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2px;
                width: 0%;
                background-color: #6534FF;
                transition: width .4s ease-in;
            }
            &_active {
                &::after {
                    width: 100%;
                }
            }
        }
    }
</style>