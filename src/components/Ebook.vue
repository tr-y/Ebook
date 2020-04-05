<template>
  <div class="ebook" >
      <title-menu :titleAndButtonShow =titleAndButtonShow></title-menu>
    <div class="read-wraper">
      <div id="read"></div>
      <div class="mask">
        <div class="left"   @click="leftTurning" ></div>
        <div class="center" @click="changeTitleAndButtonShow()"></div>
        <div class="right"  @click="rightTurning"></div>
      </div>
    </div>
      <bottom-menu :titleAndButtonShow =titleAndButtonShow ref="bottomMenu" :fontSizeList="fontSizeList" :defaultFontSize="defaultFontSize" @setFontSize="setFontSize"  setSelectTheme="setSelectTheme"></bottom-menu>
  </div>
</template>

<script>
import Epub from 'epubjs'
import TitleMenu from  '@/components/TitleMenu';
import BottomMenu from "@/components/BottomMenu";
const DOWNLOAD_PATH = '/static/deep web.epub'
export default {
  name: 'Ebook',
  components: {TitleMenu,BottomMenu},
  data(){
    return{
      titleAndButtonShow:false,
       fontSizeList:[
         {fontSize:12},
         {fontSize:14},
         {fontSize:16},
         {fontSize:18},
         {fontSize:20},
         {fontSize:22},
         {fontSize:24}
         ],
      defaultFontSize:16,
      styleTheme : ['default','eye','night','gold'],
      defaultThem:0,
      themeList:[
        {
          name:'default',
          style:{
            body:{
            'color':'#000',
            'background':'FFF'
            }
          }
        },
        {
          name:'eye',
          style: {
            body:{
              'color': '#000',
              'background': '#ceeaba'
            }
          }
        },
        {
          name:'night',
          style: {
            body: {
              'color': '#fff',
              'background': '#000'
            }
          }
        },
        {
          name:'gold',
          style: {
            body: {
              'color': '#000',
              'background': 'rgb(241,236,226)'
            }
          }
        },

      ]
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
      this.themes = this.rendition.themes;
      this.registerTheme();
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
    changeTitleAndButtonShow(){
      this.titleAndButtonShow = !this.titleAndButtonShow
      this.$refs.bottomMenu.changeFontButtonShow(1,-1);
    },
    setFontSize(index){
      this.defaultFontSize = this.fontSizeList[index].fontSize;
      if(this.themes){
        this.themes.fontSize(this.defaultFontSize+'px')
      }
    },
    registerTheme(){
     this.themeList.forEach(them=>{
       this.themes.register(them.name,them.style);
     })
    },
    setSelectTheme(index){
      this.themes.select(styleTheme[index].name);
      this.defaultThem = index;
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




}


</style>
