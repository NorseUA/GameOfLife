<template>
  <div class="container">
    <game-field></game-field>
  </div>
</template>

<script>
  import { GameField } from '../components';

  export default {
    name: 'NewGamePage',
    created() {
      this.computeEmptyColony();
    },
    components: {
      'game-field': GameField,
    },
    methods: {
      computeEmptyColony() {
        this.$store.commit({
          type: 'computeEmptyColony',
        });
      },
    },
  };
</script>

<style scoped>

</style>
