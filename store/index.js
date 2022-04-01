export const state = () => ({ })

export const actions = {
  async startStream () {
    const res = await this.$axios.get('/stream')
    return res.data
  }
}
