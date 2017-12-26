<template>
  <div class="container">
    <div class="title">Settings</div>
    <settings
      :initialRows="fieldSize.rows"
      :initialColumns="fieldSize.columns"
      :initialSpeed="speedOfGame"
      :fieldSizeConfig="getSizeConfig"
      :applySettings="applySettings"
      :cancelSettings="cancelSettings"
    ></settings>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { Settings } from '../components';
  import { fieldSizeConfig, mobileFieldSizeConfig } from '../constants';

  export default {
    name: 'SettingsPage',
    components: {
      settings: Settings,
    },
    computed: {
      getSizeConfig() {
        return this.isMobile ? mobileFieldSizeConfig : fieldSizeConfig;
      },
      ...mapGetters([
        'fieldSize',
        'speedOfGame',
        'isMobile',
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
    color: #20bbff;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 179px);
    align-items: center;
  }

  .title {
    font-size: 35px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    .container {
      min-height: 60vh;
    }
  }
</style>
