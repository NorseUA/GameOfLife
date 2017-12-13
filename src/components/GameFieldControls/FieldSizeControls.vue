<template>
  <input
    min="1"
    max="fieldSizeConfig.maxValue"
    type="number"
    :value="initialSize"
    @click="changeFieldSize"
    readonly
  >
</template>

<script>
  export default {
    name: 'FieldSizeControls',
    props: {
      metricType: {
        type: String,
      },
      initialSize: {
        type: Number,
      },
      maxValue: {
        type: Number,
      },
      step: {
        type: Number,
      },
    },
    methods: {
      changeFieldSize(evt) {
        const value = ((+evt.target.value % this.maxValue) + this.step);
        this.$emit('changeSize', {
          metricType: this.metricType,
          value,
        });
      },
    },
  };
</script>

<style scoped>
  input {
    font-family: 'Sillyheart';
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    user-select: none;
    color: transparent;
    text-shadow: 0 0 0 #1adf08, 2px 1px 5px #000;
    font-size: 40px;
    width: 60px;
    text-align: center;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    appearance: none;
  }
  input[type=number]{
    -moz-appearance:textfield;
  }
</style>
