<template>
  <div>
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide img-src="/0_1_20220922160038.jpg">
        <!-- <img src="/0_1_20220922160038.jpg" /> -->
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="/1_1_20220922160038.jpg"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="/2_1_20220922160038.jpg"
            alt="image slot">
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="/3_1_20220922160039.jpg" alt="image slot">
        </template>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        console.log('slide: ', slide);
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log('slide: ', slide);
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.carousel-indicators li {
  border-color: #e100ff;
  border-width: 12px;
  border-style: none solid none solid;
  background-color: #e100ff;
  height: 2px;
  margin: 0 16px;
  opacity: 1;
  padding: 1px;
  position: relative;
}

.carousel-indicators li::after {
  bottom: -7px;
  content: none;
  left: -7px;
  padding: 1px;
  position: absolute;
  right: -7px;
  top: -7px;
}

.carousel-indicators li.active {
  background-color: #7f00ff;
  border-color: #7f00ff;
  border-width: 12px;
  border-style: none solid none solid;
}
</style>