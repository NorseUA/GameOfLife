<template>
  <div class="container">
    <div class="title">Settings</div>
    <div class="controls">
      <div class="controlLabel">Field size</div>
      <div>
        <size-control
          :metricType="'rows'"
          :initialSize="fieldSize.rows"
          @changeSize="changeFieldSize"
        ></size-control>
        <span>x</span>
        <size-control
          :metricType="'columns'"
          :initialSize="fieldSize.columns"
          @changeSize="changeFieldSize"
        ></size-control>
      </div>
      <div class="controlLabel">Speed</div>

    </div>
    <div>
      <button class="default" @click="applySettings">Save</button>
      <button class="default" @click="cancelSettings">Cancel</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { FieldSizeControls } from '../components';

  export default {
    name: 'SettingsPage',
    components: {
      'size-control': FieldSizeControls,
    },
    data() {
      return {
        rows: 0,
        columns: 0,
      };
    },
    computed: {
      ...mapGetters([
        'fieldSize',
      ]),
    },
    methods: {
      applySettings() {
        this.$store.dispatch('changeFieldSize', {
          rows: this.rows,
          columns: this.columns,
        });
        this.$router.push('/');
      },
      cancelSettings() {
        this.$router.push('/');
      },
      changeFieldSize({ metricType, value }) {
        this[metricType] = value;
      },
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

  .controls {
    flex: 1;
  }

  .controlLabel {
    margin: 15px 0;
  }
</style>
