<template>
  <div class="navItem">
    <router-link :to="path">{{ label }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavItem',
    props: {
      path: {
        type: String,
      },
      label: {
        type: String,
      },
    },
  };
</script>

<style scoped>
  .navItem {
    padding: 10px 20px;
  }
  a {
    text-decoration: none;
    color: #27e3e4;
  }
  a:hover {
    color: #1adf08;
  }
</style>
