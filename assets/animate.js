import anime from 'animejs'

export function logoAnimation(logoPaths) {
  const StartUpTimeline = anime.timeline({
    autoplay: true
  })

  StartUpTimeline.add({
    targets: logoPaths,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutQuart',
    delay(el, i) {
      return i * 100
    },
    opacity: 1,
    duration: 1000,
    direction: 'alternate'
  })
}

export function globalAnimation(menu, footer) {
  const StartUpTimeline = anime.timeline({
    autoplay: true
  })

  StartUpTimeline.add({
    targets: menu,
    translateX: ['-400%', '0%'],
    easing: 'easeInOutQuint',
    opacity: 1,
    duration: 500,
    offset: 2000
  }).add({
    targets: footer,
    translateX: ['400%', '0%'],
    easing: 'easeInOutQuint',
    opacity: 1,
    duration: 500,
    offset: 2000
  })
}

export function swiperAnimation(swiper) {
  const StartUpTimeline = anime.timeline({
    autoplay: true
  })

  StartUpTimeline.add({
    targets: swiper,
    translateY: ['100%', '0%'],
    easing: 'easeInOutQuint',
    opacity: 1,
    duration: 1000
  })
}
