<template>
    <div class="error">
        <div class="error__img">
            <img src="../../assets/images/search-error.jpg" alt="error" />
        </div>
        <div class="error__description">
            <h2 class="error__title">{{ title }}</h2>
            <p class="error__text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'text']
    }
</script>

<style lang="scss">
    .error {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &__img {
            width: auto;
            height: auto;
        }
        &__description {
            margin-top: 8px;
        }
        &__title {
            font-weight: 600;
            font-size: 17px;
            line-height: 22px;
            text-align: center;
            color: #050510;
        }
        &__text {
            margin-top: 12px;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #97979B
        }
    }
</style>