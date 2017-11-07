<template>
  <div>
    <label>
      <span>{{ label }}</span>
      <input
        type="number"
        :value="currentSize"
        @change="changeFieldSize"
      >
    </label>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'FieldSizeControls',
    props: {
      metricType: {
        type: String,
      },
      label: {
        type: String,
      },
    },
    computed: {
      ...mapGetters({
        fieldSize: 'fieldSize',
      }),
      currentSize() {
        return this.fieldSize[this.metricType];
      },
    },
    methods: {
      changeFieldSize(evt) {
        const size = +evt.target.value;
        this.$store.commit({
          type: 'changeFieldSize',
          [this.metricType]: size,
        });
      },
    },
  };
</script>

<style scoped>

</style>
