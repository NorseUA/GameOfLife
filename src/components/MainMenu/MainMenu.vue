<template>
  <div class="mainMenu">
    <div v-for="item in config" :key="item.path">
      <nav-item :path="item.path" :label="item.label"></nav-item>
    </div>
  </div>
</template>

<script>
  import NavigationItem from './NavigationItem';
  import config from './mainMenuConfig';

  export default {
    name: 'MainMenu',
    data() {
      return {
        config,
      };
    },
    components: {
      'nav-item': NavigationItem,
    },
  };
</script>

<style scoped>
  .mainMenu {
    text-align: center;
    font-size: 29px;
  }

</style>
