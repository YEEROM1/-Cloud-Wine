<template>
  <div class="history">
    <div
      class="hs-content"
      :style="{ 'background-image': 'url(' + his_des[4] + ')' }"
    >
      <div
        class="hsc-item"
        v-for="(item, index) in historyData"
        :key="index"
        :style="{ 'background-image': 'url(' + his_des[0] + ')' }"
      >
        <div class="hsc-ani" @click="changeStory(index)">
          <img class="hst-image" v-bind:src="his_img[index]" alt="" />
          <div
            class="hst-text"
            :style="{ 'background-image': 'url(' + his_des[4] + ')' }"
          >
            <div class="hst-title">
              {{ item.title }}
              <div
                class="hst-des"
                :style="{ 'background-image': 'url(' + his_des[7] + ')' }"
              ></div>
            </div>
            <div class="hst-body">{{ item.story }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import "@/assets/css/factory.css";
import "@/assets/css/history.css";

export default {
  data() {
    return {
      his_img: [],
      historyData: [
        {
          title: "猿猴造酒说",
          story:
            "猿猴以采集野果为生，且有善于藏果的特性。而在自然界中，果实的生长有着严格的季节性，故常要有所储存。洪荒时代的古猿将一时吃不完的果实藏于岩洞、石洼中，久而久之，果实腐烂，那含有糖分的野果通过自然界的野生酵母菌自然发酵而生成酒精、酒浆，因而有了“猿猴善采一百花酿酒”、“尝于石岩深处得猿酒”等传说。清代文人李调元在他的著作中记叙道：“琼州（今海南岛）多猿……。尝于石岩深处得猿酒，盖猿以稻米杂百花所造，一石六辄有五六升许，味最辣，然极难得。”清代的另一种笔记小说中也说：“粤西平乐（今广西壮族自治区东部，西江支流桂江中游）等府，山中多猿，善采百花酿酒。樵子入山，得其巢穴者，其酒多至娄石。饮之，香美异常，名曰猿酒。”看来人们在广东和广西都曾发现过猿猴“造”的酒。无独有偶，早在明朝时期，这类的猿猴“造”酒的传说就有过记载。明代文人李日华在他的著述中，也有过类似的记载：“黄山多猿猱，春夏采杂花果于石洼中，酝酿成酒，香气溢发，闻娄百步。野樵深入者或得偷饮之，不可多，多即减酒痕，觉之，众猱伺得人，必嬲死之。”。这些不同时代、不同人的记载，起码可以证明这样的事实，即在猿猴的聚居处，多有类似“酒”的东西发现。至于这种类似“酒”的东西，是怎样产生的，是纯属生物学适应的本能性活动，还是猿猴有意识、有计划的生产活动，那倒是值得研究的。",
        },
        {
          title: "仪狄作酒说",
          story:
            "史籍中有多处提到“仪狄作酒而美”、“始作酒醪”的记载，似乎仪狄乃制酒之始祖。这是否事实，有待于进一步考证。一种说法叫“仪狄作酒醪，杜康作秫酒”。这里并无时代先后之分，似乎是讲他们作的是不同的酒。醪，是一种糯米经过发酵工而成的醪糟儿。性温软，其味甜，多产于江浙一带。如今的不少家庭中，仍自制醪糟儿。醪糟儿洁白细腻，稠状的糟糊可当主食，上面的清亮汁液颇近于酒。秫，高梁的别称。杜康作秫酒，指的是杜康造酒所使用的原料是高梁。一种说法叫“酒之所兴，肇自上皇，成于仪狄”。意思是说，自上古三皇五帝的时候，就有各种各样的造酒的方法流行于民间，是仪狄将这些造酒的方法归纳总结出来，始之流传于后世的。",
        },
        {
          title: "杜康造酒说",
          story:
            "杜康是我国古代传说中的“酿酒始祖”。杜康，字仲宁。周代人，生于陕西白水县康家卫,葬于此地。三国时魏武帝营操在《短歇行》中留下：“慨当以慷，忧思难忘；何以解忧唯有杜康”的千古绝唱。冠我民族之酒魂，纵横天下独占春!明万历年间，在杜康沟像建社康庙。《创修杜公祠》碑文载:“杜公讳康。字仲宁，生于县之康家卫，立庙墓在焉。考之史，善造酒。”唐代诗圣杜甫，在安史之乱时，曾挈家到白水投弈其舅崔少府，写了《白水旧宅喜雨》等诗多首。有:“社康频劳劝,张梨不外求”的佳句。苏东坡《止活诗》曰:“从今东玻室。不立杜颇祀。”千百年来,杜康一直被后人尊为“酿酒鼻祖”，流芳民间。",
        },
        {
          title: "上天造酒说",
          story:
            "李白在《月下独酌.其二》一诗中有这么一句，“天若不爱酒，酒星不在天”。宋朝窦在所撰的《酒谱》也有“天有酒星，酒之作也”之说。自古以来，我们祖先就有酒是天上“酒星”所造的说法。“酒旗星”这一说最早记载于《周礼》一书中，距今已有三千年的历史。这样看来，“酒旗星”应该在成书的很多年之前。当时我们的先祖在浩瀚无垠的天空中观察到一字排开的三颗微弱的小星，就把它当做是主管天上人间美酒的星空令旗,可以想见.当时喝酒或者生活史都有令旗的普遍使思。古人普遍认为，酒星下凡赐给民间美酒，或者使用魔力将粮食和果实变成酒。人们不明白为什么果实或者粮食放置一段时间后，不仅没有腐烂变臭，反而产生了一种神奇的液体，香气轻柔，优雅纯净，自然就相信酒在形成的过程中有一股神力所在。所以这就为什么很多酿酒坊在开始酿酒时，都有一定的庄严仪式。在众多民间故事里，也有很多关于神仙和酒的故事。",
        },
      ],
      his_des: [],
      his_active: "",
    };
  },
  methods: {
    changeStory(index) {
      this.his_active = index;
    },
  },
  created() {
    axios.get("http://121.40.40.218:8000/api/getImage/history").then((res) => {
      this.his_img = res.data.his_img;
      this.his_des = res.data.his_des;
    });
  },
  mounted() {},
  watch: {
    his_active(newdata, olddata) {
      let text = document.querySelectorAll(".hst-text");
      text.forEach((item) => {
        item.classList.remove("active");
      });
      console.log(olddata + " " + newdata);
      text[newdata].classList.add("active");
    },
  },
};
</script>