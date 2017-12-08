<template>
  <div class="container">
    <div class="title">Settings</div>
    <settings
      :initialRows="fieldSize.rows"
      :initialColumns="fieldSize.columns"
      :initialSpeed="speedOfGame"
      :applySettings="applySettings"
      :cancelSettings="cancelSettings"
    ></settings>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { Settings } from '../components';

  export default {
    name: 'SettingsPage',
    components: {
      settings: Settings,
    },
    computed: {
      ...mapGetters([
        'fieldSize',
        'speedOfGame',
      ]),
    },
    methods: {
      applySettings(settings) {
        this.changeSettings(settings);
        this.$router.push('/');
      },
      cancelSettings() {
        this.$router.push('/');
      },
      ...mapActions([
        'changeSettings',
      ]),
    },
  };
</script>

<style scoped>
  .container {
    text-align: center;
    color: #00a6ee;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    justify-content: space-around;
    align-items: center;
  }

  .title {
    font-size: 35px;
    margin-bottom: 30px;
  }
</style>
