<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide><img class="w-100" src="../assets/img/lb1.jpeg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/img/lb2.jpeg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/img/lb3.jpeg" alt=""></swiper-slide>
      <div class="px-3 pb-2 swiper-pagination pagination-home text-right" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 pt-3 text-dark-1 text-center">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i> 收起
      </div>
    </div>
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
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right:  1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}

</style>

