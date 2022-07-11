<template>
  <div class="">
    <Title title="Home" />

    <a href="http://google.com" target="_blank" rel="noopener noreferrer"
      >Goooooogle</a
    >
    <img src="/favicon.ico" alt="" />

    <button @click="sumar">Increment !! {{ $store.state.counter }}</button>
  </div>
</template>

<script>
export default {
  methods: {
    sumar() {
      this.$store.commit("increment");
    },
  },
};
</script>
