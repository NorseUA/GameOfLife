<template>
  <div class="container">
    <div class="controls">
      <div class="controlItem">
        <div class="controlLabel">Field size</div>
        <size-control
          :metricType="'rows'"
          :initialSize="rows"
          :maxValue="fieldSizeConfig.maxValue"
          :step="fieldSizeConfig.step"
          @changeSize="changeFieldSize"
        ></size-control>
        <span>x</span>
        <size-control
          :metricType="'columns'"
          :initialSize="columns"
          :maxValue="fieldSizeConfig.maxValue"
          :step="fieldSizeConfig.step"
          @changeSize="changeFieldSize"
        ></size-control>
      </div>

      <div class="controlItem">
        <div class="controlLabel">Speed</div>
        <speed-control
          :value="speed"
          @changeSpeed="changeSpeed"
        ></speed-control>
      </div>
    </div>

    <div class="buttons">
      <button class="default" @click="saveSettings">Save</button>
      <button class="default" @click="cancelSettings">Cancel</button>
    </div>
  </div>
</template>

<script>
  import FieldSizeControls from '../../components/GameFieldControls/FieldSizeControls';
  import SpeedControls from '../../components/GameFieldControls/SpeedControls';

  export default {
    name: 'Settings',
    components: {
      'size-control': FieldSizeControls,
      'speed-control': SpeedControls,
    },
    props: {
      initialRows: {
        type: Number,
      },
      initialColumns: {
        type: Number,
      },
      initialSpeed: {
        type: Number,
      },
      fieldSizeConfig: {
        type: Object,
      },
      applySettings: {
        type: Function,
      },
      cancelSettings: {
        type: Function,
      },
    },
    data() {
      return {
        rows: this.initialRows,
        columns: this.initialColumns,
        speed: this.initialSpeed,
      };
    },
    methods: {
      changeFieldSize({ metricType, value }) {
        this[metricType] = value;
      },
      changeSpeed(value) {
        this.speed = value;
      },
      saveSettings() {
        this.applySettings({
          rows: this.rows,
          columns: this.columns,
          speed: this.speed,
        });
      },
    },
  };
</script>

<style scoped>
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .controls {
    color: #1adf08;
  }

  .controlLabel {
    margin: 25px 0 10px;
    color: #fd0;
  }

  .buttons {
    margin-bottom: 150px;
  }

  @media screen and (max-width: 767px) {
    .buttons {
      margin-bottom: 50px;
    }
  }
</style>
