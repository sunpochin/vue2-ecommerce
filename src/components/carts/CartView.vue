<template>
  <div class="cartview">
    <div class="containerTable">
      <div v-if="!showTable">
        <h2 class="empty-cart">
          購物車是空的，請<strong
            ><router-link class="route" to="/products"
              >回到商品頁</router-link
            ></strong
          >
        </h2>
      </div>
      <table v-if="showTable">
        <thead>
          <tr class="clstr">
            <th scope="col">圖</th>
            <th scope="col">品名</th>
            <th scope="col">價格</th>
            <th scope="col">數量</th>
          </tr>
        </thead>
        <tr v-for="item in getCartProducts" :key="item.id">
          <td>
            <div class="containerImg">
              <img :src="item.img[0]" />
            </div>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="clsCount">
              <button @click="removeItem(item)">-</button>
              {{ item.count }}
              <button @click="addItem(item)">+</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <hr />
    <div v-if="showTable" class="clsSubtotal">
      <div class="checkout">
        <div>總金額: {{ getSubTotal }} USD</div>
        <div>貨品數: {{ getTotalCount }} 個</div>
        <button class="checkout-button" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/vuex";

export default {
  components: {},
  computed: {
    showTable() {
      return store.getters.getCartItems.length === 0 ? false : true;
    },
    getCartProducts() {
      if (store.getters.getCartItems.length >= 1) {
        console.log("getCartProducts: ", store.getters.getCartItems);
        return store.getters.getCartItems;
      } else {
        const ary = [];
        // ary.push(dummy);
        return ary;
      }
    },
    getSubTotal() {
      return store.getters.getSubTotal;
    },
    getTotalCount() {
      return store.getters.getTotalCount;
    },
    ...mapState(["itemsInCart"]),
  },
  methods: {
    checkout() {
      store.commit("openCheckout", true);
    },
    async removeItem(item) {
      console.log("minus item: ", item);
      store.commit("removeItem", item);
      this.$forceUpdate();
    },
    async addItem(item) {
      console.log("add item: ", item);
      store.commit("addToCart", item);
      this.$forceUpdate();
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* https://stackoverflow.com/questions/29617200/how-to-make-checkboxes-rounded
*/

.empty-cart * {
  text-decoration: none;
  color: black;
}

.checkout-button {
  width: 100%;
}

.empty-cart {
  text-align: center;
}

.clsSubtotal div {
  margin-left: auto;
  margin-right: 20px;
  text-align: right;
}

.cartview {
  margin: 0;
  padding: 0;
  width: 100%;
}

.containerTable {
  width: 100%;
}

table {
  width: 100%;
}

button {
  margin: 10px;
  width: 2rem;
  height: 2rem;
}
button:hover {
  transition: transform 0.9s ease-in-out;
  transform: scale(1.1);
}
.clsCount {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.containerImg {
  max-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* table {
	border-collapse: collapse;
}

tr {
	border-bottom: 1pt solid black;
} */

.containerDesc {
  max-width: 90px;
}

.clstr {
  border: 1px solid black;
  background-color: grey;
}

td,
th {
  padding: 0.5rem;
}
</style>
