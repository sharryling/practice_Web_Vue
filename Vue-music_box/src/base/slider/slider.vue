
<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        loop: {
            type: Boolean,
            default: true
        }, 
        autoPlay: {
            type: Boolean,
            default: true
        },
        intervel: {
            type: Number,
            default: 4000
        }
    }
}
</script>

<style scoped>
.slider-group {
    position: relative;
    overflow: hidden
}
.slider-item {
    float: left;
    box-sizing: border-box
}
</style>  