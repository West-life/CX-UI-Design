import Vue from 'vue'


import SpotWave from './canvas-back/spot-wave/spot-wave.vue';       //canvas back spot-wave
import GlitteringStars from './canvas-back/glittering-stars/glittering-stars.vue';       //canvas back glittering-stars
import MatrixRaindrop from './canvas-back/matrix-raindrop/matrix-raindrop';       //canvas back matrix-raindrop
import CanvasBack from './canvas-back/index.vue';       //canvas bac


import Code from '../components/Code/index.vue';                  //代码块
import DemoBlock from '../components/Demo-block';                  //返演示模块

import TipBlock from '../components/Tip-block';                  //提示模块

// 文字
import MainTitle from '../components/Text-block/Main-title';                  //主标题
import SubTitle from '../components/Text-block/Sub-title';                  //副标题
import MiniTitle from '../components/Text-block/Mini-title';                  //小标题

import DescribeText from '../components/Text-block/Describe-text';                  //描述

import AttributesTable from './Attributes-block/Attributes-table/index.vue';        //attributes table
import AttributesBlock from './Attributes-block/index.vue';        //attributes block

import iconSvg from '../components/Icon/icon-svg.vue';                  //返回顶部

import BackToTop from '../components/BackToTop/index.vue';             //返回顶部

import FooterNav from '../components/Footer-nav/footer-nav.vue';       //底部链接导航

import cardOver from '../components/card-over/card-over.vue';       //底部链接导航


import NsDialog from '../components/others/dialog.vue';       //底部链接导航


const components = [
  SpotWave,
  GlitteringStars,
  MatrixRaindrop,
  CanvasBack,

  Code,
  DemoBlock,

  TipBlock,
  MainTitle,
  SubTitle,
  MiniTitle,
  DescribeText,

  AttributesTable,
  AttributesBlock,

  iconSvg,
  BackToTop,
  FooterNav,
  cardOver,
  NsDialog,
];

//binding component
components.map((component, index) => {
  Vue.component(component.name, component)
});


