<template>
  <div class="container">
    Hola
    <main-menu />
  </div>
</template>

<script>
  import { MainMenu } from '../components';

  export default {
    name: 'HomePage',
    components: {
      'main-menu': MainMenu,
    },
  };
</script>

<style scoped>

</style>
