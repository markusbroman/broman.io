<template>
  <figure class="logo mt-index">
    <logo />
  </figure>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head: {
    title: 'Markus Broman | broman.io',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page of broman.io'
      }
    ]
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
