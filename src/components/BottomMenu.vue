<template>
  <div class="bottom-body">
    <transition name="slide-up">
      <div class="bottom-wrapper" :class="{'hide-box-shadow':fontButtonShow || !titleAndButtonShow}"
           v-show="titleAndButtonShow">
        <div class="icon-wrapper">
          <div class="icon-list icon"></div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-sun icon"></div>
        </div>
        <div class="icon-wrapper" @click="changeFontButtonShow(0,1)">
          <div class="icon-brightness-contrast icon"></div>
        </div>
        <div class="icon-wrapper" @click="changeFontButtonShow(0,0)">
          <div class="icon">A</div>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="chart-wrapper" v-show="fontButtonShow">
        <div class="char-font-wrapper"  v-if="showTag === 0">
          <div class="preview" :style="{fontSize:fontSizeList[0].fontSize + 'px'}">A</div>
          <div class="preview-select">
            <div class="select-wrapper" v-for="(item,index) in fontSizeList" :key="index">
              <div class="line"></div>
              <div class="point-wrapper" @click="setFontSize(index)">
                <div class="point" v-show="defaultFontSize === item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
        </div>
        <div class="char-color-wrapper" v-if="showTag === 1"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "BottomMenu",
    props: {
      titleAndButtonShow: {
        type: Boolean,
        default: false,
      },
      fontSizeList: Array,
      defaultFontSize: Number,
    },
    data() {
      return {
        fontButtonShow: false,
        colorButtonShow: false,
        showTag:-1,
      }
    },
    methods: {
      changeFontButtonShow: function (state,showTag) {
        if (state == 1) {
          this.fontButtonShow = false;
        } else {
          this.fontButtonShow = !this.fontButtonShow
        }
       this.showTag  = showTag;
      },
      setFontSize(index) {
        this.$emit("setFontSize", index);
      },
      setSelectTheme(index) {
        this.$emit("setSelectTheme", index);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/global";

  .bottom-body {
    .bottom-wrapper {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 101;
      display: flex;
      width: 100%;
      background: white;
      height: px2rem(40);
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15); //水平方向，垂直方向，模糊，rgb
      &.hide-box-shadow {
        box-shadow: none;
      }
      .icon-wrapper {
        @include center;
        display: flex;
        flex: 1;
      }
    }
    .chart-wrapper {
      position: absolute;
      left: 0;
      bottom: px2rem(40);
      z-index: 100;
      /*display: flex;*/
      width: 100%;
      background: white;
      height: px2rem(58);
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15); //水平方向，垂直方向，模糊，rgb

      .char-font-wrapper {
        display: flex;
        height: 100%;
        .preview {
          flex: 0 0 px2rem(40);
          @include center;
        }
        .preview-select {
          flex: 1;
          display: flex;
          .select-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            &:first-child {
              .line {
                &:first-child {
                  border-top: none;
                }
              }
            }
            &:last-child {
              .line {
                &:last-child {
                  border-top: none;
                }
              }
            }
            .line {
              flex: 1;
              height: 0;
              border-top: px2rem(1) solid #ccc;
            }
            .point-wrapper {
              position: relative;
              felx: 0 0 0;
              width: 0;
              height: px2rem(7);
              border-left: px2rem(1) solid #ccc;
              .point {
                position: absolute;
                top: px2rem(-7);
                left: px2rem(-10);
                border-radius: 50%;
                width: px2rem(20);
                height: px2rem(20);
                background: white;
                border: px2rem(1) solid #ccc;
                box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
                @include center;
                .small-point {
                  height: px2rem(5);
                  width: px2rem(5);
                  background: #000;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }

    }
  }


</style>
