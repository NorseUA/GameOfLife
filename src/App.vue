<template>
  <div id="app">
    <h1 class="title">Bacilki</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  @font-face{
    font-family: 'FunkyMother';
    src: url('../static/fonts/funkyMother.otf');
  }
  html {
    /*background-color: rgba(151, 255, 98, 0.3);*/
  }
  #app {
    font-family: FunkyMother;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  button.default {
    font-family: FunkyMother;
    font-size: 29px;
    /*border: 1px solid #00a6ee;*/
    border: none;
    color: #00a6ee;
    background: none;
    border-radius: 3px;
    padding: 10px 25px;
    cursor: pointer;
    outline: none;
  }

  button.default:hover{
    color: #59e116;
    border-color: #59e116;
  }
</style>

<style scoped>
  .title {
    text-align: center;
    /*font-family: FunkyMother;*/
    font-weight: initial;
    color: #59e116;
    font-size: 40px;
  }
</style>
