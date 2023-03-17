<template>
  <div class="home">
    <!-- <div class="holder">
      <div v-for="(item, idx) in results" :key="item.id" class="circle" :class="decide(idx)">
      </div>
    </div> -->
    <vimeo-player
      class="vimeo"
      ref="player"
      :video-id="videoID"
      @ready="onReady"
      :autoplay="true"
      :player-height="320"
      :player-width="640"
      loop="1"
    ></vimeo-player>
        <!-- <vue-vimeo-player
          ref="vimeo-player"
          video-id="247494684"
        /> -->
    <!-- <vimeo-player ref="player" :video-id="videoID" @ready="onReady" :player-height="height"></vimeo-player> -->



  </div>
</template>

<script>
// import { vueVimeoPlayer } from 'vue-vimeo-player'
// import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  // components: {
	// 	vueVimeoPlayer
	// },
  data() {
    return {
      videoID: 'some-id',
			height: 500,
			options: {
        muted: true,
        autoplay: true,
			},
			playerReady: false,

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
		onReady() {
			this.playerReady = true
		},
		play () {
			this.$refs.player.play()
		},
		pause () {
			this.$refs.player.pause()
		},

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
