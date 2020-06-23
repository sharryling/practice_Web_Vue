<template>
  <div class="singer">
    <button @click="addSinger">增加singer数量</button>
    <button @click="SUBSinger3(3)">延迟3s减3个singer数量</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  methods: {
    addSinger() {
      this.$store.commit('singer/ADDSinger');
    },
    ...mapMutations({
      ADDSinger: 'singer/ADDSinger' // 加了singer/前缀的原因是因为singer中加了namespaced: true,的原因
    }),
    ...mapActions({
        SUBSinger3: 'singer/subSingerNumber'
    })
  }
};
</script>
