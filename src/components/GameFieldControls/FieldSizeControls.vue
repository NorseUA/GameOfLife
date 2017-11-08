<template>
  <div>
    <label>
      <span>{{ label }}</span>
      <input
        min="1"
        type="number"
        :value="initialSize"
        @change="changeFieldSize"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: 'FieldSizeControls',
    props: {
      metricType: {
        type: String,
      },
      label: {
        type: String,
      },
      initialSize: {
        type: Number,
      },
    },
    methods: {
      changeFieldSize(evt) {
        const value = +evt.target.value;
        this.$emit('changeSize', {
          metricType: this.metricType,
          value,
        });
      },
    },
  };
</script>

<style scoped>

</style>
