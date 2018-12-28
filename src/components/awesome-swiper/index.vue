<template>
  <div class="swiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`}">

        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'swiper',
        data() {
            return {
               swiperSlides: [
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-2.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-3.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-4.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-5.jpg',
                    'https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg',
                ],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style lang="less" scoped>
    .swiper{
        width:100%;
        position: relative;
    }
</style>

