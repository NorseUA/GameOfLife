<template>
  <div class="container">
    <div></div>
    <game-field></game-field>
  </div>
</template>

<script>
  import { GameField } from '../components';

  export default {
    name: 'NewGamePage',
    created() {
      this.$store.dispatch('createNewEmptyColony');
    },
    components: {
      'game-field': GameField,
    },
  };
</script>

<style scoped>

</style>
