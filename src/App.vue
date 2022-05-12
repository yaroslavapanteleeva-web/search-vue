<template>
  <main>
    <the-header></the-header>
    <employee-list></employee-list>
  </main>
</template>

<script>
  import TheHeader from './components/base/TheHeader.vue';
  import EmployeeList from './components/ui/EmployeeList.vue';

  export default {
    components: {
      'the-header': TheHeader,
      'employee-list': EmployeeList
    }
  }
</script>