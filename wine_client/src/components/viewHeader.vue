<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="" />
    </div>
    <nav>
      <router-link to="/" class="h-link" active-class="hl-active" exact>首页</router-link>
      <router-link to="/wiki" class="h-link" active-class="hl-active" exact>酒品•工艺</router-link>
      <router-link to="/factory" class="h-link" active-class="hl-active" exact>酒厂•功臣</router-link>
      <router-link to="/history" class="h-link" active-class="hl-active" exact>起源•传说</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.logo {
  height: 50px;
  width: 100%;
}

.header {
  background-image: linear-gradient(30deg, #7b5656, rgb(146, 66, 66));
  opacity: 0.9;
  height: 15vh;
}

.header nav {
  margin: auto auto;
  width: 98%;
  display: flex;
  height: 7vh;
  justify-content: space-around;
  align-items: center;
  border-bottom: rgba(245, 222, 179, 0.8) solid 2px;
}

.h-link {
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: KaiTi;
  font-size: 28px;
  transition: color 0.2s;
}

.hl-active {
  color: rgb(255, 195, 42);
  text-decoration-line: overline;
}

.h-link:hover {
  color: rgb(255, 211, 99);
}
</style>