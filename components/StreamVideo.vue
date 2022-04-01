<template>
  <div id="video-grid" />
</template>

<script>
export default {
  name: 'StreamVideo',
  data () {
    return {
      newStream: ''
    }
  },
  mounted () {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then((stream) => {
      this.newStream = stream
      const myVideo = document.createElement('video')
      const grid = document.getElementById('video-grid')
      addStream(myVideo, stream, grid)
    })
  }
}
const addStream = (video, stream, grid) => {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  grid.appendChild(video)
}
</script>

<style lang="scss" scoped>

</style>
