---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
//const douyin = `<svg t="1668955467432" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1563" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="1564"></path></svg>`
const members = [
  {
    avatar: '/aaaxyw.jpg',
    name: 'aaaxyw',
    title: 'Chief',
    links: [{ icon: 'twitter',link:'https://twitter.com/aaaxyw'}, { icon: 'github', link: 'https://github.com/AaaXya' }],
    sponsor:'https://github.com/AaaXya'
  },{
    avatar: '/ls.jpeg',
    name: 'ls',
    title: 'Subsidiary',
    links: [
      { icon:{svg:`<svg t="1669041702975" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2695" width="200" height="200"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="2696"></path></svg>`},link:'https://space.bilibili.com/388151398'},
      { icon: 'github', link: 'https://github.com/AaaXya' },
      // { icon: 'twitter', link: 'https://twitter.com/aaaxyw' }
    ],
    // desc:'合作伙伴',
    sponsor:'https://space.bilibili.com/388151398'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
    <b>关于我们</b>
    </template>
    <template #lead>
    <b> ENATE </b>意为 concatenate（连接），取后五个字符命名<br>
    本站基于<Hf title="https://vitepress.vuejs.org/"> vitepress </Hf>构建。vitepress 是 vue + vite 驱动的 ssg 生成工具。markdown 渲染，内嵌 vue 组件。使用起来体验非常好，集成了很多写法，很好的扩展性，本人已全面拥抱 vite。网页的内容基本上是我们团队成员英语学习过程中的一些笔记。<br>
    以下是我们团队的成员，欢迎<Hf title="/guide/family">加入我们</Hf>一起学习
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
