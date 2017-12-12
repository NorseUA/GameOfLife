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
    background-color: #ffe436;
    border: 1px solid #adadad;
    transition-duration: 250ms;
    border-radius: 5px;
    /*background: radial-gradient(circle at 33% 33%, #ffe436, #000);*/
  }

  .cell:hover {
    background-color: #fffa5f;
  }

  .alive {
    background-color: #1fec01;
    transition-duration: 250ms;
    /*background: radial-gradient(circle at 33% 33%, #1fec01, #000);*/
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
