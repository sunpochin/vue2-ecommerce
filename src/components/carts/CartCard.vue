<template>
  <div class="cartItem-card">
    <div class="card-title">{{ cartItem.title }}</div>
    <div class="card-image">
      <img :src="cartItem.image" />
    </div>
    <div>Price: {{ cartItem.price }}</div>
    <div>Count: {{ cartItem.count }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cartItem: Object,
  },
};
</script>

<style>
.cartItem-card {
  display: flex;
  width: 100%;
  gap: 3px;
  border: 1px solid red;
  border-radius: 10px;
}
.card-title {
  width: 150px;
}
.card-image {
  height: 150px;
  width: 150px;
}
</style>
