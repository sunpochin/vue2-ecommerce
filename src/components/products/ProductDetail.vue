<template>
  <div class="product-card">
    <div class="images-holder">
      <div>
        <img class="big-image" :src="getBig" alt="" />
      </div>
      <div class="small_conatiner">
        <div v-for="(item, idx) in getImgs" :key="idx">
          <img
            class="small_img"
            :src="item"
            v-on:click="changeBig(idx)"
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
    <div class="details">
      <div class="card_details">
        <h1 class="card-title">{{ product.title }}</h1>
        <div class="product-desc">{{ product.description }}</div>
        <div class="product-price">價格: ${{ product.price }}</div>
        <div class="row">
          <button @click="addToCart" class="btn-detail">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html {
  height: 100px;
}

.product-card {
  display: flex;
  justify-content: space-between;
  /* gap: 5px; */
  width: 100%;
  /* max-width: 1024px; */
  max-height: 700px;
  padding: 0px;
  margin: 0;
}

.images-holder {
  flex: 0 0 90%;
  overflow: auto;
  max-width: 50%;
}

/* todo: https: //stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css */
/* .demoWrapper {
	padding: 10px;
	background: white;
	box-sizing: border-box;
	resize: horizontal;
	border: 1px dashed;
	overflow: auto;
	max-width: 100%;
	height: calc(100vh - 16px);
} */

.big-image {
  /* width: 100%;
	background: gold; */
  /** <-- For the demo **/
  width: 100%;
  height: 300px;
  object-fit: cover;

  /* aspect-ratio: 1 / 1; */
  /* height: 100%; */
  /* width: 100%; */
}

.small_conatiner {
  display: flex;
  width: 100%;
  /* max-width: 100%;
	max-height: 100%; */
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0;
  overflow: hidden;
}

.small_img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
}

.big-image,
.small {
  border-radius: 10px;
}

.card_details {
  max-width: 100%;
  text-align: center;
}

.product-desc {
  max-height: 200px;
}

.product-price {
  font-size: 32px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-detail {
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  height: 2rem;
  width: 50%;
  color: grey;
  background-color: black;
  border: 1px solid grey;
  border-radius: 5px;

  transition: 0.3s;
  cursor: pointer;
}

.btn-detail:hover {
  transform: scale(1.05);
  /* background-color: grey; */
}

.btn-detail:active {
  background-color: grey;
  color: white;
}

@media (max-width: 768px) {
  html,
  body {
    overflow-x: hidden;
  }

  .product-card {
    flex-direction: column;
    width: 100%;
    margin: 0px;
    padding: 15px;
    /* padding: 5px; */
  }

  .images-holder {
    max-width: 100%;
    flex: 0 0 100%;
    padding: 10px;
  }
}

@media (max-width: 480px) {
}
</style>

<script>
import { mapActions } from "vuex";
import store from "@/vuex";

export default {
  data() {
    return {
      bigImgIdx: 0,
      product: Object(), // todo: using Object (instead of Object() ) will cause a build error
    };
  },
  components: {
    // ImageContainer,
  },
  props: ["productId"],
  computed: {
    getBig() {
      console.log("getBig: ", this.product);
      console.log("getBig: ", this.product.img[0]);
      return this.product.img[this.bigImgIdx];
    },
    getImgs() {
      console.log("array: ", this.product.img);
      return this.product.img;
    },
  },
  methods: {
    changeBig(idx) {
      console.log("idx: ", idx);
      this.bigImgIdx = idx;
    },
    addToCart() {
      store.commit("addToCart", this.product);
    },
    ...mapActions({
      setCurProduct: "setCurProduct",
      // addToCart: 'addToCart',
    }),
    async getSingle() {
      let products = store.getters.getProducts;
      console.log("let products: ", products);
      let index = products.findIndex((item) => `${this.productId}` == item.id);
      this.product = products[index];
      console.log("this.product: ", this.product);
      return this.product;
    },
  },
  created() {
    this.getSingle();
    // this.setCurProduct(ret);
    console.log("ProductDetail route", this.$route);
    console.log("productId: ", this.productId);
  },
};
</script>
