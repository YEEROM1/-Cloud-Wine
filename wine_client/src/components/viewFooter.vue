<template>
  <div class="footer">
    <router-link to="/about">关于我 <s>&nbsp;们&nbsp;</s></router-link>
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

.footer {
  height: 100px;
  width: 100%;
  background-image: linear-gradient(30deg, #924242, #7b5656);
  display: flex;
}

.footer a {
  color: white;
  font-size: 30px;
  font-family: 微软雅黑;
  margin: auto auto;
  text-decoration: none;
  transition: color 0.2s;
}

.footer a:hover {
  color: rgb(255, 211, 99);
}
</style>