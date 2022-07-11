<template>
  <div class="">
    <header>
      <h1>Welcome Man !!</h1>
      <nuxt-link to="/" class="link">HOME</nuxt-link>
      <nuxt-link to="/about" class="link">About</nuxt-link>
            <nuxt-link to="/about/me" class="link">Me</nuxt-link>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
    name: 'default'
};
</script>

<style></style>
