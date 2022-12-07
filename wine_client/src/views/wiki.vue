<template>
  <div class="wiki">
    <div
      class="w-head"
      :style="{ 'background-image': 'url(' + wiki_des[5] + ')' }"
    >
      <div class="wh-title">
        <p>酒品</p>
        <p>工艺</p>
      </div>
      <div class="wh-cen">
        <div class="wh-des">
          <div>
            <img v-bind:src="wiki_des[1]" alt="" />
          </div>
          <div>
            <img v-bind:src="wiki_des[2]" alt="" />
          </div>
        </div>
        <span>十二香型•酿造技艺</span>
      </div>
    </div>
    <div class="w-flr">
      <div
        class="wfs-contain"
        :style="{ 'background-image': 'url(' + wiki_des[3] + ')' }"
      >
        <div class="swiper" id="wf-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide wfs-box"
              v-for="(item, index) in feature"
              :key="index"
            >
              <img v-bind:src="fla_img[index]" alt="" />
              <div class="wfs-text">
                <span>{{ item.feature }}</span>
                <span
                  :style="{ 'background-image': 'url(' + wiki_des[7] + ')' }"
                  >{{ item.name }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-tpc"
      :style="{ 'background-image': 'url(' + wiki_des[3] + ')' }"
    >
      <span
        class="wt-title"
        :style="{ 'background-image': 'url(' + wiki_des[6] + ')' }"
        >各香型酒品</span
      >
      <div class="wt-contain">
        <div class="wtc-item" v-for="(item, index) in feature" :key="index">
          <span>{{ item.name }}</span>
          <br />
          <span>{{ item.wine }}</span>
          <img class="wti-bg" v-bind:src="fla_img[index]" alt="" @click="wine_detail(index)"/>
          <img class="wti-hover" v-bind:src="wiki_des[0]" alt="" />
        </div>
      </div>
    </div>
    <div
      class="w-process"
      :style="{ 'background-image': 'url(' + wiki_des[3] + ')' }"
    >
      <div
        class="wp-before"
        v-on:click.stop="shift"
        :style="{ 'background-image': 'url(' + wiki_des[4] + ')' }"
      >
        <span>酿造工艺</span>
        <svg
          :class="[isShift ? 'wpb-aright' : 'wpb-aleft']"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path
            d="M767.7 480.9H207.1l217.7-217.7c12.3-12.3 12.3-32.4 0-44.7l-0.7-0.7c-12.3-12.3-32.4-12.3-44.7 0.1L107 490.3c-12.3 12.3-12.3 32.4 0 44.7l0.6 0.7c0.1 0 0.2 0.1 0.2 0.1l271.1 271.1c12.5 12.5 32.9 12.5 45.4 0s12.5-32.9 0-45.4L206.7 543.9h561c17.3 0 31.5-14.2 31.5-31.5s-14.2-31.5-31.5-31.5z"
            fill="#515151"
          ></path>
          <path
            d="M864.1 512.6a31.8 31.7 0 1 0 63.6 0 31.8 31.7 0 1 0-63.6 0Z"
            fill="#515151"
          ></path>
        </svg>
        <div class="wpb-dir"></div>
      </div>
      <div class="w-right">
        <div class="swiper" id="wp-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">浓</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">酱</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">清</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">米</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">芝</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">兼</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">豉</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">白</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">馥</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">凤</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">特</div>
            </div>
            <div
              class="swiper-slide wrs-box"
              :style="{ 'background-image': 'url(' + swiper_jar + ')' }"
            >
              <div class="box">药</div>
            </div>
          </div>
        </div>
        <div class="process">
          <div class="describe">
            <div>
              <img v-bind:src="wiki_des[1]" alt="" />
            </div>
            <div>
              <img v-bind:src="wiki_des[2]" alt="" />
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import axios from "axios";
import * as d3 from "d3";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { lines } from "@/assets/js/process";
import "@/assets/css/wiki.css";
import "@/assets/css/process.css";

// Swiper.use([Autoplay, Navigation, Pagination]);
// Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Virtual]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      isShift: false,
      process: [],
      feature: [],
      fla_img: [],
      wiki_des: [],
      products: [],
      swiper_jar: "",
    };
  },

  methods: {
    initFSwiper() {
      let swiper1 = new Swiper("#wf-swiper", {
        loop: true,
        abserveParents: true,
      });
    },
    initPSwiper() {
      let that = this;
      let swiper2 = new Swiper("#wp-swiper", {
        initialSlide: 8,
        direction: "vertical",
        watchSlidesProgress: true,
        slidesPerView: 2,
        slideToClickedSlide: true,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 5,
        effect: "coverflow",
        coverflowEffect: {
          rotate: -5,
          stretch: 130,
          depth: 280,
          modifier: 1,
          slideShadows: false,
        },
        on: {
          slideChangeTransitionStart: function () {
            document.querySelector(".process span").innerHTML = "";
            d3.select(".psvg").remove();
          },
          slideChangeTransitionEnd: function () {
            d3.select(".psvg").remove();
            let index = this.realIndex;
            lines(that.process[index]);
          },
        },
      });
    },
    shift() {
      let wp_before = document.querySelector(".wp-before");
      if (!this.isShift) {
        wp_before.style.width = "15%";
        d3.select(".psvg").remove();
        document.querySelector(".describe").style.width = "calc(100% / 3)";
        setTimeout(() => {
          lines(this.process[8]);
        }, 1000);
        this.isShift = true;
      } else {
        wp_before.style.width = "100%";
        document.querySelector(".process span").innerHTML = "";
        document.querySelector(".describe").style.width = "calc(100% / 10)";
        this.isShift = false;
      }
    },
    wine_detail(index){
      this.$router.push({
        path: '/wiki/wine_detail',
        query: {
          context: index
        }
      })
    }
  },

  created() {
    axios.get(this.global.apiUrl + "api/getImage/wiki").then((res) => {
      this.swiper_jar = res.data.jar;
      this.fla_img = res.data.fla_img;
      this.wiki_des = res.data.wiki_des;
    });

    axios.get(this.global.apiUrl + "api/getProcess").then((res) => {
      this.process = res.data;
      setTimeout(() => {
        this.initPSwiper();
      }, 0);
    });

    axios.get(this.global.apiUrl + "api/getFeature").then((res) => {
      this.feature = res.data;
      setTimeout(() => {
        this.initFSwiper();
      }, 0);
    });
  },

  mounted() {},
  watch: {},
};
</script>

<style>
</style>