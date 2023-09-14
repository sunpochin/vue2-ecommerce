<template>
  <div class="product-card" @click="jumpToDetail">
    <div class="center-cropped">
      <img :src="product.img[0]" />
    </div>
    <div class="card-details">
      <div class="card-title">{{ product.title }}</div>
      <div class="card-price">價格: ${{ product.price }}</div>
    </div>
  </div>
</template>

<script scoped>
import store from "@/vuex";
import router from "@/router";

export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      store.commit("addToCart", this.product);
    },
    jumpToDetail() {
      let str = "/products/" + this.product.id;
      console.log("id: ", str);
      router.push(str);
    },
  },
};
</script>

<style scoped>
/* https://stackoverflow.com/questions/11552380/how-to-automatically-crop-and-center-an-image */
.center-cropped {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.center-cropped img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 9px;
}

.product-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 450px;
  border-radius: 9px;
}

.card-details {
  height: 60px;
}

.card-title {
  font-weight: bold;
  font-size: 24px;
  margin-top: 10px;
  height: 100%;
}

.card-price {
  margin-top: 10px;
  font-size: 24px;
  height: 30px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto;
  height: 20%;
  width: 100%;
}

.btn-detail {
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  height: 3rem;
  width: 100%;
  color: grey;
  background-color: black;
  border: 1px solid grey;
  border-radius: 5px;

  transition: 0.3s;
  cursor: pointer;
}

.btn-detail:hover {
  transform: scale(1.05);
}

.btn-detail:active {
  background-color: grey;
  color: white;
}

@media (max-width: 1200) {
  html {
    font-size: 85%;
  }
}

@media (max-width: 768) {
  html {
    font-size: 55%;
  }
}
</style>
