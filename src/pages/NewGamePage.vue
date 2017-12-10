<template>
  <div class="container">
    <div class="gameField">
      <game-field></game-field>
      <div class="controls">
        <button class="default" @click="goBack">Back</button>
        <button v-if="colonyIsAlive" class="default" @click="stopLife">Stop</button>
        <button v-else="colonyIsAlive" class="default" @click="startLife">Start</button>
        <button class="default" @click="calculateNewGeneration">Next Generation</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { GameField } from '../components';

  export default {
    name: 'NewGamePage',
    created() {
      this.createNewEmptyColony();
    },
    components: {
      'game-field': GameField,
    },
    computed: {
      ...mapGetters([
        'colonyIsAlive',
      ]),
    },
    methods: {
      goBack() {
        this.stopLife();
        this.$router.push('/');
      },
      ...mapActions([
        'createNewEmptyColony',
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
