<template>
  <div class="home">
    <div class="holder">
      <div v-for="(item, idx) in results" :key="item.id" class="circle" :class="decide(idx)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curIdx: 0,
      results:[
      {
        title:"title1",
        prevDesc:"desc1"
      },
      {
        title:"title2",
        prevDesc:"desc2"
      },
      {
       title:"title3",
       prevDesc:"desc3"
       },
      {
        title:"title4",
        prevDesc:"desc4"
      },
      {
        title:"title5",
        prevDesc:"desc5"
      }
      ],
      // ctx: {},
    };
  },
  computed: {
  },
  mounted() {
    this.initLala();
  },
  methods: {
    decide(idx) {
      if (this.curIdx == idx) {
        return "high"
      } else {
        return ""
      }
    },
    initLala() {
      console.log('init');
      setInterval(() => {
        this.curIdx = (this.curIdx + 1) % 5;
        console.log('this: ', this);
        console.log('this.curIdx: ', this.curIdx);

      }, 1000);
    }
  }
}

</script>

<style>
.holder {
  display: flex;
  gap: 10px;
  margin-left: 10px;
}

.circle {
  width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 50px;
  border: black;
}


.high {
  background-color: green;
}
</style>