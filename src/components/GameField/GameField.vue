<template>
  <div class="gameField">
    <field-row
      v-for="(row, idx) in colony"
      :key="idx"
      :row="row"
      @cellClick="handleCellClick(idx, $event)"
    ></field-row>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import FieldRow from './FieldRow';

  export default {
    name: 'GameField',
    components: {
      'field-row': FieldRow,
    },
    computed: {
      ...mapGetters({
        colony: 'colony',
      }),
    },
    methods: {
      ...mapActions(['changeCellState']),
      handleCellClick(rowIdx, colIdx) {
        this.changeCellState({ rowIdx, colIdx });
      },
    },
  };
</script>

<style scoped>
  .gameField {
    display: flex;
    flex-direction: column;
  }
</style>
