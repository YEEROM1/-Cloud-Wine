<template>
  <div class="about">
    <div
      class="ab-content"
      :style="{ 'background-image': 'url(' + ab_bg[0] + ')' }"
    >
      <div
        class="abc-left"
        :style="{ 'background-image': 'url(' + ab_des[0] + ')' }"
      >
        <img v-bind:src="ab_head" alt="" class="head" />
        <div class="details">
          <p class="name">姓名：唐家伟</p>
          <p class="feature">性别：男♂</p>
          <p class="feature">学院：计算机学院</p>
          <p class="feature">专业：电商20202</p>
        </div>
      </div>
      <div
        class="abc-right"
        :style="{ 'background-image': 'url(' + ab_des[0] + ')' }"
      >
        <div class="profile">
          <p>
            算是个米卫兵,14年开始玩米哈游游戏，约为3.6坤年(注：一坤年 =
            两年半)，不过现在只有原神在玩了，而且也只是偶尔玩(⊙▽⊙)，你们怎么知道我<b>40抽两个纳西妲</b>(✪ω✪)，另外也玩很多其他游戏，例如lol，无主之地全系列(我也是个无主之地粉丝)，恐怖黎明啥的阿巴阿巴......总之成分比较复杂，唯一不变的成分就是老二次元<b>(最喜欢蕾姆)</b>，虽然现在也不怎么看番了
          </p>
          <p>
            技术方面会点前端，会用d3做点前端数据可视化，但UI很烂；后端会用ajax简单传下数据和增删改查
          </p>
          <p>
            这个作品里的工艺流程的数据用的是我参加的项目的数据，其他数据来源为“酒志网”，同时也是因为自己有个白酒相关的项目才会做关于酒的网站，大概介绍结束(￣▽￣)~*
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/about.css";
import axios from "axios";

export default {
  data() {
    return {
      ab_bg: [],
      ab_des: [],
      ab_head: [],
    };
  },
  created() {
    axios.get(this.global.apiUrl + "api/getImage/about").then((res) => {
      this.ab_bg = res.data.ab_bg;
      this.ab_des = res.data.ab_des;
      this.ab_head = res.data.ab_head;
    });
  },
};
</script>

<style>
</style>