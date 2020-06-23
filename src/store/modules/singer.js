const state = () => ({
  singerNumber: 220
})

const getters = {
    singerNumber: state => {
        return `歌手的总数量为：${state.singerNumber}`
    }
}

const actions = {
    subSingerNumber(context, n) {
        setTimeout(() => {
            context.commit('SUBSinger', n)
        }, 3000)
    }
}

const mutations = {
    ADDSinger(state) {
        state.singerNumber++
    },
    SUBSinger(state, n) {
        state.singerNumber = state.singerNumber - n
    }
}
export default {
  namespaced: true, // 在调用的命名空间的时候，需要加前缀，如singer/ADDSinger
  state,
  getters,
  actions,
  mutations
}
