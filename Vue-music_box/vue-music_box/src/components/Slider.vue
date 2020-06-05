<template>
  <!-- <Slider>
      <span>sss</span>
      <div v-for="item in slidersList" :key="item.key">
        <a :href="item.linkURL" alt="">
          <img :src="item.url" alt="">
        </a>
      </div>
    </Slider> -->
  <div v-swiper:mySwiper="swiperOption" style="width: 452px;">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="item.key" v-for="item in slidersList">
        <a :href="item.linkURL" alt="">
          <img :src="item.url" alt="" />
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
/* eslint-disable */
// import Slider from "../base/slider/slider.vue";
import { ERR_OK } from "../api/config.js";
import { requestJD } from "../api/jd.m.js";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

const slidersList = [
  {
    key: "1",
    url:
      "https://y.gtimg.cn/music/common/upload/category_area/2487865.jpg?max_age=2592000",
    linkURL: "https://www.baidu.com"
  },
  {
    key: "2",
    url:
      "https://y.gtimg.cn/music/common/upload/category_area/2488425.png?max_age=2592000",
    linkURL: "https://www.jd.com"
  },
  {
    url:
      "https://y.gtimg.cn/music/common/upload/category_area/2468315.jpg?max_age=2592000",
    key: "3",
    linkURL: "https://www.jd.com"
  },
  {
    url:
      "https://y.gtimg.cn/music/common/upload/category_area/2274447.png?max_age=2592000",
    key: "4",
    linkURL: "https://www.jd.com"
  }
];
export default {
  name: "Slider",
  components: {
    // Slider,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      slidersList,
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        speed: 1000,
        autoplay: {
          delay: 1000
        },
        effect: "slide",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {
    this._getJDData();
    console.log("Current Swiper instance object", this.mySwiper);
  },
  methods: {
    _getJDData() {
      requestJD().then(res => {
        if (res.retcode === ERR_OK) {
          console.log("The result of jsonp: ", res);
        }
      });
    }
  }
};
</script>

<style scoped></style>
