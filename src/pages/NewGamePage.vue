<template>
  <div class="container">
    <div></div>
    <game-field></game-field>
    <button @click="startLife">Start</button>
    <button @click="stopLife">Stop</button>
    <button @click="calculateNewGeneration">Next Generation</button>
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
      ...mapActions([
        'calculateNewGeneration',
        'startLife',
        'stopLife',
      ]),
    },
  };
</script>

<style scoped>

</style>
