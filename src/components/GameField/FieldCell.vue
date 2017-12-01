<template>
  <div class="cell" v-bind:class="{ alive: isAlive }"></div>
</template>

<script>
  export default {
    name: 'GameFieldCell',
    props: {
      isAlive: {
        type: Boolean,
      },
    },
  };
</script>

<style scoped>
  .cell {
    cursor: pointer;
    width: 10px;
    height: 10px;
    background-color: #fff375;
    border: 1px solid #e0e0e0;
    transition-duration: 100ms;
  }
  .alive {
    background-color: #1bac01;
  }
</style>
