<template>
  <div class="home">
    <div class="h-title">
      <div class="ht-img">
        <div class="hti-c hti-c1">
          <img v-bind:src="this.title_img ? title_img[0] : ''" alt="" />
        </div>
        <div class="hti-text">•</div>
        <div class="hti-c hti-c2">
          <img v-bind:src="this.title_img ? title_img[1] : ''" alt="" />
        </div>
        <img v-bind:src="des_img[6]" alt="" class="ht-ani" />
      </div>
      <div
        class="ht-bottom"
        :style="{
          'background-image': 'url(' + des_img[0] + ')',
        }"
      ></div>
      <div class="htb-des">
        <div
          :style="{
            'background-image': 'url(' + des_img[2] + ')',
          }"
        ></div>
        <div
          :style="{
            'background-image': 'url(' + des_img[1] + ')',
          }"
        ></div>
      </div>
    </div>
    <div
      :style="{ 'background-image': 'url(' + des_img[3] + ')' }"
      class="h-content"
    >
      <div class="h-wiki hc-item">
        <div
          class="hwk-bg"
          :style="{
            'background-image': 'url(' + des_img[4] + ')',
          }"
        ></div>
        <div class="hwk-top">
          <router-link to="/wiki"
            ><span class="h-text1">酒品 • 工艺</span></router-link
          >
        </div>
        <div class="hwk-bottom">
          <div class="hwk-b-c">
            <span class="h-text1">十二香型</span>
            <ul class="hwkb-c h-ul">
              <li class="hwkb-li" v-for="item in flavor_data" :key="item.name">
                <span class="hwkb-li-t1">•{{ item.name }}</span>
                <br />
                <span class="hwkb-li-t2">{{ item.des }}</span>
              </li>
            </ul>
          </div>
          <div class="hwk-b-c">
            <span class="h-text1">工艺流程</span>
            <ul class="hwkb-c1 h-ul">
              <li class="hwkb-li" v-for="item in process_data" :key="item.name">
                <span class="hwkb-li-t1">•{{ item.name }}</span>
                <br />
                <span class="hwkb-li-t2">{{ item.des }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="h-source hc-item">
        <div class="hs-text">
          <router-link class="r-history" to="/history"
            ><span class="h-text2">起源</span></router-link
          >
          <router-link class="r-history" to="/history"
            ><span class="h-text2">传说</span></router-link
          >
        </div>
        <div v-for="(item, index) in hs_img.title" :key="index" class="hs-img">
          <div class="hsi-span">
            <span>{{ item }}</span>
          </div>
          <img v-bind:src="hs_img.url ? hs_img.url[index] : ''" alt="" />
        </div>
      </div>
      <div class="h-factory hc-item">
        <div class="hf-left">
          <div
            class="hfl-bg"
            :style="{
              'background-image': 'url(' + des_img[5] + ')',
            }"
          ></div>
          <router-link to="/factory">
            <span class="h-text3">酒厂•功臣</span></router-link
          >
        </div>
        <div class="hf-right">
          <div
            class="hfr-item"
            :style="{
              'background-image': 'url(' + hf_img[0] + ')',
            }"
          >
            <span class="h-text3">酒厂</span>
          </div>
          <div
            class="hfr-item"
            :style="{
              'background-image': 'url(' + hf_img[1] + ')',
            }"
          >
            <span class="h-text3">功臣</span>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <viewFooter></viewFooter>
    </footer>
  </div>
</template>

<script>
import viewFooter from "../components/viewFooter.vue";
import "@/assets/css/home.css";
import axios from "axios";

export default {
  components: {
    viewFooter,
  },
  data() {
    return {
      hs_img: {
        title: ["仪狄作酒说", "杜康造酒说", "猿猴造酒说", "上天造酒说"],
        url: [],
      },
      hf_img: [],
      des_img: [],
      title_img: [],
      flavor_data: [],
      process_data: [],
      people: {
        name: ["推广", "调酒", "领军", "酿酒"],
        purl: [],
      },
    };
  },
  created() {
    axios.get("http://121.40.40.218:8000/api/getImage/home").then((res) => {
      this.hs_img.url = res.data.imgUrl;
      this.des_img = res.data.desUrl;
      this.title_img = res.data.titleUrl;
      this.hf_img = res.data.facUrl;
    });
    axios
      .get("http://121.40.40.218:8000/api/getHome/h_wiki_data")
      .then((res) => {
        this.flavor_data = res.data.flavor_data;
        this.process_data = res.data.process_data;
      });
  },

  mounted() {
    const cheight = window.screen.availHeight;
    let ht_bottom = document.querySelector(".ht-bottom");
    let ht_des = document.querySelector(".htb-des");
    let text = document.querySelectorAll(".h-text1,.h-text2,.h-text3,.h-text4");
    window.addEventListener("scroll", () => {
      let ht_anime1 = scrollY;
      let ht_anime2 = scrollY;
      if (scrollY >= cheight / 2.5) {
        ht_anime1 = cheight / 2.5;
      }
      if (scrollY >= cheight / 1.5) {
        ht_anime2 = cheight / 1.5;
      }

      ht_bottom.style.setProperty(
        "transform",
        "translateY(" + (25 - ht_anime1 / 13) + "vh)"
      );

      ht_des.style.setProperty(
        "transform",
        "translateY(" + (60 - ht_anime2 / 25) + "vh)"
      );

      for (const t1 of text) {
        let index = parseInt(t1.className.slice(t1.className.length - 1));
        if (scrollY >= cheight * index - cheight / 2) {
          t1.style.transform = "translate(0, 0)";
          t1.style.opacity = 1;
          if (index === 1) {
            let hwk_bg = document.querySelector(".hwk-bg");
            let h_ul = document.querySelectorAll(".h-ul");
            hwk_bg.style.scale = 1;
            hwk_bg.style.opacity = 1;
            for (let item of h_ul) {
              item.style.opacity = 1;
              item.style.transform = "translate(0, 0)";
            }
          } else if (index === 3) {
            let hfr_item = document.querySelectorAll(".hfr-item");
            for (let item of hfr_item) {
              item.style.opacity = 1;
              item.style.transform = "translate(0, 0)";
            }
          }
        }
      }
    });
    setTimeout(() => {
      let hs_img = document.querySelectorAll(".hs-img");
      window.addEventListener("scroll", () => {
        for (const h_img of hs_img) {
          if (scrollY >= (cheight * 5) / 4) {
            h_img.style.transform = "translate(0, 0)";
            h_img.style.opacity = 1;
          }
        }
      });
      let ht_img = document.querySelector(".ht-img");
      ht_img.style.transform = "scale(1.2)";
      ht_img.style.opacity = 1;

      let hti_c1 = document.querySelector(".hti-c1");
      let hti_c2 = document.querySelector(".hti-c2");
      hti_c1.classList.add("hti-c1-active");
      hti_c2.classList.add("hti-c2-active");
    }, 0);
  },
};
</script>