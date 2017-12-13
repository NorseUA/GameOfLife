<template>
  <div class="control" @click="changeSpeed">
    {{ normalizedValue }}
  </div>
</template>

<script>
  import get from 'lodash/get';
  import { speedValues, defaultSettings } from '../../constants';

  export default {
    name: 'SpeedControls',
    props: {
      value: {
        type: Number,
      },
    },
    computed: {
      normalizedValue() {
        const currentSpeed = speedValues.find(({ value }) => (value === this.value));
        return currentSpeed.label;
      },
    },
    methods: {
      changeSpeed() {
        const idx = speedValues.findIndex(({ value }) => (value === this.value));
        const newIdx = (idx + 1) % speedValues.length;
        const newValue = get(speedValues, `[${newIdx}].value`) || defaultSettings.speed;
        this.$emit('changeSpeed', newValue);
      },
    },
  };
</script>

<style scoped>
  .control {
    cursor: pointer;
    user-select: none;
    font-size: 35px;
  }
</style>
