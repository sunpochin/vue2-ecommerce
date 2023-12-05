<template>
  <div>
    <TestComp v-bind:parent-msg="msg" />
  </div>
</template>

<script>
import TestComp from "@/components/TestComp.vue";

export default {
  components: {
    TestComp,
  },
  data() {
    return {
      msg: "Parent, Test View",
    };
  },
};
</script>

<style lang="scss" scoped></style>
