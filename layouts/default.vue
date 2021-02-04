<template>
  <div
    :style="{'min-height': `${innerHeight}px`}"
    class="flex flex-col p-4 min-h-screen"
  >
    <nav class="self-start">
      <ul class="menu flex list-reset opacity-0">
        <li v-for="(c,i) in siteInfo.menu" v-show="siteInfo" :key="i" :class="i === 0 ? 'pl-0 pr-3' : 'px-3'">
          <nuxt-link class="no-underline link" :to="c.link" v-text="c.name" />
        </li>
      </ul>
    </nav>
    <main class="flex-1">
      <nuxt />
    </main>
    <footer class="footer self-end opacity-0" v-text="footer" />
  </div>
</template>

<script>
import { globalAnimation } from '~/assets/animate'

export default {
  data () {
    return {
      innerHeight: '100vh'
    }
  },
  computed: {
    siteInfo () {
      return this.$store.state.siteInfo
    },
    footer () {
      return `© ${new Date().getFullYear()} ${this.$store.state.siteInfo.siteauthor}`
    }
  },
  mounted () {
    const menu = document.querySelectorAll('.menu')
    const footer = document.querySelectorAll('.footer')
    globalAnimation(menu, footer)

    window.addEventListener('resize', this.getWindowHeight)
    this.getWindowHeight()
  },
  methods: {
    getWindowHeight (event) {
      this.innerHeight = window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--color-2);
    transform: translateY(4px);
    opacity: 0;
    transition: transform 200ms, opacity 200ms;
  }
  &:hover,
  &:focus,
  &.nuxt-link-exact-active {
    &:after {
      transform: translateY(0);
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }
}
</style>
