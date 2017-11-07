<template>
  <div class="container">
    <h2>Settings</h2>
    <div>
      <span>Field size</span>
      <size-control
        :label="'Rows:'"
        :metricType="'rows'"
      ></size-control>
      <size-control
        :label="'Columns:'"
        :metricType="'columns'"
      ></size-control>
      <div>
        <button @click="applySettings">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { FieldSizeControls } from '../components';

  export default {
    name: 'SettingsPage',
    components: {
      'size-control': FieldSizeControls,
    },
    methods: {
      applySettings() {
        this.$router.push('/');
      },
    },
  };
</script>

<style scoped>

</style>
