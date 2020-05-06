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
    <!-- end of nav nav-icon -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <!-- #items关联ListCard子组件的绑定的子组件的category -->
      <template #items="{category}">
        <router-link
          class="py-2 fs-lg d-flex"
          v-for="(item, i) in category.newsList"
          :key="i"
          tag="div"
          :to="`/articles/${item._id}`">
          <span class="text-info">[{{item.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{item.title}}</span>
          <span class="text-grey-1 fs-sm">{{ item.createdAt | data }}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- end of news -->

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <div class="p-2 text-center" style="width: 20%" v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100" alt=""/>
            <div>{{hero.name}}</div>
          </div>
        </div>
      </template>
    </m-list-card>
    <!-- end of hero -->

    <m-card icon="shipin" title="精彩视频"></m-card>
    <!-- end of video -->

    <m-card icon="shu" title="图文攻略"></m-card>
    <!-- end of img content -->
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    data(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [],
      heroCats: []
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
      console.log(res.data)
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

