<template>
  <div id="app">
    <h1 class="title">Bacilki</h1>
    <router-view></router-view>
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
  @font-face{
    font-family: 'Sillyheart';
    src: url('../static/fonts/sillyheart.regular.otf');
  }
  html {
    background-color: #5d349a;
  }s
  body {
    margin: 0;
  }
  #app {
    font-family: FunkyMother;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    text-shadow: 2px 1px 5px #000, 0 0 1em #0d29f3;
  }

  button.default {
    font-family: FunkyMother;
    font-size: 29px;
    border: none;
    color: #27e3e4;
    background: none;
    border-radius: 3px;
    padding: 10px 25px;
    cursor: pointer;
    outline: none;
    text-shadow: 2px 1px 5px #000, 0 0 1em #0d29f3
  }

  button.default:hover{
    color: #59e116;
    border-color: #59e116;
  }
</style>

<style scoped>
  .title {
    text-align: center;
    font-weight: initial;
    color: #59e116;
    font-size: 55px;
    margin: 30px 0;
  }
</style>
