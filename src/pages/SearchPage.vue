<template>
    <div>
        <the-header></the-header>
        <the-content></the-content>
    </div>
</template>

<script>
  import TheHeader from '../components/base/TheHeader.vue';
  import TheContent from '../components/base/TheContent.vue';

  export default {
    components: {
      'the-header': TheHeader,
      'the-content': TheContent
    }
  }
</script>