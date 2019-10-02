<template>
  <article class="flex flex-col items-center mt-content">
    <div
      class="w-640 max-w-full"
      v-html="$md.render(workPage.body)"
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
