<template>
  <div
    class="people-detail"
    :style="{ 'background-image': 'url(' + fac_img[8] + ')' }"
  >
    <div class="pd-img">
      <img :src="peo_img" alt="" />
    </div>
    <div class="pd-context">
      <div class="pdc-top">
        <h1 class="name">{{ peo_des.name }}</h1>
        <p class="job" v-if="job">职业：{{ peo_des.job }}</p>
        <p class="profile">{{ peo_des.profile }}</p>
      </div>
      <h3>人物经历</h3>
      <div class="pdc-bottom">
        <p v-for="item in peo_context" :key="item">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ren_id: this.$route.query.id,
      fac_img: [],
      peo_img: "",
      peo_des: "",
      peo_context: [],
      job: false,
    };
  },
  created() {
    axios.get(this.global.apiUrl + "api/getImage/factory").then((res) => {
      this.peo_img =
        res.data.p_data[this.$route.query.id[0]].img[this.$route.query.id[1]];
      this.fac_img = res.data.fac_img;
    });

    axios
      .get(this.global.apiUrl + "api/getDetail/people", {
        params: {
          id: this.$route.query.id,
        },
      })
      .then((res) => {
        this.peo_des = res.data;
      });
  },
  watch: {
    peo_des(newdata, olddata) {
      if (newdata.job !== "") {
        this.job = true;
      }
      this.peo_context = newdata.context.split("--");
    },
  },
};
</script>

<style>
.people-detail {
  height: 85vh;
  background-color: antiquewhite;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
}

.people-detail .pd-img {
  box-sizing: border-box;
  height: 90%;
  width: 30%;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-right: 1px dashed rosybrown;
  padding: 2.5%;
}

.people-detail .pd-img img {
  width: 100%;
}

.people-detail .pd-context {
  padding: 0 2.5%;
  box-sizing: border-box;
  width: 70%;
  height: 80%;
}

.people-detail .pd-context .pdc-top {
  height: 30%;
  margin-bottom: 10px;
}

.people-detail .pd-context .pdc-top .job {
  font-weight: bold;
}

.people-detail .pd-context .pdc-top .profile {
  max-height: 60%;
  overflow: auto;
  font-size: 14px;
}

.people-detail .pd-context .pdc-bottom {
  font-size: large;
  font-weight: bold;
  max-height: 60%;
  overflow: auto;
  margin-top: 10px;
}

.people-detail .pd-context h3 {
  box-sizing: border-box;
  padding: 0 2.5%;
}

.people-detail .pd-context .pdc-top .profile,
.people-detail .pd-context .pdc-bottom p {
  font-size: 16px;
  font-weight: 400;
  text-indent: 32px;
}

.people-detail .pd-context .pdc-top .profile::-webkit-scrollbar,
.people-detail .pd-context .pdc-bottom::-webkit-scrollbar {
  width: 5px;
}

.people-detail .pd-context .pdc-top .profile::-webkit-scrollbar,
.people-detail .pd-context .pdc-bottom::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-image: linear-gradient(
    to bottom,
    rgb(178, 149, 80),
    rgb(176, 114, 49)
  );
}
</style>