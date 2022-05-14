<template>
    <header class="header">
        <base-card>
            <h1 class="header__title title">Поиск</h1>
            <div class="header__bar">
                <div class="header__search search">
                    <input class="search__input" id="search" type="text" placeholder="Введи имя, тег, почту..." :value="enteredSearch" @input="getEnteredSearch" />
                    <div class="search__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43203 2.04546 6.24272 2.98759 4.61514 4.61517C2.98756 6.24275 2.04543 8.43207 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8482 21.617 21.7738 21.71 21.68C21.8902 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9923 4.1345 9.63439C4.4046 8.27653 5.07128 7.02925 6.05025 6.05028C7.02922 5.07131 8.2765 4.40463 9.63436 4.13453C10.9922 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="#C3C3C6"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="header__tabs">
                <the-tabs :tabs="tabs"></the-tabs>
            </div>
        </base-card>
    </header>
</template>

<script>
    import TheTabs from '../ui/TheTabs.vue';

    export default {
        components: {
            'the-tabs': TheTabs
        },
        data() {
            return {
                tabs: [
                    {
                        id: 'all',
                        value: 'Все'
                    },
                    {
                        id: 'Designer',
                        value: 'Дизайнеры'
                    },
                    {
                        id: 'Analyst',
                        value: 'Аналитики'
                    },
                    {
                        id: 'Manager',
                        value: 'Менеджеры'
                    },
                    {
                        id: 'Developer',
                        value: 'Разработчики'
                    }
                ],
                enteredSearch: ''
            }
        },
        methods: {
            getEnteredSearch($event) {
                this.$store.commit('filter/getEnterSearch', $event.target.value)
            }
        },
        created() {
            this.enteredSearch = this.$store.getters['filter/search'];
        }
    }
</script>

<style lang="scss">
    .header {
        border-bottom: 0.33px solid #C3C3C6;
        &__title {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #050510;
        }
        &__bar {
            display: flex;
            align-items: center;
            margin-top: 18px;
            padding: 8px 12px;
            min-height: 40px;
            background: #F7F7F8;
            border-radius: 16px;
        }
        &__tabs {
            margin-top: 22px;
        }
    }
    .search {
        position: relative;
        padding-left: 32px;
        padding-right: 16px;
        width: 100%;
        &__icon {
            position: absolute;
            left: 0;
            top: -1px;
            svg {
                path {
                    transition: all .3s ease;
                }
            }
        }
        &__input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            color: #050510;
            caret-color: #6534FF;
            &::placeholder {
                font-weight: 500;
                font-size: 15px;
                line-height: 20px;
                color: #C3C3C6;
            }
            &:focus {
                & + .search__icon {
                    svg {
                        path {
                            fill: #050510;
                        }
                    }
                }
            }
            
        }
    }
</style>