<template>
  <div class="">
    <Title :title="title" />

    <img src="/favicon.ico" alt="">
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      title: "Welcome to About Vue.js App",
    };
  },
};
</script>

<style></style>
