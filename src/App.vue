<template>
  <div id="app">
    <HeaderPart />
    <router-view :key="$route.path"></router-view>
    <FooterPart />
  </div>
</template>

<script>
import HeaderPart from "./components/main/HeaderPart.vue";
import FooterPart from "./components/main/FooterPart.vue";
import CommonMixin from "./utils/CommonMixin";
import store from "@/vuex";

export default {
  name: "App",
  components: {
    HeaderPart,
    FooterPart,
  },
  methods: {
    setProducts(pro) {
      store.commit("setProducts", pro);
    },
  },
  created() {
    const { shoes } = CommonMixin();
    this.setProducts(shoes);
    console.log("products: ", store.getters.getProducts);
    console.log("App created: ");
  },
};
</script>

<style>
* {
  color: inherit;
  margin: 0;
  padding: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

#app {
  margin: 0;
  padding: 0;
  width: 100%;

  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: hsl(220, 13%, 13%);
  font-size: 62.5%;
}

body {
  font-family: "Kumbh Sans", sans-serif;
  padding: 0 100px 0 100px;
}

@media (max-width: 768px) {
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    /* padding: 0 40px 0 40px; */
  }
}
</style>
