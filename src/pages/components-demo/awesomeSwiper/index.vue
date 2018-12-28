<template>
    <div class="awesome-swiper p20">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}"></swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}"></swiper-slide>
        </swiper>
    </div>
  
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOptionTop: {
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                },
                
               swiperSlides: [
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-2.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-4.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-5.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg',
                ]
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
        }
    }
</script>
<style lang="less" scoped>
  .awesome-swiper{
      height: 500px;
  }
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>
