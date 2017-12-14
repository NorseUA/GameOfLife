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
    margin: -1px;
    background-color: #fd0;
    border: 1px solid rgba(173, 173, 173, 0.75);
    transition-duration: 250ms;
    border-radius: 5px;
  }

  .cell:hover {
    background-color: #fffa5f;
  }

  .alive {
    background-color: #1ccd01;
    transition-duration: 250ms;
  }

  .alive:hover {
    background-color: #1bac01;
  }

  @media screen and (max-width: 767px) {
    .cell {
      width: 20px;
      height: 20px;
    }
  }

</style>
