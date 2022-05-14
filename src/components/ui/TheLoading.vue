<template>
    <div class="loading">
        <div class="loading__items">
            <div class="loading__item" v-for="n in count" :key="n">
                <div class="loading__descriprion">
                    <span class="loading__text _first"></span>
                    <span class="loading__text _last"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: null,
            }
        },
        mounted() {
            const heightWindow = document.documentElement.clientHeight;
            const heightHeaderElement = document.querySelector('.header').clientHeight;

            const heightLoadingWindow = heightWindow - heightHeaderElement;

            const heightLoadingElement = 56;

            this.count = Math.trunc(heightLoadingWindow / heightLoadingElement);  

        }
    }
</script>

<style lang="scss">
    .loading {
        &__item {
            display: flex;
            align-items: center;
            padding: 20px 16px 0 0;
        }
        &__text {
            display: block;
            background: #F3F3F6;
            border-radius: 50px;
            position: relative;
            overflow: hidden;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 50%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
                animation: move 1.5s ease-in-out infinite;
            }
            &._first {
                width: 144px;
                height: 16px;
            }
            &._last {
                margin-top: 6px;
                width: 80px;
                height: 12px;
            }
        }
    }

    @keyframes move {
        100% {
            transform: translateX(100%);
        }
    }
</style>