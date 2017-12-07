<template>
  <input
    min="1"
    max="70"
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
    },
    methods: {
      changeFieldSize(evt) {
        const value = ((+evt.target.value % 70) + 10);
        evt.target.value = value; // eslint-disable-line
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
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    user-select: none;
    color: transparent;
    text-shadow: 0 0 0 #1adf08;
    font-size: 25px;
    width: 30px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    appearance: none;
  }
  input[type=number]{
    -moz-appearance:textfield;
  }
</style>
