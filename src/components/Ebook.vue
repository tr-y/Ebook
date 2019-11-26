<template>
  <div class="ebook" >
    <transition name="slide-down">
    <div class="title-wraper" v-show="titleAndButtonShow">
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
    <div class="read-wraper">
      <div id="read"></div>
      <div class="mask">
        <div class="left"   @click="leftTurning" ></div>
        <div class="center" @click="changeTitleAndBottonShow()"></div>
        <div class="right"  @click="rightTurning"></div>
      </div>
    </div>
    <transition name="slide-up">
    <div class="bottom-wrapper" v-show="titleAndButtonShow">
        <div class="icon-wraper">
          <div class="icon-list icon"></div>
        </div>
        <div class="icon-wraper">
          <div class="icon-sun icon"></div>
        </div>
        <div class="icon-wraper">
          <div class="icon-brightness-contrast icon"></div>
        </div>
        <div class="icon-wraper">
          <div class="icon">A</div>
        </div>
    </div>
    </transition>
  </div>
</template>

<script>
import Epub from 'epubjs'
const DOWNLOAD_PATH = '/static/deep web.epub'
export default {
  name: 'Ebook',
  data(){
    return{
      titleAndButtonShow:false
    }
  },
  methods: {
    showEpub () {
      this.book = new Epub(DOWNLOAD_PATH)
      this.rendition = this.book.renderTo('read',{
        width : window.innerWidth,
        height: window.innerHeight
      })
      this.rendition.display();
    },
    leftTurning () {
      if (this.rendition) {
        this.rendition.prev();
      }
    },
    rightTurning () {
      if(this.rendition) {
        this.rendition.next()
      }
    },
    changeTitleAndBottonShow(){

      this.titleAndButtonShow = !this.titleAndButtonShow
    }
  },
  mounted () {
    this.showEpub()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/global";
.ebook{
  position: relative;
  .read-wraper{
    .mask{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex;

      .left{
        flex: 0 0 px2rem(100);

      }
      .center{
        flex: 1;

      }
      .right{
        flex: 0 0 px2rem(100);

      }
    }

  }
  .title-wraper{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    background: white;
    height: px2rem(40);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,.15);   //水平方向，垂直方向，模糊，rgb
    .left{
      flex: 0 0  px2rem(60);
      @include center;
    }
    .right{
      @include center;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wraper{
        flex: 0 0 px2rem(40);
      }
    }
  }
  .bottom-wrapper{
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    background: white;
    height: px2rem(40);
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);   //水平方向，垂直方向，模糊，rgb
      .icon-wraper{
        @include center;
        display: flex;
        flex: 1;
      }

  }


}


</style>
