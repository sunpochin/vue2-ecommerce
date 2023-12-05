<template>
  <div>
    <h3>{{ msg }}</h3>
    <div>
      <h2>從 props 來的 parentMsg ==> {{ parentMsg }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  // props: { product: Object },
  props: ["parentMsg"],
  data() {
    return {
      msg: "child Test Component",
    };
  },
  mounted() {
    //
    // console.log("image-container: ", this.product);
  },
};
</script>

<style lang="scss" scoped></style>
