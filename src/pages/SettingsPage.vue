<template>
  <div class="container">
    <h2>Settings</h2>
    <div>
      <span>Field size</span>
      <size-control
        :label="'Rows:'"
        :metricType="'rows'"
        :initialSize="fieldSize.rows"
        @changeSize="changeFieldSize"
      ></size-control>
      <size-control
        :label="'Columns:'"
        :metricType="'columns'"
        :initialSize="fieldSize.columns"
        @changeSize="changeFieldSize"
      ></size-control>
      <div>
        <button @click="applySettings">Save</button>
        <button @click="cancelSettings">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { FieldSizeControls } from '../components';

  export default {
    name: 'SettingsPage',
    components: {
      'size-control': FieldSizeControls,
    },
    data() {
      return {
        rows: 0,
        columns: 0,
      };
    },
    computed: {
      ...mapGetters([
        'fieldSize',
      ]),
    },
    methods: {
      applySettings() {
        this.$store.dispatch('changeFieldSize', {
          rows: this.rows,
          columns: this.columns,
        });
        this.$router.push('/');
      },
      cancelSettings() {
        this.$router.push('/');
      },
      changeFieldSize({ metricType, value }) {
        this[metricType] = value;
      },
    },
  };
</script>

<style scoped>

</style>
