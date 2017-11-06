<template>
  <div class="fieldRow">
    <field-cell v-for="(cellState, idx) in row" :isAlive="cellState" :key="idx"></field-cell>
  </div>
</template>

<script>
  import FieldCell from './FieldCell';

  export default {
    name: 'GameFieldCell',
    components: {
      'field-cell': FieldCell,
    },
    props: {
      row: {
        type: Array,
      },
    },
  };
</script>

<style scoped>
  .fieldRow {
    display: flex;
  }
</style>
