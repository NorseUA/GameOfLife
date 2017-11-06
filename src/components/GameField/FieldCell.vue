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
    width: 15px;
    height: 15px;
    background-color: #fff375;
    border: 1px solid #ccc;
  }
  .alive {
    background-color: #27ff02;
  }
</style>
