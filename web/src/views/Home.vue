<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide><img class="w-100" src="../assets/img/lb1.jpeg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/img/lb2.jpeg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/img/lb3.jpeg" alt=""></swiper-slide>
      <div class="px-3 pb-2 swiper-pagination pagination-home text-right" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        },
      }
    }
  }
}
</script>
<style lang="scss">
@import '../assets/style/variables';
.pagination-home {
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
    border-radius: .1538rem;
    &.swiper-pagination-bullet-active {
      background: map-get($colors , 'info')
    }
  }
}
</style>

