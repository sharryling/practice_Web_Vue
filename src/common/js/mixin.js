import { mapGetters } from 'vuex'
export const playListMixin = {
    computed: {
        ...mapGetters([
            'playList'
        ])
    },
    mounted() {

    },
    acctivated() {},
    watch: {
        playList(newVla) {}
   },
   methods: {
       handlePlayList() {
           throw new Error('如果组件有这个方法，就不会在mixin调用这个方法了，此时就会报错，声明缺少这个方法')
            // 也就是说，如果组件有同名方法，mixin的方法会被覆盖掉。
        }
   }


}