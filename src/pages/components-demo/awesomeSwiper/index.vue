<template>
    <div class="awesome-swiper p20">
        <code><a class="link-type" href="https://surmon-china.github.io/vue-awesome-swiper/" target="_block">Vue-Awesome-Swiper</a>基于 Swiper4、适用于 Vue 的轮播组件，支持服务端渲染和单页应用</code>
        <div class="swiperbox">
            <code>缩略图控制</code>
            <div class="swiper">
                <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}"></swiper-slide>
                </swiper>
                <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}"></swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code>缩略图循环控制</code>
            <div class="swiper">
                <swiper :options="swiperOptionTop2" class="gallery-top" ref="swiperTop2">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}"></swiper-slide>
                    <div class="swiper-button-next2 swiper-button-white" slot="button-next"></div>
                    <div class="swiper-button-prev2 swiper-button-white" slot="button-prev"></div>
                </swiper>
                <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs2">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}"></swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code>视差效果</code>
            <div class="swiper">
                <swiper :options="swiperOptionTop3">
                    <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
                    <swiper-slide>
                    <div class="title" data-swiper-parallax="-100">Slide 1</div>
                    <br>
                    <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                    <div class="text" data-swiper-parallax="-300">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                    </div>
                    </swiper-slide>
                    <swiper-slide>
                    <div class="title" data-swiper-parallax="-100">Slide 2</div>
                    <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                    <div class="text" data-swiper-parallax="-300">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                    </div>
                    </swiper-slide>
                    <swiper-slide>
                    <div class="title" data-swiper-parallax="-100">Slide 3</div>
                    <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                    <div class="text" data-swiper-parallax="-300">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                    </div>
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                    <div class="swiper-button-prev3 swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next3 swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code> Zoom （ 变焦、点击放大 ） </code>
            <div class="swiper swiper4">
                <swiper :options="swiperOptionTop4" class="gallery-top" ref="swiperTop4">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                        <div class="swiper-zoom-container">
                            <img :src="slide">
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                    <div class="swiper-button-prev4" slot="button-prev"></div>
                    <div class="swiper-button-next4" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code> Mousewheel Control （ 鼠标控制 / 聚焦后滚轮 ） </code>
            <div class="swiper">
                <swiper :options="swiperOptionTop5" class="gallery-top" ref="swiperTop5">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}">

                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                    <div class="swiper-button-prev5" slot="button-prev"></div>
                    <div class="swiper-button-next5" slot="button-next"></div>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code>3D Flip Effect （ 3D翻转切换 ） </code>
            <div class="swiper">
                <swiper :options="swiperOptionTop6" class="gallery-top" ref="swiperTop6">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}">

                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code>3D滚动切换 </code>
            <div class="swiper swiper7">
                <swiper :options="swiperOptionTop7" class="gallery-top" ref="swiperTop7">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}">

                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code>3D Cube Effect （ 3D方块效果 ） </code>
            <div class="swiper">
                <swiper :options="swiperOptionTop8" class="gallery-top" ref="swiperTop8">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}">

                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="swiperbox">
            <code>Fade Effect （ 渐变切换 ） </code>
            <div class="swiper">
                <swiper :options="swiperOptionTop9" class="gallery-top" ref="swiperTop9">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" :style="{backgroundImage: `url(${slide})`,backgroundSize: '100%'}">

                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                </swiper>
            </div>
        </div>
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
                swiperOptionTop2: {
                    spaceBetween: 10,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next2',
                        prevEl: '.swiper-button-prev2'
                    }
                },
                swiperOptionTop3: {
                    speed: 600,
                    parallax: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next3',
                        prevEl: '.swiper-button-prev3'
                    }
                },
                swiperOptionTop4: {
                    zoom: true,
                    lazy: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionTop5: {
                    direction: 'vertical',
                    slidesPerView: 1,
                    spaceBetween: 30,
                    mousewheel: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                swiperOptionTop6: {
                    effect: 'flip',
                    grabCursor: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                swiperOptionTop7: {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : true
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                swiperOptionTop8: {
                    effect: 'cube',
                    loop: true,
                    grabCursor: true,
                    cubeEffect: {
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    }
                },
                swiperOptionTop9: {
                    effect: 'fade',
                    grabCursor: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
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
                const swiperTop2 = this.$refs.swiperTop2.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                const swiperThumbs2 = this.$refs.swiperThumbs2.swiper
                swiperTop.controller.control = swiperThumbs
                swiperTop2.controller.control = swiperThumbs2
                swiperThumbs.controller.control = swiperTop
                swiperThumbs2.controller.control = swiperTop2
            })
        },
        methods: {

        }
    }
</script>
<style lang="less" scoped>
  .awesome-swiper{
      .swiperbox{
          width: 100%;
          height:500px;
      }
      .swiper{
          height:400px;
      }
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
  .swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
    background-color: transparent!important;
    justify-content: space-around!important;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-1.jpg);
  }
  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }
  .swiper-slide .subtitle {
    font-size: 21px;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
  .swiper4 .swiper-slide img {
    width: 80%;
    height: auto;
    margin: 0 10%;
  }
  .swiper7 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>
