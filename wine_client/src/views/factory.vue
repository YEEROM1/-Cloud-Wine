<template>
  <div>
    <div class="factory">
      <div
        class="f-title"
        :style="{ 'background-image': 'url(' + fac_img[8] + ')' }"
      >
        <span class="ft-text">酒厂•功臣</span>
        <span class="ft-sen">“不是春来偏爱酒,应须得酒遣春愁”</span>
      </div>
      <div
        class="f-main"
        :style="{ 'background-image': 'url(' + fac_img[0] + ')' }"
      >
        <div class="fm-left">
          <ul>
            <li
              v-for="(item, index) in f_main"
              :key="index"
              :class="[index == renindex ? 'li-active' : '']"
              :style="{ 'background-image': 'url(' + logo[index] + ')' }"
              @click="change(index)"
            ></li>
          </ul>
          <span>{{ fm_render.name }}</span>
        </div>
        <div class="fm-right">
          <div class="fmr-title">荣誉</div>
          <div class="swiper" id="fm-swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(items, index) in fm_render.honor"
                :key="index"
              >
                <div
                  class="fm-con"
                  v-for="(item, index2) in items"
                  :key="index2"
                >
                  <div
                    class="time"
                    :style="{ 'background-image': 'url(' + fac_img[5] + ')' }"
                  >
                    {{ item.time }}
                  </div>
                  <div class="honor">
                    <div class="honor-des">
                      <div class="hd-con">
                        <img v-bind:src="fac_img[7]" alt="" class="honor-des" />
                      </div>
                      <div class="hd-con">
                        <img v-bind:src="fac_img[6]" alt="" class="honor-des" />
                      </div>
                    </div>
                    {{ item.honor }}
                  </div>
                </div>
              </div>
            </div>
            <div class="fms-des">
              <img
                v-bind:src="fac_img[2]"
                alt=""
                class="fms-before swiper-button-prev"
              />
              <img
                v-bind:src="fac_img[3]"
                alt=""
                class="fms-next swiper-button-next"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="f-history"
        :style="{ 'background-image': 'url(' + fac_img[1] + ')' }"
      >
        <p>酒厂历史</p>
        <span v-for="(item, index) in text" :key="index">{{ item }}</span>
      </div>
    </div>
    <div
      class="people"
      :style="{ 'background-image': 'url(' + fac_img[1] + ')' }"
    >
      <div
        class="p-title"
        :style="{ 'background-image': 'url(' + fac_img[5] + ')' }"
      >
        酒界功臣
      </div>
      <div
        class="p-mian"
        :style="{ 'background-image': 'url(' + fac_img[0] + ')' }"
      >
        <div class="swiper" id="p-swiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in p_data"
              :key="index"
            >
              <div
                class="ps-title"
                :style="{ 'background-image': 'url(' + fac_img[12] + ')' }"
              >
                {{ item.job }}
                <div
                  class="pst-des"
                  :style="{ 'background-image': 'url(' + fac_img[13] + ')' }"
                ></div>
              </div>
              <div
                class="ps-item"
                :style="{ 'background-image': 'url(' + fac_img[0] + ')' }"
              >
                <div
                  class="ps-detail"
                  v-for="(name, index) in item.name"
                  :key="index"
                >
                  <img v-bind:src="item.img[index]" alt="" />
                  <span
                    class="psd-name"
                    :style="{ 'background-image': 'url(' + fac_img[11] + ')' }"
                  >
                    {{ name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="ps-des">
            <img
              v-bind:src="fac_img[2]"
              alt=""
              class="ps-before swiper-button-prev"
            />
            <img
              v-bind:src="fac_img[3]"
              alt=""
              class="ps-next swiper-button-next"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "vue-awesome-swiper";
import axios from "axios";
import "swiper/dist/css/swiper.css";
import "@/assets/css/factory.css";

export default {
  data() {
    return {
      logo: [],
      text: [],
      f_main: [],
      renindex: 0,
      fm_render: {},
      fac_img: [],
      p_data: [],
    };
  },
  methods: {
    initSwiper1() {
      let swiper1 = new Swiper("#fm-swiper", {
        navigation: {
          nextEl: ".fms-next",
          prevEl: ".fms-before",
        },
        on: {
          slideChangeTransitionStart: function () {
            // console.log(this.realIndex);
          },
          slideChangeTransitionEnd: function () {},
        },
      });
    },
    initSwiper2() {
      let swiper2 = new Swiper("#p-swiper", {
        navigation: {
          nextEl: ".ps-next",
          prevEl: ".ps-before",
        },
      });
    },
    change(index) {
      this.renindex = index;
    },
  },
  created() {
    axios.get(this.global.apiUrl + "api/getFactory").then((res) => {
      console.log(res.data);
      this.f_main = res.data;
      console.log(this.f_main);
    });

    axios.get(this.global.apiUrl + "api/getImage/factory").then((res) => {
      this.fac_img = res.data.fac_img;
      this.p_data = res.data.p_data;
      this.logo = res.data.logo;
    });
  },
  mounted() {},
  watch: {
    renindex() {
      this.fm_render = this.f_main[this.renindex];
    },
    f_main(newdata, olddata) {
      this.fm_render = this.f_main[this.renindex];
    },
    fm_render(newdata, olddata) {
      console.log(this.fm_render);
      this.text = this.fm_render.history.split("。-");
      setTimeout(() => {
        this.initSwiper1();
      }, 0);
    },
    p_data(newdata, olddata) {
      setTimeout(() => {
        this.initSwiper2();
      }, 0);
    },
  },
};
</script>