<template>
  <div class="gameField">
    <field-row v-for="(row, idx) in colony" :key="idx" :row="row"></field-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
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
  };
</script>

<style scoped>
  .gameField {
    display: flex;
    flex-direction: column;
  }
</style>
