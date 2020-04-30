<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: active === i}" v-for="(category, i) in categories" :key="i">
        <div class="nav-link" @click="active=i">{{category.name}}</div>
      </div>
    </div>
    <swiper class="pt-3" >
      <swiper-slide v-for="(category, i) in categories" :key="i">
        <!-- 此处为插槽，具名插槽，绑定传给父元素 -->
        <slot name="items" :category="category"></slot>
      </swiper-slide>
    </swiper>
  </m-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true}
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
