<template>
    <div class="video-player p20">
        <code><a class="link-type" href="https://github.com/surmon-china/vue-video-player">Vue-Video-Player</a> 适用于 Vue 的 video.js 播放器组件。</code>
        <video-player  class="video-player-box"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        customEventName="customstatechangedeventname"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                        @canplaythrough="onPlayerCanplaythrough($event)"

                        @statechanged="playerStateChanged($event)"
                        @ready="playerReadied">
        </video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
    components: {
        videoPlayer
    },
    data() {
      return {
        // videojs options
        playerOptions: {
          height: '360',
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        }
      }
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
      setTimeout(() => {
        console.log('dynamic change options', this.player)
        this.player.muted(false)
      }, 5000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
}
</script>
<style lang="less" scoped>
    .video-player-box{
        height:400px;
    }
</style>
