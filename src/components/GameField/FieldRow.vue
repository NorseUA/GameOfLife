<template>
  <div class="fieldRow">
    <field-cell
      v-for="(cellState, idx) in row"
      :is-alive="cellState"
      :key="idx"
      @click.native="handleCellClick(idx)"
    ></field-cell>
  </div>
</template>

<script>
  import FieldCell from './FieldCell';

  export default {
    name: 'GameFieldRow',
    components: {
      'field-cell': FieldCell,
    },
    props: {
      row: {
        type: Array,
      },
    },
    methods: {
      handleCellClick(idx) {
        this.$emit('cellClick', idx);
      },
    },
  };
</script>

<style scoped>
  .fieldRow {
    display: flex;
  }
</style>
