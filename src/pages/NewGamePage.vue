<template>
  <div class="container">
    <div></div>
    <game-field></game-field>
    <button @click="calculateNewGeneration">Next</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { GameField } from '../components';

  export default {
    name: 'NewGamePage',
    created() {
      this.$store.dispatch('createNewEmptyColony');
    },
    components: {
      'game-field': GameField,
    },
    methods: {
      ...mapActions(['calculateNewGeneration']),
    },
  };
</script>

<style scoped>

</style>
