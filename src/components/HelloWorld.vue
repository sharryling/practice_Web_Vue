<template>
  <div class="hello">
    <h2>轮播图</h2>
    <Slider />

    <h2>测试：Vuex</h2>
    <Singer/>
    <div>
      <div>token:{{ token }}</div>
      <div>$store.token:{{ $store.state.token }}</div>
      <div>token getter: {{ tokenTitle }}</div>
      <div>$store getter: {{ $store.getters.tokenTitle }}</div>
      
      <div>singer number: {{ singerNumber }}</div>
      <div>singer number getter: {{ singerNumberGetter }}</div>
    </div>
  </div>
</template>

<script>
// import { ERR_OK } from "../api/config.js";
import Singer from './Singer.vue'
import Slider from './Slider.vue';
import { requestBefore } from '../api/jd.m.js';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  components: {
    // Slider,
    Slider,
    Singer
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      singerNumber: state => state.singer.singerNumber,
      token: state => state.token
    }),
    ...mapGetters({
      singerNumberGetter: 'singer/singerNumber'
    }),
    // 第二种用法，简单
    ...mapGetters(['tokenTitle'])
  },
  mounted() {
    this._testDevServer();
  },
  methods: {
    _testDevServer() {
      requestBefore();
    },
    addSinger() {
      this.ADDSinger();
    }

  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
