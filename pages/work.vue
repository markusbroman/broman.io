<template>
  <article class="flex flex-col items-center mt-content">
    <div
      v-html="$md.render(workPage.body)"
      class="w-640 max-w-full"
    />
  </article>
</template>

<script>
export default {
  computed: {
    workPage () {
      return this.$store.state.workPage
    }
  },
  head () {
    return {
      title: `${this.workPage.title} | ${this.$store.state.siteInfo.sitename}`
    }
  }
}
</script>
