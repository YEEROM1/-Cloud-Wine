<template>
  <div class="project">
    <div class="a-content">
      <div
        class="ac-bg"
        :style="{ 'background-image': 'url(' + bgUrl + ')' }"
      ></div>
      <header>
        <viewHeader />
      </header>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import viewHeader from "./components/viewHeader.vue";
import axios from "axios";

export default {
  components: {
    viewHeader,
  },
  data() {
    return {
      bgUrl: "",
      transitionName: "slide-right",
    };
  },
  created() {
    axios.get(this.global.apiUrl + "api/getImage/app").then((res) => {
      this.bgUrl = res.data.bgUrl;
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.project {
  overflow-x: hidden;
}

.ac-bg {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
}

</style>