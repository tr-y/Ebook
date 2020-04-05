<template>
  <div class="title-body">
    <transition name="slide-down">
      <div class="title-wraper"  v-show="titleAndButtonShow">
        <div class="left">
          <div class="icon-circle-left icon"></div>
        </div>
        <div class="right">
          <div class="icon-wraper">
            <div class="icon-cart icon"></div>
          </div>
          <div class="icon-wraper">
            <div class="icon-user icon"></div>
          </div>
          <div class="icon-wraper">
            <div class="icon-more-vertical icon"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: {
      "titleAndButtonShow": {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/global";

  .title-wraper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    background: white;
    height: px2rem(40);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15); // 水平方向，垂直方向，模糊，rgb
    .left {
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right {
      @include center;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wraper {
        flex: 0 0 px2rem(40);
      }
    }
  }
</style>
