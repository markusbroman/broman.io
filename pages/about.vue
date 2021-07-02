<template>
  <article class="flex flex-col items-center mt-content">
    <div
      v-html="$md.render(aboutPage.body)"
      class="w-640 max-w-full"
    />
  </article>
</template>

<script>
export default {
  computed: {
    aboutPage () {
      return this.$store.state.aboutPage
    }
  },
  head () {
    return {
      title: `${this.aboutPage.title} | ${this.$store.state.siteInfo.sitename}`
    }
  }
}
</script>
