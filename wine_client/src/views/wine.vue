<template>
  <div class="wine-detail">
    <div
      class="wd-img"
      :style="{ 'background-image': 'url(' + wiki_des[3] + ')' }"
    >
      <img :src="fla_img[this.$route.query.context]" alt="" />
      <h2>{{ wine_detail.name }}</h2>
    </div>
    <div
      class="wd-context"
      :style="{ 'background-image': 'url(' + wiki_des[4] + ')' }"
    >
      <h1>{{ wine_detail.wine }}</h1>
      <p v-for="(item, index) in context" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      con_index: this.$route.query.context,
      fla_img: [],
      wine_detail: [],
      context: [],
      wiki_des: [],
    };
  },
  created() {
    axios.get(this.global.apiUrl + "api/getImage/wiki").then((res) => {
      this.fla_img = res.data.fla_img;
      this.wiki_des = res.data.wiki_des;
    });

    axios
      .get(this.global.apiUrl + "api/getDetail/wine", {
        params: {
          id: this.$route.query.context,
        },
      })
      .then((res) => {
        this.wine_detail = res.data;
      });
  },
  watch: {
    wine_detail(newdata, olddata) {
      this.context = newdata.context.split("--");
    },
  },
};
</script>

<style>
.wine-detail {
  height: 85vh;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.wine-detail .wd-img {
  width: 30%;
  padding: 0 2.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wine-detail .wd-img img {
  height: 70%;
}

.wine-detail .wd-context {
  width: 70%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wine-detail .wd-context h1 {
  border-bottom: 1px dashed rgba(142, 90, 86);
  padding-bottom: 15px;
}

.wine-detail .wd-context p {
  font-size: 20px;
  text-indent: 40px;
}

.wine-detail .wd-context p:nth-child(2) {
  margin-top: 15px;
}
</style>