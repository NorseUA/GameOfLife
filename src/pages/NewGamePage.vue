<template>
  <div class="container">
    <div class="gameField">
      <game-field></game-field>
      <div class="controls">
        <button class="default" @click="startLife">Start</button>
        <button class="default" @click="stopLife">Stop</button>
        <button class="default" @click="calculateNewGeneration">Next Generation</button>
      </div>
    </div>
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
  .controls {
    text-align: center;
  }
</style>
