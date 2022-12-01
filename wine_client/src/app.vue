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
    axios.get("http://121.40.40.218:8000/api/getImage/app").then((res) => {
      this.bgUrl = res.data.bgUrl;
    });
  },
  // watch: {
  //   $route(to, from) {
  //     // 切换动画
  //     let level = this.$route.meta.level; // 监听路由的层级
  //     if (level === 1) {
  //       this.transitionName = "slide-right";
  //     } else {
  //       this.transitionName = "slide-left";
  //     }
  //   },
  // },
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

/* .slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 1.5s;
  overflow: hidden;
} */
</style>