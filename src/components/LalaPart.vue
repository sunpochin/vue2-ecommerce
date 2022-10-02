<template>
  <div class="home">
    <canvas id="canvas" />

  </div>
</template>

<script>
import {start, init} from '../assets/ball.js'
export default {
  data() {
    return  {
      ctx: {},
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      console.log('init');
      const canvas = document.querySelector("#canvas")
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      this.ctx = canvas.getContext('2d');
      init(this.ctx, canvas.width, canvas.height)
      start()
    }
  }
}

</script>
