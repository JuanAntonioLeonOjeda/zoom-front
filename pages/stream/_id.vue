<template>
  <div class="video-grid">
    <StreamVideo /> {{ roomId }}
  </div>
</template>

<script>

export default {
  name: 'StreamPage',
  data () {
    return {
      roomId: this.$route.params.id
    }
  },
  mounted () {
    this.socket = this.$nuxtSocket({
      name: 'stream'
    })
    const peer = new Peer(undefined, {
      path: '/peerjs',
      host: '/',
      port: 5000
    })
    peer.on('open', (id) => {
      // eslint-disable-next-line no-console
      console.log(id)
    })
    this.socket.emit('join-room', this.roomId)
    this.socket.on('user-connected', () => {
      connectToNewUser()
    })
  }
}

const connectToNewUser = () => {
  // eslint-disable-next-line no-console
  console.log('new user')
}

</script>

<style lang="scss" scoped>

</style>
